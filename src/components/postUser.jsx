import React, {useRef}from 'react';
import { newBoard } from '../actions/boardActions';
import {useDispatch,useSelector} from "react-redux";
const PostUser = () => {
  let idActive = useSelector(state => state.auth.activeId)
  const dispatch = useDispatch();
  const refName = useRef('');
  const refDescription = useRef();


    const mysubmit=(event)=>{
      event.preventDefault();
      dispatch(newBoard(refName.current.value,
        refDescription.current.value,idActive))
    }   
    return ( 
      <div>

        <form noValidate onSubmit={mysubmit}>
      
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input ref={refName} type="text" className="form-control" id="name" placeholder="BOARD NAME"/>
        </div>
        <div className="form-group">
            <label htmlFor="Description">Description</label>
            <input ref={refDescription} type="text" className="form-control" id="description" placeholder="DESCRIPTION"/>
        </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
    </div>
      
        
    );
}
 
export default PostUser;