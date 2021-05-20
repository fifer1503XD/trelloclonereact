import React,{useEffect} from 'react';
import Card from './card';
import {useDispatch,useSelector} from 'react-redux'
import "./components.css";
import ModalNewList from './ModalNewList';
const NewList = (props) => {
    console.log(props.boardId)
    const newList = (listId)=>{
        console.log(listId)
    }
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

        

