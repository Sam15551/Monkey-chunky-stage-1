import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class App extends React.Component {

constructor(){
  super();
  this.state={
    text:"",
    displayText:"",
    

  }
}




  render(){
  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header backgroundColor={"yellow"} centerComponent={{text:'Monkey Chunkey',style:{color:"Black",fontSize:20}}}>
      </Header>
      <TextInput onChangeText={(text)=>{
        this.setState({text:text})
      }} value={this.state.text}/>
      <TouchableOpacity onPress={()=>{
        this.setState({displayText:this.state.text})}}>
        <Text>go</Text>
      </TouchableOpacity>
      <Text>{this.state.displayText}</Text>
    </View>
    </SafeAreaProvider>
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
