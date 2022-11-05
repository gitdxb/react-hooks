import React, { useMemo, useState } from 'react'
import Cart from './Cart';

export default function useMemoDemo() {
    let cart = [
        { id: 1, name: 'iphone', price: 1000},
        { id: 2, name: 'htc phone', price: 2000},
        { id: 3, name: 'lg phone', price: 3000},
    ];

    let cartMemo = useMemo(() => { 
        return cart
     }, [])

    let [like, setLike] = useState(0);

  return (
    <div className='container'>
      <div classname="card w-75">
        <img className="card-img-top" src="holder.js/100x180/" alt="" />
        <div className="card-body">
          <div>
            Like: <span>{like}</span><span style={{cursor:"pointer"}} onClick={() => {
              setLike(like + 1);
            }}>❤️</span>
          </div>
          <Cart cart={cartMemo}/>
        </div>
      </div>
    </div>
  )
}
