//React Native Picker
//https://aboutreact.com/react-native-picker/

//import React in our code
import React, {useState} from 'react';

//import all the components we are going to use
import {ScrollView ,Picker, View, Text, SafeAreaView, StyleSheet, Button, Switch,
  ActivityIndicator,} from 'react-native';

  const App = () => {
    const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
    };

    const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

    const [choosenLabel, setChoosenLabel] = useState('Native');
    const [choosenIndex, setChoosenIndex] = useState('2');

    const onPressLearnMore = () => {
      //For generating alert on buttton click
      alert('Hello');
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={pickers.container}>
        {/*Picker with multiple chose to choose*/}
        {/*selectedValue to set the preselected value if any*/}
        {/*onValueChange will help to handle the changes*/}
          <Picker
            selectedValue={choosenLabel}
            onValueChange={(itemValue, itemIndex) => {
              setChoosenLabel(itemValue);
              setChoosenIndex(itemIndex);
            }}>
            <Picker.Item label="Hello" value="Hello" />
            <Picker.Item label="React" value="React" />
            <Picker.Item label="Native" value="Native" />
            <Picker.Item label="How" value="How" />
            <Picker.Item label="are" value="are" />
            <Picker.Item label="you" value="you" />
          </Picker>
          {/*Text to show selected picker value*/}
          <Text style={pickers.text}>Selected Value: {choosenLabel}</Text>
          {/*Text to show selected index */}
          <Text style={pickers.text}>Selected Index: {choosenIndex}</Text>
        </View>

        <ScrollView style={styles.container}>
          <Text style={{ fontSize: 20 }}>
          React Native for Mobile App
          </Text>
        </ScrollView>

        {/* enclose all components in this View tag */}
        <View buttons={styles.container}>
           {/* Button whith handler function named onPressLearnMore*/}
          <Button
           onPress={onPressLearnMore}
           title="Button"
           color="#DAA520"
          />
        </View>


        <View style={switchs.container}>
           {/*Text to show the text according to switch condition*/}
          <Text>{switchValue ? 'Switch is ON' : 'Switch is OFF'}</Text>
           {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
          <Switch
            style={{marginTop: 20}}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>

        <View style={activityIndicator.container}>
        {loading ? (
          
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <>
            <Text style={{textAlign: 'center', fontSize: 8}}>
              React Native ActivityIndicator
            </Text>
            <Button title="Start Loading" onPress={startLoading}></Button>
          </>
        )}
        </View>
      </SafeAreaView>
      
    );
  };
  const switchs = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FDF5E6',
    },
  });
  const pickers = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#FFE4E1',
    },
    text: {
      fontSize: 20,
      alignSelf: 'center',
    },
  });
  const buttons = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFF5EE',
      height: 200,
      padding: 10, 
    },
  });
  const activityIndicator = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 1,
      backgroundColor: '#FFF0F5',
      padding: 3,
      height: 50,
      marginBottom: 20,
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
  });
  export default App;