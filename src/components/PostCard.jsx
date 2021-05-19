import React, {useRef}from 'react';
import { newCard } from '../actions/cardActions';
import {useDispatch, useSelector} from 'react-redux'
const PostCard = (props) => {
    let idActive = useSelector(state => state.auth.activeId)
    const dispatch = useDispatch()
    const refName = useRef('');
    const refDescription = useRef('');
    const refDate = useRef('');
    const mysubmit=(event)=>{
        event.preventDefault();
        const newcard={
            "name": refName.current.value,
            "description": refDescription.current.value,
            "list_id": props.listId,
            "owner":idActive,
            "expiration_date":refDate.current.value
          }
        dispatch(newCard(newcard,props.boardId))
      } 
    return ( 
    <div>
        <form noValidate onSubmit={mysubmit}>
        <div class="form-group">
            <label for="Name">Name</label>
            <input ref={refName} type="text" class="form-control" id="name" placeholder="BOARD NAME"/>
        </div>
        <div class="form-group">
            <label for="Name">Description</label>
            <input ref={refDescription} type="text" class="form-control" id="name" placeholder="BOARD NAME"/>
        </div>
        <div class="form-group">
        <label for="start">Fecha de terminacion : </label>
        <input ref={refDate} type="date" id="start" name="trip-start"/>
        </div>

        <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
    </div> );
}
 
export default PostCard