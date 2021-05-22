import { getCard } from "./cardActions"

export const setComments = (cardObj) => {
    return {
        type: "SET_COMMENTS",
        cardObj
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
export function newComment (message,card,owner){
  const {id} = card
  
    return async (dispatch)=>{
    try {
    let response = await fetch(`https://trelloclonefelipe.herokuapp.com/comments/`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(
          {
            "message": message,
            "card_id": id,
            "owner": owner
          })
      });
      let results = await response.json();
      dispatch(getComments(id))
      return results;
    } catch (error) {
        console.log(error.message);
      } 
    }
    }

    export const eraseComment= (commentId,cardId) => { 
      return async(dispatch)=>{ 
      await fetch(`https://trelloclonefelipe.herokuapp.com/comments/${commentId}/`, { method: 'DELETE' });
          dispatch(getComments(cardId));
  }
  }