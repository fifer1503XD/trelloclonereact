import React from 'react';
import "./components.css";
import getLists from '../actions/listActions'
import {eraseBoard} from '../actions/boardActions'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
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
        dispatch(getLists(board))

    }
    return (
        <div className="board">
        <div  onClick={()=>(click(props.id))} >
            <div className="tittle rem1">{props.title.charAt(0).toUpperCase()+props.title.toLowerCase().slice(1)}</div>
            
        </div>
        <div><FontAwesomeIcon icon={faTrash}onClick={()=>{erase()}} /></div>
        </div>
        
      );
}
 

