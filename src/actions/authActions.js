export const setActiveSession = (userObj) => {
  return {
      type: "SET_ACTIVE_SESSION",
      userObj
  }
}
export const idUserActive = (userObj) => {
  return {
      type: "SET_ACTIVE_ID",
      userObj
  }
}
    
export function loginUser (email,password){
  return async (dispatch)=>{
      return new Promise(async(resolve, reject) => {
        try {
          let response = await fetch(`https://trelloclonefelipe.herokuapp.com/api/token/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(
            {
              "email": email,
              "password": password
              
            }
          )
        });
        let results = await response.json();
        if (results.detail){
          alert('Datos incorrectos')
        }
        else{
          alert('bienvenido')
          resolve(true)
        }
      } catch (error) {
          console.log(error.message);
          reject(false);
          
        } 
      })
       
      }
      }
    
      
  
    export function getUserId (email){
      return async (dispatch)=>{
              try {
                    let response = await fetch(`https://trelloclonefelipe.herokuapp.com/users/`);
                    let results = await response.json();
                    const userid = results.filter(user=>user.email===email)
                    dispatch(idUserActive(userid[0].id))
                    return userid;
                    
                  }
           catch (error) {
          console.log(error.message);
        } 
      }}
    