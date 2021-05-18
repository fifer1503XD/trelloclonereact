import React,{useEffect} from 'react';
import Card from './card';
import {useDispatch,useSelector} from 'react-redux'
import "./components.css";

const List = (props) => {
    const cards = useSelector(state => state.card.cards)
    return ( 
        <>
        <div className="list">
            <div >
                <div className="tittleList">
                {props.title}
                </div>
                <div>
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

        

