import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {incrementAction,decrementAction} from './action'
import {storeData} from './todoAction'
const App = () => {
  
  const state=useSelector(state=>state.incrementReducer.count)
  const dispatch=useDispatch();

  useEffect(async()=>{
   await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => 
    
    response.json())
  .then(json => {
   dispatch(storeData(json))
    console.log(json)
  })
  },[])


  
  return (
    <div className="mycontainer">
     <h1>{state}</h1>
     <button onClick={()=>dispatch(incrementAction(10))}>INC</button> <button   onClick={()=>dispatch(decrementAction(5))} >DEC</button>
    </div>
  )
}
export default App
