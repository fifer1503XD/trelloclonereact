import {getCards} from "./cardActions"

export const setLists = (userObj) => {
    return {
        type: "SET_LISTS",
        userObj
    }
}

 export const getLists = (boardId) => {  
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/${boardId}/lists/`)
            let results = await response.json();
            await dispatch(setLists(results))
            await dispatch(getCards(boardId))
          }
    }
    export  default getLists ;    

    export function newList (name,boardId){
        return async (dispatch)=>{
        try {
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/lists/`, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(
              {
                "name": name,
                "board_id": boardId,
              })
          });
          let results = await response.json();
          dispatch(getLists(boardId))
          return results;
        } catch (error) {
            console.log(error.message);
          } 
        }
        }

  export const eraseList = (listId,boardId) => { 
    return async(dispatch)=>{ 
      await fetch(`https://trelloclonefelipe.herokuapp.com/lists/${listId}/`, { method: 'DELETE' });
      dispatch(getLists(boardId));
      }
      }      