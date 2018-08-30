import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ lable, value, onChangeText, placeholder, secureTextEntry }) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.lableStyle}>{lable}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            style={styles.inputStyle}
            placeholder={placeholder}
            underlineColorAndroid='#fff'
            />
        </View>
    );
};


const styles = StyleSheet.create({
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
    },
    lableStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { Input };