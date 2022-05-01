import ActionTypes from "../actionTypes";

const lightTheme = (val) =>{
    return {
        type:ActionTypes.theme.LIGHT_THEME,
        payload:val
    }
}

const darkTheme = (val) =>{
    return {
        type:ActionTypes.theme.DARK_THEME,
        payload:val
    }
}

const themeAction={lightTheme,darkTheme};

export default themeAction;
