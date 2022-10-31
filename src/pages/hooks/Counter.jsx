//rfce
import React, { useState } from 'react'
//f2
function Counter() {
  //? giá trị khởi tạo = 0, nếu ko có giá trị khởi tạo thì giá trị khởi tạo mặc định là underfined
  //? count sẽ nhận giá trị khởi tạo useState
  //! luôn khai báo hook ở đầu
  const [count, setCount] = useState(0);

  // báo state chứa đối tượng user
  const [user, setUser] = useState({
    id: 79,
    avatar: "https://i.pravatar.cc/?u=79"
  })




  return (
    <div className='container'>
      count: {count}
      <hr />
      <button onClick={() => {
        console.log("click me")
        setCount(count + 1);
      }}>Increasement</button>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <img className="card-img-top" src={user.avatar} alt="" />
            <div className="card-body">
              <button onClick={() => {
                // random số từ 0 - 99
                let num = Math.floor(Math.random() * 100);
                let newUser = {...user, avatar: `https://i.pravatar.cc/?u=${num}`}
                setUser(newUser);
              }} className='btn btn-danger'>Random</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Counter