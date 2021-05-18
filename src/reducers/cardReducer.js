const INITIAL_STATE = {
    cards:[],
    comments:[],
    cardActive:[]
  }
  
  const cardReducer = (prevState = INITIAL_STATE, action) => {
  
      switch(action.type){
          case "SET_CARDS":
              return {...prevState, cards: action.cardObj};
          case "SET_COMMENTS":
              return {...prevState, comments: action.cardObj};
          case "SET_CARD_ACTIVE":
              return {...prevState, cardActive: action.cardObj};
          default:
              return prevState;
      }
      
  }
  
  
  export default cardReducer;
  