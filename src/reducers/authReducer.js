const INITIAL_STATE = {
    activeSession: false,
    activeId:""
}

const authReducer = (prevState = INITIAL_STATE, action) => {

    switch(action.type){
        case "SET_ACTIVE_SESSION":
            return {...prevState, activeSession: action.userObj};
        case "SET_ACTIVE_ID":
            return {...prevState, activeId: action.userObj};
        default:
            return prevState;
    }

}


export default authReducer;
