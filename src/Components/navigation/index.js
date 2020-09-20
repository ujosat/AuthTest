
import * as React from 'react';
import AuthenticationNav from './AuthenticationNav';
import HomeNav from './HomeNav';
import { useSelector,shallowEqual } from 'react-redux';
import getUser from '../../selectors/UserSelectors';
const Navigation=()=>{
    
    const username = useSelector(state => getUser(state), shallowEqual);
    const state=useSelector(state => state);
    return username.name?<HomeNav/>:<AuthenticationNav/>
}

export default Navigation;