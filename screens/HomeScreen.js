import * as React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  gotoBuzzerScreen =(buzzerColor)=>{
    this.props.navigation.navigate('BuzzerScreen', {color: buzzerColor});
  }

  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} 
        onPress={()=>{
          this.gotoBuzzerScreen('red');
        }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]}
         onPress={()=>{
          this.gotoBuzzerScreen('green');
        }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: 'blue' }]}
         onPress={()=>{
          this.gotoBuzzerScreen('blue');
        }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: 'black' }]}
         onPress={()=>{
          this.gotoBuzzerScreen('black');
        }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})
