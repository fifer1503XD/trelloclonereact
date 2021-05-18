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
            console.log(results)
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