import React from 'react';
import "./components.css";
import {useSelector} from 'react-redux'
import ModalDeleteComment from './Modals/ModalDeleteComment';
const Comment = ({id, message,ownerid}) => {
    const users = useSelector(state => state.board.users)
    let owner=users.find((user =>user.id===ownerid))
    let {first_name,last_name}=owner
    return (
    <div className='comment'>
        <div className="rem2">
           {message}
        </div>
        <div>
           By : {first_name}{last_name}
           <ModalDeleteComment  commentId={id} />
        </div>
    </div>
    
          )
 }
export default Comment;