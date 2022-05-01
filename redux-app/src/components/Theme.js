import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import Actions from "../redux/actions"

const Theme = () => {
    const theme=useSelector(state=>state.themeReducer);
    const dispatch=useDispatch();
    return (
        <div style={theme}>
            <button onClick={()=>dispatch(Actions.themeAction.lightTheme())}>Dark</button>
            <button onClick={()=>dispatch(Actions.themeAction.darkTheme())}>Light</button>
        </div>
    )
}

export default Theme