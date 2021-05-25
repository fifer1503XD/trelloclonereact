import React, {useState} from 'react';
import Card from './card';
import {useSelector} from 'react-redux'
import "./components.css";
import ModalNewCard from './Modals/ModalNewCard';
import ModalDeleteList from './Modals/ModalDeleteList';
const List = (props) => {
    let cards = useSelector(state => state.card.cards)
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
                {cards.filter((card=>props.id === card.list_id))
                    .map((card,i) =>{
                    return(<Card key={i} title={card.name}  id={card.id} description={card.description} boardId={props.boardId}/>)
                    
    }
                 ) }
                </div>
                <img src="" alt=""/>

            </div>
        </div>
        </>
        );
}
 
export default List

        

