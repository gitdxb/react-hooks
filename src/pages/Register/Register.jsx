import React from 'react';
import { useFormik } from 'formik';
import { GP_ID } from '../../util/setting';

export default function Register() {

  const formik = useFormik({
    // giá trị khởi tạo (data cần lưu trữ)
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
      maNhom: GP_ID
    },
    onSubmit: values => {
      console.log(values);
    },
  });


  return (
    <div className='container py-5'>
      <h2>Đăng ký</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor />
          <input name="taiKhoan" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.taiKhoan} placeholder="Account" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <input name="matKhau" type="password" className="form-control" onChange={formik.handleChange} value={formik.values.matKhau}  placeholder="Password" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <input name="hoTen" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.hoTen}  placeholder="Fullname" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <input name="soDt" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.soDt}  placeholder="Tel" />
        </div>
        <div className="form-group">
          <label htmlFor />
          <input name="email" type="text" className="form-control" onChange={formik.handleChange} value={formik.values.email}  placeholder="Email" />
        </div>
        <button className='btn btn-danger'>Register</button>
      </form>
    </div>
  )
}
