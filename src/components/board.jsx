import React from 'react';
import "./components.css";
import getLists from '../actions/listActions'
import {eraseBoard, setBoardActive} from '../actions/boardActions'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import 'animate.css/animate.css'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
export default function  Board (props)  {
    const erase = ()=>
    {
        dispatch(eraseBoard(props.id))
    }
    const dispatch = useDispatch()
    const history = useHistory()
    
    const click =(board)=>{
        history.push("/board");
        dispatch(setBoardActive(board))
        dispatch(getLists(board))

    }
    return (
        <div className="board animate__animated animate__bounce animate__delay-0.5s" >
            <div className="tittle rem1 tittleBoard" onClick={()=>(click(props.id))}>{props.title.charAt(0).toUpperCase()+props.title.toLowerCase().slice(1)}</div>   
            <div className="icono"><FontAwesomeIcon icon={faTrash}onClick={()=>{erase()}} /></div>
        </div>
        
      );
}
 

