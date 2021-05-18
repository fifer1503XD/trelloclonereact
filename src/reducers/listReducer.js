const INITIAL_STATE = {
  lists:[]
}

const listReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type){
        case "SET_LISTS":
            return {...prevState, lists: action.userObj};
        default:
            return prevState;
    }

}


export default listReducer;
