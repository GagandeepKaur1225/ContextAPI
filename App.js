import React,{createContext, useContext, useEffect, useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import FavouriteProducts from './src/Scrreens/FavouriteProducts';
import Home from './src/Scrreens/Home';
import {NavigationContainer} from '@react-navigation/native';
import ProductsScreen from './src/Scrreens/ProductsScreen';
import Usecontext from './src/Usecontext';
import { apiFetch } from './src/Services/Utility';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Context = createContext();
const App = () => {
  const [dataFetched, setDataFetched] = useState([]);
  const Stack = createNativeStackNavigator();
  console.log("app.js");
  useEffect(() => {
    (async () => {
      let data = await apiFetch();
      console.log(data, "showing api");
      const arr=JSON.parse(data)
      setDataFetched(arr);
      console.log(dataFetched)
    })()
  },[])
  return (
    <>
    <Context.Provider value={dataFetched}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeScreen"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="homeScreen"
          component={Home}
          options={{title:"nextProducts"}}
        />
          <Stack.Screen
            name="productsScreen"
            component={ProductsScreen}
            options={{title:"products"}}
          />
        <Stack.Screen 
          name="Favourites"
          component={FavouriteProducts}
          options={{title:"favourites"}}
        />
      </Stack.Navigator>
   </NavigationContainer>
    </Context.Provider>
    </>
  )
}

export default App
