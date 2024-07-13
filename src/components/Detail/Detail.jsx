import React from 'react'
import "./Detail.css"
import { auth } from '../../lib/firebase'
import { useUserStore } from '../../lib/userStore'
import { useChatStore } from '../../lib/chatStore'
import { updateDoc, doc, arrayUnion, arrayRemove} from 'firebase/firestore'
import { db } from '../../lib/firebase'

const Detail = () => {

  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();
  const { currentUser  } = useUserStore();

  const handleBlock = async() => {
    if(!user) return;

    const userDocRef = doc(db, "users", currentUser.id)

    try{
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      })
      changeBlock();
    }catch(err){
      console.log(err);
    }
  }



  return (
    <div className='detail'>
      <div className='user'>
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='info'>
        <div className='option'>
          <div className='title'>
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className='photos'>
            <div className='photoItem'>
              <div className='photoDetail'>
              <img src="https://res.cloudinary.com/dojr7jo0k/image/upload/v1719046444/WIN_20240108_15_16_38_Pro_tvecoi.jpg" alt="" />
              <span>sample_photo_cloudinary</span>
            </div>
              <img src="./download.png" alt="" className='icon' /> 
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
              <img src="https://res.cloudinary.com/dojr7jo0k/image/upload/v1719046444/WIN_20240108_15_16_38_Pro_tvecoi.jpg" alt="" />
              <span>sample_photo_cloudinary</span>
            </div>
              <img src="./download.png" alt="" className='icon' /> 
            </div>
            <div className='photoItem'>
              <div className='photoDetail'>
              <img src="https://res.cloudinary.com/dojr7jo0k/image/upload/v1719046444/WIN_20240108_15_16_38_Pro_tvecoi.jpg" alt="" />
              <span>sample_photo_cloudinary</span>
            </div>
              <img src="./download.png" alt="" className='icon' /> 
            </div>
          </div>
        </div>
        <div className='option'>
          <div className='title'>
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked ? "You Are Blocked":
          isReceiverBlocked ? "User Blocked" :  
          "Block user"}</button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail
