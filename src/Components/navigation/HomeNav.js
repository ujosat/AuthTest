import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Home from '../Home';
const Stack=createStackNavigator();
function HomeNav()
{
    return(
            <Stack.Navigator>
                    <Stack.Screen name="DashBoard" component={Home}/>
            </Stack.Navigator>
        )
}
export default HomeNav;