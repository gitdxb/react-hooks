//rfc
import React, {useCallback, useState} from 'react'
import Post from './Post'

export default function UseCallBackDemo() {
  
  let [like, setLike] = useState(0);
  let [num, setNum] = useState(0);

  let renderLike = () => {
    console.log("like");
  } // tạo lại, đổi địa chỉ, memo tưởng đổi

  //useCallback: giúp lưu lại hàm tránh thay đổi khi render lại UI
  // let renderLikeCallback = useCallback(renderLike, [])
  let renderLikeCallback = useCallback(renderLike, [like])

  return (
    <div className='container'>
      <div classname="card w-75">
        <img className="card-img-top" src="holder.js/100x180/" alt="" />
        <div className="card-body">
          <Post renderLike={renderLikeCallback}/>
          <div>
            Like: <span>{like}</span><span style={{cursor:"pointer"}} onClick={() => {
              setLike(like + 1);
            }}>❤️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

