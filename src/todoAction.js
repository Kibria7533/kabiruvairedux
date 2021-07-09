import * as type from './type'

export const storeData=(data)=>(dispatch)=>{

    
    return dispatch({
        type:type.str,
        payload:data
    })
}


