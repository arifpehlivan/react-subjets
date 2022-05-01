import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import Actions from "../redux/actions"

const Counter = () => {
  const count=useSelector(state=>state.countReducer);
  const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>dispatch(Actions.numberAction.increaseNumber(1))}>İncrement</button>
        <button onClick={()=>dispatch(Actions.numberAction.decreaseNumber(1))}>Decrement</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter