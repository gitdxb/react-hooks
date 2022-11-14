import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TOKENCYBER, URL_API } from '../../util/setting';

export default function ApiRfc(props) {

  let [mangPhim, setMangPhim] = useState([]);

  //didmount
  useEffect(() => {
    getAPI();
  }, []);


  let getAPI = async () => {


    try {
      let result = await axios({
        method: 'get',
        url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        headers: {
          "TokenCybersoft": TOKENCYBER
        }
      });

      setMangPhim(result.data.content);

      // console.log(mangPhim);

    } catch (error) {
      console.log(error)
    } 

  }

  let renderPhim = () => {
    return mangPhim.map((phim) => {
      return <div className='col-3' key={phim.maPhim}>
        <div className="card">
          <img className="card-img-top" src={phim.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{phim.tenPhim}</h4>
            <p className="card-text">{phim.moTa}</p>
          </div>
        </div>

      </div>
    })
  }


  return (
    <div className='container'>
      {/* {console.log(mangPhim)} */}
      <button onClick={getAPI} className='btn btn-danger'>Call API</button>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )
}
