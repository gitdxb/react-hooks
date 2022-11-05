import React, { memo } from 'react'

 function Cart(props) {
    
    console.log("cart");
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cart.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}


export default memo(Cart);// không nhận diện function, object, array có đổi hay không
//dữ liệu props ko đổi => không cần render lại
// khi like thay đổi thi ko render lại