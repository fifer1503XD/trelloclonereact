export const setBoards = (userObj) => {
    return {
        type: "SET_BOARDS",
        userObj
    }
}
export const setBoardActive = (userObj) => {
  return {
      type: "SET_BOARD_ACTIVE",
      userObj
  }
}
export const setUsers = (userObj) => {
    return {
        type: "SET_USERS",
        userObj
    }
}
const getBoards = () => {  
return async(dispatch)=>{
    let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/`)
        let results = await response.json();
        dispatch(setBoards(results))
      }
}
export const eraseBoard = (boardId) => { 
    return async(dispatch)=>{ 
    await fetch(`https://trelloclonefelipe.herokuapp.com/boards/${boardId}/`, { method: 'DELETE' });
        dispatch(getBoards());
}
}
  
    export function newBoard (nameb,description,owner){
      return async (dispatch)=>{
          return new Promise(async(resolve, reject) => {
      try {
      let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(
            {
              "name": nameb,
              "description": description,
              "owner": owner,
              "members":[owner]
              
            }
          )
        });
        let results = await response.json();
        dispatch(getBoards());
        dispatch(getUsers());
        return results;
        
      } catch (error) {
          console.log(error.message);
          reject(error);
        } 
      })
      }
      }
   
    export const postNewUsser =async (name,description,date_creation,visibility,members) => {
      let response = await fetch(`https://trelloclonefelipe.herokuapp.com/boards/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(
            {
              "name": name,
              "description": description,
              "date_creation": date_creation,
              "visibility": visibility,
              "owner": 1,
              "members": [members]
            }
          )
        });
        let results = await response.json();
        return results;
      };
      
      
export const getUsers = () => {  
    return async(dispatch)=>{
        let response = await fetch(`https://trelloclonefelipe.herokuapp.com/users/`)
            let results = await response.json();
            dispatch(setUsers(results))
          }
    }

export  default getBoards ;

       