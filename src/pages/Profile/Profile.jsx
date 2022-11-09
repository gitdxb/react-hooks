import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Profile() {

    // Neu nguoi dung da dang nhap co access_token thi cho phep vao trang profile
    // ngc lai thong bao va chuyen ve trang login

    if (!localStorage.getItem('accessToken')){
        // chua dang nhap
        alert("ban phai dang nhap!")
        return <Redirect to="/login"/>
    }
    return (
        <div className='container'>
            <div className="card w-25">
                <img className="card-img-top" src="https://i.pravatar.cc/?15" alt="" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}
