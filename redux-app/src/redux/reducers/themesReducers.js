import ActionsTypes from "../actionTypes";

const initialState={backgroundColor:"red",height:"300px",width:"100%"};
const lightTheme={backgroundColor:"white",height:"300px",width:"100%"};
const darkTheme={backgroundColor:"black",height:"300px",width:"100%"};

const themeReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionsTypes.theme.LIGHT_THEME:
            return lightTheme;
        case ActionsTypes.theme.DARK_THEME:
            return darkTheme;
        default:
            return state;
    }
}

export default themeReducer;