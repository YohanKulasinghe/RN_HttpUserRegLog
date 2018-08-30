import React, { Component } from 'react';
import { View, Text, AppRegistry, Button } from 'react-native';
import { RegisterUser } from './src/components/RegisterUser';


class HttpTest extends Component{
    
  render(){
      return(
        <View>
            <Text>Working POST</Text>
            <Button
            title ='pressMe'
            onPress = { ()=>{
                const user = {
                      fullname: 'ravi karunanayake',
                      username: 'TestfromApp3',
                      email: 'rk@gmail',
                      phoneno: '077522',
                      password: '1234'
                    };
                RegisterUser(user).then ((result)=>{
                    if (result === 'true'){
                        <Text>Success</Text>
                    }
                });
            }}
            />
            
        </View>
      );
  }
}

AppRegistry.registerComponent('rn_HttpTest', () => HttpTest);
