import React, { useState } from "react";
import Context from "./components/Context";

export const ThemeData = React.createContext();

const theme = {
    dark:{
        color:"white",
        backgroundColor:"black"
    },
    light:{
        color:"black",
        backgroundColor:"white"
    }
}

function App() {
    const [value,setValue] = useState(theme.dark);
    function change(){
        if(theme.dark === value){
            setValue(theme.light)
        }
        else{
            setValue(theme.dark)
        }
    }
    return (
        <div>
            <button onClick={change}>
                {theme.dark === value ? "Light" : "Dark"}
            </button>
            <ThemeData.Provider value={value}>
                <Context/>
            </ThemeData.Provider>
        </div>
    );
}

export default App;
