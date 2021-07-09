const initial={
    count:6
}
const incrementReducer=(state=initial,action)=>{

    if(action.type=="inc"){
        return {
            ...state,
            count:state.count+action.payload
        }
    }
    else if(action.type=="dec"){
        return {
            ...state,
            count:state.count-action.payload
        }
    }

    return state;

}

export default incrementReducer;

