/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

//This is an example code for Navigator//
import React, {Component} from 'react';
//import react in our code.
import { StyleSheet, Text, View, TextInput,
  Button, Alert} from 'react-native';
//import all the components we are going to use.

export default class SecondPage extends Component {
  Constructor(props){
    (props);
    this.state = {Num1:0,Num2:0};}
  Sum1=()=>
  {
    // eslint-disable-next-line radix
    var N1 = parseInt(this.state.Num1);
    // eslint-disable-next-line radix
    var N2 = parseInt(this.state.Num2);
    var N3 = 0.5;
    var Sum = N1 * N2 * N3;
    Alert.alert('สามเหลี่ยม = ' + Sum);
  }
  Sum2=()=>
  {
    // eslint-disable-next-line radix
    var N1 = parseInt(this.state.Num1);
    // eslint-disable-next-line radix
    var N2 = parseInt(this.state.Num2);
    var Sum = N1 * N2;
    Alert.alert('สี่เหลี่ยม = ' + Sum);
  }
  Sum3=()=>
  {
    // eslint-disable-next-line radix
    var N1 = parseInt(this.state.Num1);
    // eslint-disable-next-line radix
    var N2 = 3.14;
    var N3 = N1 * N1;
    var Sum = N3 * N2;
    Alert.alert('วงกลม = ' + Sum);
  }
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20, fontWeight: 'bold' }}>ฐาน หรือ รัสมี</Text>
        <TextInput placeholder="กรุณาใส่เลข ฐาน หรือ รัสมี "  style = {styles.inputs} onChangeText={Num1=>this.setState({Num1})}/>
        <Text style={{fontSize: 20, fontWeight: 'bold' }}>สูง / กว้าง</Text>
        <TextInput placeholder="กรุณาใส่เลข สูง / กว้าง " style = {styles.inputs} onChangeText={Num2=>this.setState({Num2})} />
        <View style={{flex: 0.1, flexDirection: 'row'}}>
       <Button title="คำนวณสามเหลี่ยม"  onPress ={this.Sum1}/>
       <Button title="คำนวณสี่เหลี่ยม"  onPress ={this.Sum2}/>
       <Button title="คำนวณวงกลม"  onPress ={this.Sum3}/>
       </View></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
  inputs:{
    width: 150,
    height: 40,
    padding: 10,
    backgroundColor:'#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'left',
  },
});
