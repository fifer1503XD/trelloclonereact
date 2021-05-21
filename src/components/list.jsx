import React,{useEffect} from 'react';
import Card from './card';
import {useDispatch,useSelector} from 'react-redux'
import "./components.css";
import ModalNewCard from './ModalNewCard';
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import ModalDeleteList from './ModalDeleteList';
const List = (props) => {
    console.log(props.title)
    const cards = useSelector(state => state.card.cards)
    return ( 
        <>
        <div className="list">
            <div >
                <ModalNewCard listId={props.id} boardId={props.boardId} />
                <ModalDeleteList listId={props.id} boardId={props.boardId} name={props.title}/>
                <div className="tittleList">
                {props.title}
                </div>
                <div className="containerCards">
                {cards.map((card)=>{   
                    if (props.id === card.list_id){  
                    return(<Card title={card.name}  id={card.id} description={card.description} boardId={props.boardId}/>)
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

        

