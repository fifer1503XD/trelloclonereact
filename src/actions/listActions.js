import {getCards} from "./cardActions"

export const setLists = (userObj) => {
    return {
        type: "SET_LISTS",
        userObj
    }
}

 const getLists = (boardId) => {  
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/${boardId}/lists`)
            let results = await response.json();
            await dispatch(setLists(results))
            await dispatch(getCards(boardId))
          }
    }
    export  default getLists ;    