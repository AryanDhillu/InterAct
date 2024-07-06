import React from 'react'
import "./Detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className='user'>
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
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
        <button >Block user</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail
