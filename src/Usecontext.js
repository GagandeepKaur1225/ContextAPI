import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { CONSTANTS } from './Constants';
import Form from '../src/Form';

export const Context = createContext();
const Usecontext = () => {
    let objectUsed = {
        theme: "light",
        function1:defineName
    }
    let nameVal;
    function defineName(name) {
        nameVal = name;
        console.log(name,'name is this');
    }
    console.log(CONSTANTS.FIELD);
    return (
        <View style={style.viewStyle}>
            <Context.Provider
                value={{ obj: objectUsed, defineName }}
            >
                <Form/>
                </Context.Provider>
        </View>
    )
}

export default Usecontext
const style = StyleSheet.create({
    viewStyle: {
        
        alignSelf:'center'
    }
})

