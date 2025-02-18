import React, { useState,useEffect } from 'react'
import "./chatList.css"
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../../lib/firebase';
import { useChatStore } from '../../../lib/chatStore';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);
    const [input, setInput] = useState("");

    const { currentUser } = useUserStore();
    const { changeChat } = useChatStore();

    useEffect(() => {
      const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async(res) => {
      const items = res.data().chats;

      const promises = items.map(async(item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userdocSnap = await getDoc(userDocRef);

        const user = userdocSnap.data();

        return{...item, user}
      })

      const chatData = await Promise.all(promises)
      
      setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt));
    }
  );
      
      return ()=>{
        unSub();
      }
    },[currentUser.id]); 
3

    const handleSelect = async(chat) => {

      const userChats = chats.map((item) => {
        const {user, ...rest} = item;
        return rest;
      })

      const chatIndex = userChats.findIndex(
        (item) => item.chatId === chat.chatId
      );

      userChats[chatIndex].isSeen = true;

      const userChatsRef = doc(db, "userchats", currentUser.id);

      try{

        await updateDoc(userChatsRef,{
          chats: userChats
        })
        changeChat(chat.chatId, chat.user)
      }catch(err){
        console.log(err)
      }      
    }


    const filteredChats = chats.filter((c) => 
      c.user.username.toLowerCase().includes(input.toLowerCase())
    )

   


  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
            <img src='./search.png' alt=''/>
            <input type='text' placeholder='Search' onChange={(e) => setInput(e.target.value)}/>
        </div>
        <img src={addMode ? './minus.png' : './plus.png'} 
        alt='' className='add'
        onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {filteredChats.map((chat) => (
        <div className='item' key={chat.chatId} 
        onClick={() => handleSelect(chat)}
        style={{backgroundColor: chat?.isSeen ? "transparent" : "#5183fe"}}>
        <img src={chat.user.blocked.includes(currentUser.id) ? './avatar.png' 
          : chat.user.avatar || './avatar.png'} alt=''/>
        <div className='texts'>
          <span>
            {chat.user.blocked.includes(currentUser.id) ? "user" : chat.user.username}
            <p>{chat.lastMessage}</p>
         </span>
        </div>
      </div>
      ))}
      
      { addMode && <AddUser/>}
    </div>
  )
}

export default ChatList
