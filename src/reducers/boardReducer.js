const INITIAL_STATE = {
    boards: [],
    users: []
}

const boardReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type){
        case "SET_BOARDS":
            return {...prevState, boards: action.userObj};
        case "SET_USERS":
            return {...prevState, users: action.userObj};
        default:
            return prevState;
    }

}


export default boardReducer;