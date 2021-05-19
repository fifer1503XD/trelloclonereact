import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import "./components.css";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faComments} from '@fortawesome/free-solid-svg-icons'
import { getComments } from '../actions/cardActions';
const Card = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const commentsCard = ()=>{
        dispatch(getComments(props.id))
        history.push("/comment")
    }
    const [comments, setComments] = useState('');
    useEffect(async()=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/${props.id}/comments/`)
        let results = await response.json();
         setComments(results.length)
    },[comments])
    return ( <>
        <div className="cards">
            <div >
                <div className="tittleList">
                {props.title}
                </div>
               <FontAwesomeIcon icon={faComments} onClick={()=>{commentsCard()}}/> {comments}

            </div>
        </div>
        </> );
}
 
export default Card;