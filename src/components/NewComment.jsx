import React from 'react';
import "./components.css";
import ModalNewComment from './Modals/ModalNewComment';
const NewComment = () => {
   
   //  let {first_name,last_name}=owner
    return (
    <div className='comment'>
        <div className="rem2">
           Agregar nuevo comentario 
           <ModalNewComment />
        </div>

    </div>
    
          )
 }
export default NewComment;