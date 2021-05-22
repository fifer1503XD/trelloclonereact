import React, {useRef,useState}from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { newComment } from '../actions/commentActions';

const PostComment = (props) => {
    const [show, setShow] = useState(true);
    const cardActive = useSelector(state => state.card.cardActive)
    const owner = useSelector(state=> state.auth.activeId)
    const dispatch = useDispatch()
    const refMessage = useRef('');

const mysubmit=(event)=>{
  if (refMessage.current.value === ""){
        event.preventDefault();
        alert ('Datos requeridos')
        
        }
        else{
        event.preventDefault();
        dispatch(newComment(refMessage.current.value,cardActive,owner))
        setShow(false)
        }
      } 
    return ( 
    <div>
        {show ? <form noValidate onSubmit={mysubmit}>
         <div className="form-group">
         <label htmlFor="Name">Mensaje</label>
        <input ref={refMessage} type="text" className="form-control" id="name" placeholder="Message"/>
        </div>
         <button type="submit" className="btn btn-primary">Agregar</button>  
    </form> : 'Su comentario ha sido agregada con exito!'}
    </div> );
}
 
export default PostComment