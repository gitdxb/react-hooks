import React from 'react'
import { memo } from 'react'

function Post(props) {
  console.log('post');
  return (
    <div>
        <h5 className="card-title">Today is a good day</h5>
          <p className="card-text">
            <img className='w-25' src="https://i.pravatar.cc/?15" alt="" />
          </p>
          Like: <span>{props.like}</span>
    </div>
  )
}
export default memo(Post);
// memo: tự nhận biết state có truyền xuống cho component hay ko , nếu có thì render lại UI của con, ngc lại ko render lại