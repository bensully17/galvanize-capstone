import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation';
import startTabs from '../../Navigation/StartMainTabs'


class AuthScreen extends Component {
  loginHandler = () => {
    startTabs()
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Email' style={styles.textInput}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput}></TextInput>
        <Button title='Login' onPress={this.loginHandler}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    width: '80%',
    margin: 5,
    padding: 3,
    backgroundColor: '#eee'
  }
})


export default AuthScreen