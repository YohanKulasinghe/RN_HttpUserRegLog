import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = (props) => {
    return(
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
       justifyContent: 'center',
       alignItems: 'center',
       paddingTop: 10,
       backgroundColor: '#F8F8F8',
       height: 60,
       shadowColor: '#000',
       shadowOffset: { width: 1, height: 2 },
       shadowOpacity: 0.1,
       elevation: 2,
       position: 'relative'
       
    },
    textStyle:{
        fontSize: 20,
    }
});

export { Header };