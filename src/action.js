import * as type from './type'

export const incrementAction=(data)=>(dispatch)=>{
    return dispatch({
        type:type.inc,
        payload:data
    })
}

export const decrementAction=(data)=>(dispatch)=>{
    return dispatch({
        type:type.dec,
        payload:data
    })
}

