import React, {useRef,useState}from 'react';
import { newCard } from '../actions/cardActions';
import {useDispatch, useSelector} from 'react-redux'
const PostCard = (props) => {
    let idActive = useSelector(state => state.auth.activeId)
    const [show, setShow] = useState(true);
    const dispatch = useDispatch()
    const refName = useRef('');
    const refDescription = useRef('');
    const refDate = useRef('');
    const mysubmit=(event)=>{
        if (refName.current.value === "" || refDescription.current.value === "" ||refDate.current.value === "" ){
            alert ('Datos requeridos')
            event.preventDefault();
        }
        else {
        event.preventDefault();
        const newcard={
            "name": refName.current.value,
            "description": refDescription.current.value,
            "list_id": props.listId,
            "owner":idActive,
            "expiration_date":refDate.current.value
          }
        dispatch(newCard(newcard,props.boardId))
        setShow(false)
        }
      } 
    return ( 
    <div>
         {show ? 
        <form noValidate onSubmit={mysubmit}>
        <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input ref={refName} type="text" className="form-control" id="name" placeholder="Card name"/>
        </div>
        <div className="form-group">
            <label htmlFor="Name">Description</label>
            <input ref={refDescription} type="text" className="form-control" id="name" placeholder="Card Description"/>
        </div>
        <div className="form-group">
        <label htmlFor="start">Fecha de terminacion : </label>
        <input ref={refDate} type="date" id="start" name="trip-start"/>
        </div>

        <button type="submit" className="btn btn-primary">Agregar</button>
    </form> : 'Su card ha sido agregada con exito'}
    </div> );
}
 
export default PostCard