import ActionTypes from "../actionTypes";

const increaseNumber = (val) =>{
    return {type:ActionTypes.count.INCREASE_COUNTER,payload:val}
}

const decreaseNumber = (val) =>{
    return {type:ActionTypes.count.DECREASE_COUNTER,payload:val}
}

const numberAction={increaseNumber,decreaseNumber};

export default numberAction;
