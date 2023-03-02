import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import Button1 from './Button';
import {Context} from './Usecontext';

const Form = () => {
    const value = useContext(Context);
    return (
        <View>
           <Button1/>
        </View>
    )
}

export default Form
