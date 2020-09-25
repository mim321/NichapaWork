//This is an example code to understand View// 
import React from 'react';
//import React in our code. 
import { Text, View, StyleSheet} from 'react-native';
//import all the components we are going to use.
export default class App extends React.Component {
  render() {
    return (
      // enclose all components in this View tag
      <View style={styles.container}>
        {/* View is used here to wrap all component in one */}
        <View style={styles.top} >
        <Text>All the very best</Text> 
        </View>
        <View style={styles.middle} >
        <Text>This is your first App.</Text>
        </View>
        <View style={styles.bottom} >
        <Text>Enjoy react native coding.</Text>
        <Text>Nichapa Kajan</Text>
        </View>
      </View>
    );  
  } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFDAB9",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  
});