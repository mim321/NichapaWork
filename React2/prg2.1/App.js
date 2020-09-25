import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,
Button, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    (props);
    this.state = {Num1:0,Num2:0};}
  Sumplus=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1+N2;
    Alert.alert("Sum Plus = " + Sum);
  }
  SumSubtrac=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1-N2;
    Alert.alert("Sum Subtrac = " + Sum);
  }
  SumMultiply=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1*N2;
    Alert.alert("Sum Multiply = " + Sum);
  }
  SumDivide=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var Sum=N1/N2;
    Alert.alert("Sum Divide = " + Sum);
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>โปรแกรมลองคำนวณ</Text>

          <Text style={{fontSize: 20, fontWeight: 'bold' }}>Num1</Text>
          <TextInput placeholder="Number 1"  style = {styles.inputs} onChangeText={Num1=>this.setState({Num1})}/>
    <Text style={{fontSize: 20, fontWeight: 'bold' }}>Num2</Text>
          <TextInput placeholder="Number 2" style = {styles.inputs} onChangeText={Num2=>this.setState({Num2})} />
          <Text>{"\n"}</Text>
          <View style={{flex: 0.1, flexDirection: 'row'}}>
          <Button title="Plus"  onPress ={this.Sumplus}/>
          <Button title="Sub"    onPress ={this.SumSubtrac}/>
          <Button title="Mul"  onPress ={this.SumMultiply}/>
          <Button title="Div"   onPress ={this.SumDivide}/>
          </View>
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
    marginTop: 50,
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
    backgroundColor:'#ecf0f1'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'left',
  },
 
});