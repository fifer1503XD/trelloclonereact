import React, {useRef,useState}from 'react';
import { newBoard } from '../actions/boardActions';
import {useDispatch,useSelector} from "react-redux";
const PostUser = () => {
  let idActive = useSelector(state => state.auth.activeId)
  const dispatch = useDispatch();
  const refName = useRef('');
  const refDescription = useRef();

    let users = useSelector(state => state.board.users)
    console.log('users in post',users)

    const mysubmit=(event)=>{
      event.preventDefault();
      dispatch(newBoard(refName.current.value,
        refDescription.current.value,idActive))
    }   
    return ( 
      <div>

        <form noValidate onSubmit={mysubmit}>
      
        <div class="form-group">
            <label for="Name">Name</label>
            <input ref={refName} type="text" class="form-control" id="name" placeholder="BOARD NAME"/>
        </div>
        <div class="form-group">
            <label for="Description">Description</label>
            <input ref={refDescription} type="text" class="form-control" id="description" placeholder="DESCRIPTION"/>
        </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
    </div>
      
        
    );
}
 
export default PostUser;