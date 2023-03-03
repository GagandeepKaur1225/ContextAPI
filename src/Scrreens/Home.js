// import ProductsScreen from './src/Scrreens/ProductsScreen';
import React,{createContext, useContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../components/CustomButton';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from './ProductsScreen';
import { apiFetch } from '../Services/Utility';
import { useNavigation } from '@react-navigation/native';

// export const Context = createContext();
const Home = () => {
  const navigation=useNavigation()
  productsFunction = () => {
    navigation.navigate('productsScreen')
  }
  return (
    <View style={style.viewStyle}>
      
      <CustomButton title="PRODUCTS" onPress={()=>productsFunction()} />
        <CustomButton title="FAVOURITES" onPress={()=>favouritesFunction()}/>
    </View>
  )
}

export default Home
const style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#000000',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center"
  },
  button: {
    color: "#000000",
  }
})