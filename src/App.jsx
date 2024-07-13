import { useEffect } from "react"
import Chat from "./components/Chat/Chat"
import Detail from "./components/Detail/Detail"
import List from "./components/List/List"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { auth } from "./lib/firebase" 
import { onAuthStateChanged } from "firebase/auth"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"

const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore(); 
  const { chatId } = useChatStore(); 


  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, (user) =>{
      // console.log(user.uid);
      fetchUserInfo(user?.uid)
    });

    return () => {
      unSub();
    };
  },[fetchUserInfo]);

  // console.log(currentUser);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className='container'>
      {currentUser ? (
          <>
            <List/>
            {chatId && <Chat/>}
            {chatId && <Detail/>}
          </>
        ):(
          <Login/>
        )}
        <Notification/>
    </div>
  )
}

export default App