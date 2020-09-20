
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Components/navigation';
import {Provider} from 'react-redux'
import {store} from './store/index';


function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </Provider>
  );
}

export default App;