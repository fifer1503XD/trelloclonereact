import React from 'react';
import "./components.css";
import ModalNewList from './Modals/ModalNewList';
const NewList = (props) => {
    return ( 
        <>
        <div className="list">
            <div >
                <ModalNewList listId={props.id} boardId={props.boardId}/>
                <div className="tittleList">
                Agregar nueva lista
                </div>
                <img src="" alt=""/>

            </div>
        </div>
        </>
     );
}
 
export default NewList

        

