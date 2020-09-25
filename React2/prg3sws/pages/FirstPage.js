/* eslint-disable prettier/prettier */
//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import {StyleSheet, View, Button, Image, ScrollView, Text} from 'react-native';
//import all the components we are going to use.

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'First Page',
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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require('../NationU.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{width: 300, height: 150}}
          />
        <NickText  message="Nation University" interval={1500}/>
          <Button title="Go next" onPress={() => navigate('SecondPage')} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
class NickText extends Component {

  constructor(props) {
      super(props);
      this.state = {isVisible: true};
      setInterval(() => {
          this.setState(oldState => {
              return {isVisible: !oldState.isVisible};
          });
      }, this.props.interval);
  }

  render(){
      let display = this.state.isVisible ? this.props.message : 'Welcome to';
      return (
          // eslint-disable-next-line react-native/no-inline-styles
          <Text style={{fontSize: 25, fontWeight: 'bold',margin:50}}>
                  {display}
          </Text>
      );
  }
}
