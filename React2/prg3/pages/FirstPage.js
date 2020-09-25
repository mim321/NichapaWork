//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Text, Image} from 'react-native';
//import all the components we are going to use.
export default class FirstPage extends React.Component {
  static navigationOptions = {
    title: 'Main Screen App',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View> 
          <Image source={require('./nation.png')}  
              style={{width: 350, height: 150, marginTop:10}} 
          /> 
        </View>
        <Text>123123123</Text>
        <Button title='Go next'
        onPress={() =>navigate('SecondPage')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});