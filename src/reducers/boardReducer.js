const INITIAL_STATE = {
    boards: [],
    users: [],
    boardActive:""
}

const boardReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type){
        case "SET_BOARDS":
            return {...prevState, boards: action.userObj};
        case "SET_USERS":
            return {...prevState, users: action.userObj};
            case "SET_BOARD_ACTIVE":
                return {...prevState, boardActive: action.userObj};
        default:
            return prevState;
    }

}


export default boardReducer;