import * as React from 'react';
import { View, Text,FlatList,StyleSheet } from 'react-native';
import {shallowEqual, useSelector} from 'react-redux'
import getUser from '../../selectors/UserSelectors'
const CardItem = ({label,value}) => {
  return(
  
    <View style={{flexDirection:'row'}}>
    <View style={{flex:1}}>
      <Text style={styles.title}>{label}</Text>
    </View>
    <View style={{flex:1}}>
      <Text style={styles.title}>{": "+value}</Text>
    </View>
    </View>);
};
const Item = ({item}) => {
  return(
    <View style={styles.item}>
    <CardItem label="Name" value={item.name} />
    <CardItem label="Age" value={item.age} />
    <CardItem label="Gender" value={item.gender} />
    <CardItem label="E-mail" value={item.email} />
    <CardItem label="Phone No" value={item.phoneNo} />
    </View>
  );
};
function HomeScreen() {
  const user=useSelector(state=>getUser(state).userData,shallowEqual);

  
  
    return (
      <View style={{ flex: 1,backgroundColor:'#F5F5F5' }}>
        
      
        <FlatList

        data={user?user:[]}
        renderItem={({item})=>(
          <Item item={item} />
        )}
        keyExtractor={(item, index) => 'key'+index}
        /> 
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    item: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 14,
    },
  });
export default HomeScreen;