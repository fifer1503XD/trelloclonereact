import React,{useEffect} from 'react';
import Card from './card';
import {useDispatch,useSelector} from 'react-redux'
import "./components.css";
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import ModalNewList from './ModalNewList';
const List = (props) => {
    const cards = useSelector(state => state.card.cards)
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
                {props.title}
                </div>
                <div className="containerCards">
                {cards.map((card)=>{   
                    if (props.id === card.list_id){  
                    return(<Card title={card.name}  id={card.id} description={card.description}/>)
                    }
            }
                     )

            }
                </div>
                <img src="" alt=""/>

            </div>
        </div>
        </>
     );
}
 
export default List

        

