const initial={
    data:[]
}
const storeReducer=(state=initial,action)=>{

    if(action.type=="str"){

        console.log(action.payload)
        return {
            ...state,
            data:action.payload
        }
    }
   

    return state;

}

export default storeReducer;

