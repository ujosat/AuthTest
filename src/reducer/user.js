
import {actionTypes} from '../actions/userActions';

const userReducer =(state={},{payload, type})=>{
    switch(type)
    {
        case actionTypes.LOGIN_SUCCESS:
            
            return {...state , ...payload.user,...payload.userData };
        case actionTypes.LOGOUT:
            return {}
        default:
            return state;

    }
}

export default userReducer;