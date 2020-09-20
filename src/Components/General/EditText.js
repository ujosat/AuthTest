import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@react-navigation/native';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#FFF'
  },
  line: {
    marginBottom: 2,
    height: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  field: {
    alignSelf: 'stretch',
  },
});

function EditText({style, ...rest }) {
const { colors } = useTheme();

  return (
    <>
      <TextInput
        {...rest}
        style={[{borderRadius:5,backgroundColor:'#F0F0F0',borderWidth:0.5,color:"#787878",fontWeight:'bold',borderColor:colors.border,minHeight: 40,maxHeight: 50,paddingLeft:5},style]}
        underlineColorAndroid="transparent"
      />
      <View style={[styles.line]} />
    </>
  
  );
}
EditText.propTypes = {
  style: PropTypes.object,
};

export default EditText;