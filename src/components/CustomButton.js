import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const CustomButton = (props) => {
  return (
      <TouchableOpacity style={style.buttonStyle}
          onPress={props.onPress}
          title
      >
          <Text>{props.title}</Text>
      </TouchableOpacity>
  )
}

 export default CustomButton
 const style=StyleSheet.create({         
  buttonStyle:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    width: 300,
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    marginHorizontal: 100,
    flexDirection: 'row',
    borderRadius: 12,
}            
})