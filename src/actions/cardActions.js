import axios from 'axios';
export const setCards = (cardObj) => {
    return {
        type: "SET_CARDS",
        cardObj
    }
}
export const setCardActive = (cardObj) => {
    return {
        type: "SET_CARD_ACTIVE",
        cardObj
    }
}
export const setComments = (cardObj) => {
    return {
        type: "SET_COMMENTS",
        cardObj
    }
}
 export const getCards = (boardId) => {  
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/${boardId}/cards/`)
            let results = await response.json();
            dispatch(setCards(results))
          }
    }
 


export const getComments =(cardId)=>{
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${cardId}/comments/`)
        let results = await response.json();
        await dispatch(setComments(results))
        await dispatch(getCard(cardId))
    }
}

export const getCard = (cardId) => {  
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${cardId}/`)
            let results = await response.json();
            await dispatch(setCardActive(results))
          }
    }

    export function newCard (newcard,boardId){
        let {name,description,list_id,owner,expiration_date,}= newcard)
        return async (dispatch)=>{
        try {
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(
              {
                "name": name,
                "description": description,
                "list_id": list_id,
                "owner":owner,
                "expiration_date":expiration_date
              })
          });
          let results = await response.json();
          dispatch(getCards(boardId))
          return results;
        } catch (error) {
            console.log(error.message);
          } 
        }
        }

        export const eraseCard = (cardId,boardId) => { 
            return async(dispatch)=>{ 
            await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${cardId}/`, { method: 'DELETE' });
                dispatch(getCards(boardId));
        }
        }