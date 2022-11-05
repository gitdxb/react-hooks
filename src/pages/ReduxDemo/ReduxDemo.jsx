import React, {useState} from 'react'
import { userSelector } from 'react-redux'

export default function ReduxDemo() {

    // const { mangComment } = userSelector((state) => {
    //     // state.fakeBookReducer.mangComment
    //     return state.fakeBookReducer
    // });

    let [userComment, setUserComment] = useState({
        username:'',
        comment: ''
    })
    
    const { mangComment } = userSelector(state => state.fakeBookReducer);
    // luu cac gia tri tu form

    let renderComment = () => {
        return mangComment.map((post) => {
            return <div className="row" key={post.username}>
                <div className="col-2">
                    <img className='img-fluid' src={post.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p>{post.username}</p>
                    <p>{post.comment}</p>
                </div>
            </div>
        })
    }

    let handleInput = (e) => {
        let {id, value} = e.target;
        // console.log(id, value)
        setUserComment({
            ...userComment,
            [id]: value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault(); // ngan load lai trang
        // tao action
        let action = {
            type:'ADD_COMMENT'
            userInfo: {
                ...userComment,
                avatar:`https://i.pravatar.cc/?u=${userComment
            .username}`
            }
        }
        this.dispatch()
    }

    return (
        <div className='container'>
            <div className="w-50">
                    {renderComment()}
                <div>
                    <form action="">

                        <div className="form-group">
                            <input onChange={handleInput} type="text" className="form-control" name id="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name id="username" placeholder="Comment" />
                        </div>
                        <button className='btn btn-danger'>Send</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
