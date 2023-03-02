import { Button, Text, View } from 'react-native';
import { Context, value } from './Usecontext';
import React, { useState } from 'react';

import { CONSTANTS } from './Constants';
import { useContext } from 'react';

const Button1 = () => {
    const value = useContext(Context);
    console.log(value,"VALUEs");
    defineName = (nameb) => {
        console.log("hello");
    }
    return (
        <View>
            {/* <Context.Consumer> */}
                {/* {({ value,function1 })=><Text> {value.theme}</Text> } */}
                <Button title='press me' onPress={()=> value?.obj?.function1("hii")}/>
           {/* </Context.Consumer> */}
        </View>
    )
}

export default Button1
