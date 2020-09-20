import {actionTypes} from '../actions/userActions';

const errorReducer =(state={},{payload, type})=>{
    switch(type)
    {
        case actionTypes.LOGIN_ERROR:
            return {...state , error: payload}; 
        case actionTypes.LOGOUT:
            return {}
        default:
            return state;

    }
}

export default errorReducer;