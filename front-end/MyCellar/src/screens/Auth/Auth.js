import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import startTabs from '../../Navigation/StartMainTabs'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../../Assets/cheers.png'


class AuthScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: 'silver',
    drawUnderNavBar: true,
    navBarTranslucent: true,
    topBarElevationShadowEnabled: true,
    navBarBackgroundColor: '#590000',
    navBarHidden: true
  }
  loginHandler = () => {
    startTabs()
  }
  render () {
    return (
      <View style={styles.container} >
        <Image source={image} style={styles.image}maxHeight='30%' maxWidth='50%'></Image>
        <Text style={styles.text}>MyCellar</Text>
        <TextInput placeholder='Email' style={styles.textInput}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true} ></TextInput>
        <View style={styles.button}>
          <CustomButton  onPress={this.loginHandler}>Sign In</CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton>Create New Account</CustomButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    fontFamily: 'Savoye LET',
    color: '#222',
    fontWeight: 'bold'
  },
  image: {
    marginBottom: '10%'
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#800020',
    paddingTop: '10%'

  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    width: '80%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee', 
  },
  button: {
    justifyContent: 'center',
    margin: 10
  }
})


export default AuthScreen