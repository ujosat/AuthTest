import { useNavigation } from '@react-navigation/native';
import UserController from '../controllers/UserController';
const userData={userData:[{ 
    "id":1, 
    "name":"test1", 
    "age" : "11", 
    "gender":"male", 
    "email" : "test1@gmail.com", 
    "phoneNo" : "9415346313" 
    }, 
    { 
    "id" : 2, 
    "name":"test2", 
    "age" : "12", 
    "gender":"male", 
    "email" : "test2@gmail.com", 
    "phoneNo" : "9415346314" 
    }, 
    { 
    "id":3, 
    "name":"test3",
    "age" : "13", 
    "gender":"male", 
    "email" : "test3@gmail.com",  "phoneNo" : "9415346315"  }, 
    { 
    "id":4, 
    "name":"test4", 
    "age" : "14", 
    "gender":"male", 
    "email" : "test4@gmail.com",  "phoneNo" : "9415346316"  }, 
    { 
    "id":5, 
    "name":"test5", 
    "age" : "15", 
    "gender":"male", 
    "email" : "test5@gmail.com",  "phoneNo" : "9415346317"  }, 
    { 
    "id":6, 
    "name":"test6", 
    "age" : "16", 
    "gender":"male", 
    "email" : "test6@gmail.com",  "phoneNo" : "9415346318"  } 
   ]}
export const actionTypes ={
    LOGIN:'LOGIN',
    LOGIN_REQUEST:'LOGIN_REQUEST',
    LOGIN_ERROR:'LOGIN_ERROR',
    LOGIN_SUCCESS:'LOGIN_SUCCESS',
    LOGOUT:'LOGOUT'
}

const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST,
    payload: null,
  });
  
  const loginError = error => ({
    type: actionTypes.LOGIN_ERROR,
    payload: error ,
  });
  
  const loginSuccess = user => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: { user,userData}
  });
  
  const logoutRequest = () => ({
    type: actionTypes.LOGOUT,
    payload: null,
  });
  
  export const login = (email, password) =>async dispatch => {
     
    dispatch(loginRequest());
    try {
      const user = await UserController.login(email, password);
    
      dispatch(loginSuccess(user));
      
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
  
  export const logout = () => dispatch => {
    UserController.logout();
    dispatch(logoutRequest());
  };