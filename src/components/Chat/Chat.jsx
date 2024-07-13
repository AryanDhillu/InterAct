import React,{ useEffect, useRef, useState } from 'react'
import "./Chat.css"
import EmojiPicker from 'emoji-picker-react'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../lib/firebase'

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior : "smooth"})
  }, []);


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", "G1cSS2ih7VaJSdBLQCVo"), (res)=>{
      setChat(res.data());
    })

    return () => {
      unSub();
    }
  }, []);

  console.log(chat);

  
  const handleEmoji = (e) => {
    setText((prev) => prev+e.emoji);
    setOpen(false);
  }

  return (
    <div className='chat'>
      
      <div className='top'>
        <div className='user'>
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor,sit amet.</p>
          </div>
        </div>

        <div className='icons'>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>








      <div className='center'>
        <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message'>
          <img src="./avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className='message own'>
          <div className='texts'>
            <img src="https://res.cloudinary.com/dojr7jo0k/image/upload/v1719046444/WIN_20240108_15_16_38_Pro_tvecoi.jpg" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, laudantium, ipsa quaerat possimus autem excepturi dolorum repudiandae repellendus culpa atque tempore voluptates tenetur nemo!</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>











      <div className='bottom'>

        <div className='icons'>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>

        <input 
          type='text' 
          placeholder='Type a message...' 
          onChange={(e) => setText(e.target.value)} 
          value={text}
        />

        <div className='emoji'>
          <img 
            src="./emoji.png" alt="" 
            onClick={() => setOpen((prev) => !prev)} />
            <div className='picker'>
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
        </div>

        <button className='sendButton'>Send</button>

      </div>

    </div>
  )
}

export default Chat
