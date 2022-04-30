import {useReducer} from "react";

const initialState = {
    number:0
}

const reducerFn = (prevState,action) => {
    switch(action.type){
        case "inc":
            return {number:prevState.number+1}
        case "dec":
            return {number:prevState.number-1}
        default:
            return {number:prevState.number}
    }
}

function App() {
    const [state,dispatch] = useReducer(reducerFn,initialState);
    return (
        <div>
            <button onClick={() => dispatch({type:"inc"})}>İncrement</button>
            <button onClick={() => dispatch({type:"dec"})}>Decrement</button>
            <p>{state.number}</p>
        </div>
    );
}

export default App;
