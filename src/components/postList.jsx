import React, {useRef}from 'react';
import { newList } from '../actions/listActions';
import {useDispatch,useSelector} from 'react-redux'

const PostList = (props) => {
    const boardActive = useSelector(state => state.board.boardActive)
    const dispatch = useDispatch()
    const refName = useRef('');
    const mysubmit=(event)=>{
        event.preventDefault();
        dispatch(newList(refName.current.value,boardActive))
      } 
    return ( 
    <div>
        <form noValidate onSubmit={mysubmit}>
        <div class="form-group">
            <label for="Name">Name</label>
            <input ref={refName} type="text" class="form-control" id="name" placeholder="List Name"/>
        </div>
        <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
    </div> );
}
 
export default PostList