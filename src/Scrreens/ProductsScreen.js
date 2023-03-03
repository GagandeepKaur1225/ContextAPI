import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { Context } from '../../App'

const ProductsScreen = () => {
  const value = useContext(Context);
  useEffect(() => {
    console.log(value, 'VALUE');
  }, [value])

  function itemView(value) {
    console.log(value, 'item is');
    return (
      <View style={style.productView}>
        {/* <View style={style.innerView}> */}
        <Image source={{ uri: value.item.image }} style={style.imageStyle}
          resizeMode={'contain'}
        />
        <Text>{value?.item?.title}</Text>
        <Text style={style.textColor}>{value?.item?.category}</Text>
        <Text style={style.textBold}>Rs.{value?.item?.price}</Text>
        {/* </View> */}
      </View>
    )
  }
  return (
    <SafeAreaView style={style.safeArea} >
      <FlatList
        data={value}
        keyExtractor={(item, index) => index.toString()}
        renderItem={itemView}
        numColumns={2}
      />
    </SafeAreaView>
  )
}

export default ProductsScreen
const style = StyleSheet.create({
  productView: {
    height: "95%",
    width: "45%",
    marginBottom: 20,
    borderWidth: 2,
    backgroundColor: "#ffffff",
    borderColor: '#000000',
    paddingHorizontal: 10,
    paddingRight: 5,
    marginHorizontal: 5,
    borderRadius: 6
  },
  imageStyle: {
    height: 100,
    width: "100%"
  },
  innerView: {
    height: 150,
    width: 150
  },
  safeArea: {
    backgroundColor: "#808080"
  },
  textBold: {
    fontWeight: "700"
  },
  textColor: {
    color: "red",
    fontWeight: '600'
  }
})