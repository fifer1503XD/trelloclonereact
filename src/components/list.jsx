import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import Card from './card';
import {useSelector} from 'react-redux'
import "./components.css";
import ModalNewCard from './Modals/ModalNewCard';
import ModalDeleteList from './Modals/ModalDeleteList';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { getCards } from '../actions/cardActions';

const List = SortableContainer((props) => {
    const dispatch =useDispatch()
    

    let cards = useSelector(state => state.card.cards)
   useEffect(() => {
   }, [cards]);
    return ( 
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
                    return(<Card key={card.id} title={card.name}  id={card.id} description={card.description} boardId={props.boardId} index={card.position}/>)
                    
    }
                 ) }
                </div>
                <img src="" alt=""/>

            </div>
        </div>
        );
})
 
export default List

        

