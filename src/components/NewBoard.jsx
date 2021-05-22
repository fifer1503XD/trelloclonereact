import React from 'react';
import "./components.css";
import getLists from '../actions/listActions'
import getBoards, {eraseBoard, setBoardActive} from '../actions/boardActions'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
export default function  NewBoard (props)  {
    const erase = ()=>
    {
      
    }
    const dispatch = useDispatch()
    const history = useHistory()
    
    const click =(board)=>{
     
    }
    return (
        <div className="board" >
            <div className="tittle rem1 tittleBoard" >Agrega nuevo tablero</div>   
            <div className="icono"><FontAwesomeIcon icon={faPlusCircle} /></div>
        </div>
        
      );
}
 

