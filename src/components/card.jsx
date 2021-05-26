import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import "./components.css";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import { getComments } from '../actions/commentActions';
import ModalDeleteCard from './Modals/ModalDeleteCard';
import { SortableElement } from "react-sortable-hoc";
import { DragHandle } from '../actions/sorteableActions';
const Card = SortableElement( ({id,title,boardId},props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const commentsCard = ()=>{
        dispatch(getComments(id))
        history.push("/comment")
    }
    const [comments, setComments] = useState('');
    useEffect(()=>{
        async function fetchMyAPI(){
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${id}/comments/`)
        let results =  await response.json();
         setComments(results.length)
    }
    fetchMyAPI();})
    return ( 
        <div className="cards" id={`${id}`}>
            <div >
                <DragHandle  />
                <div className="tittleList">
                {title}
                </div>
               <FontAwesomeIcon icon={faComments} onClick={()=>{commentsCard()}}/> {comments}
               <ModalDeleteCard name={title} cardId={id} boardId={boardId}/>
               
            </div>
        </div>
        );
})
 
export default Card;