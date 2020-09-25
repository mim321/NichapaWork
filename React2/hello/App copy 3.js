//This is an example code to understand TextInput// 
import React from 'react'; 
//import react in our code.
import { TextInput, View, StyleSheet, Text,Image } from 'react-native';
//import all the components we are going to use. 
export default class App extends React.Component {
  onPressLearnMore(){
    alert('Successful ✔');
  } 

  state = {choosenLabel: '', choosenindex: ''}

  constructor(props) {
   super(props);
   this.state = {username: '', password:''};
    this.state = {valx:0, valy:1000};
     // you can define N number of key value paires like JSON.
    setInterval(() => {
      this.setState({valx : this.state.valx+1});
      this.setState({valy : this.state.valy-1});
    }, 1000); 
    // Simple interval fundtion which will run in every second.
    // It will increase valx and decrese valy
 }
 render() {
   return (
     <View style={styles.container}>

        <Text style = {styles.text}>{this.state.choosenLabel}</Text>
        {/*Text to show selected index */}
        <Text style = {styles.text}>{this.state.choosenindex}</Text>
    
       <Text style={{color: 'cyan'}}>{this.state.username}</Text>

       <Image source={{uri: 'https://raw.githubusercontent.com/mim321/ReactNative/master/e136c9c011b66b68ed74dba35a8d6e20.jpg'}}
       style={{width: 200, height: 200}} />

       <Text>{"\n"}Sign in{"\n"}{"\n"}</Text>

       <TextInput
         value={this.state.username}
         onChangeText={(username) => this.setState({ username })}
         placeholder={'👥 Username'}
         style={styles.input}
       />
        <TextInput
         value={this.state.password}
         onChangeText={(password) => this.setState({ password })}
         placeholder={'🔏 password'}
         style={styles.input}
       />
       <Text> Button Example </Text> 
       <Button
         onPress={this.onPressLearnMore}
         title="Login"
         color="#2F4F4F"
        /> 
     </View>
   );
 }
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#FFF5EE',
   paddingTop: 50,
},
 input: {
   width: 300,
   height: 50,
   padding: 5,
   marginBottom: 20,
   backgroundColor: '#EEEEE0'
 },
 stretch: {
  width: 50,
  height: 200,
  resizeMode: 'stretch',
},
text: {
  fontSize: 20,
  alignSelf: 'center',
}
});