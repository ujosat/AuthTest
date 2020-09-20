import * as React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

import { View, Text } from 'react-native';
import EditText from '../General/EditText';
import Button from '../General/Button';
import Warning from '../General/Warning';
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../../actions/userActions';
function Login({navigation}) {
  const {colors}=useTheme();
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const dispatch=useDispatch();
  
  const username=useSelector(state=>state.user);
  
  const error=useSelector(state=>state.error.error);
  
  const loginPress=()=>{
    
    dispatch(login(email,password));
    
   
    
  }
  
    return (
      <View style={{ flex: 1,  justifyContent: 'center',backgroundColor:'#4863A0' }}>
        <View style={{flex:1,alignSelf:'center',justifyContent: 'center'}}>
          <Text style={{fontSize:24,fontWeight:"700"}}>Login</Text>
        </View>
        <View style={{flex:2,paddingHorizontal:20,justifyContent:"space-evenly"}}>
        <View style={{flex:0.15}}>
          <EditText
            placeholder="E-mail"
            placeHolderColor="#FFFFFF"
            style={{flex:1}}
            onChangeText={(text)=>{setEmail(text)}}
            keyboardType='email-address'
            value={email}
          />
          </View>
          
          <View style={{flex:0.15}}>
          <EditText
            secureTextEntry={true}
            placeholder="Password"
            style={{flex:1}}
            onChangeText={(text)=>setPassword(text)}
            value={password}
          />
          </View>
        
        <Warning errors={error?[error]:[]}/>
        <View style={{alignContent:'stretch'}}>
          <Button 
          style={{}}
          title={'LOGIN'}
          onPress={loginPress}
          />
        </View>
        </View>
        <View style={{flex:2}}/>
      </View>
    );
  }
export default Login;