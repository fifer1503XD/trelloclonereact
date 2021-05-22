const INITIAL_STATE = {
    comments:[],
  }
  
  const commentReducer = (prevState = INITIAL_STATE, action) => {
  
      switch(action.type){
          case "SET_COMMENTS":
              return {...prevState, comments: action.cardObj};
          default:
              return prevState;
      }
      
  }
  
  
  export default commentReducer;
  