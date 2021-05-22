import React, {useRef,useState}from 'react';
import { newList } from '../actions/listActions';
import {useDispatch,useSelector} from 'react-redux'

const PostList = (props) => {
    const [show, setShow] = useState(true);
    const boardActive = useSelector(state => state.board.boardActive)
    const dispatch = useDispatch()
    const refName = useRef('');

const mysubmit=(event)=>{
  if (refName.current.value == ""){
        console.log(event)
        event.preventDefault();
        alert ('Datos requeridos')
        
        }
        else{
        event.preventDefault();
        dispatch(newList(refName.current.value,boardActive))
        setShow(false)
        }
      } 
    return ( 
    <div>
        {show ? <form noValidate onSubmit={mysubmit}>
         <div class="form-group">
         <label for="Name">Name</label>
        <input ref={refName} type="text" class="form-control" id="name" placeholder="List Name"/>
        </div>
         <button type="submit" class="btn btn-primary">Agregar</button>  
    </form> : 'Su lista ha sido agregada con exito!'}
    </div> );
}
 
export default PostList