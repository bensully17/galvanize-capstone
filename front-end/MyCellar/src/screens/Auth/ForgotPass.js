import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import startTabs from '../../Navigation/StartMainTabs'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../../Assets/cheers.png'


class ForgotPass extends Component {
  state = {
    email: null
  }
  static navigatorStyle = {
    navBarTextColor: 'silver',
    drawUnderNavBar: true,
    navBarTranslucent: true,
    topBarElevationShadowEnabled: true,
    navBarBackgroundColor: '#590000',
    navBarHidden: true
  }
  submitHandler = () => {
    fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB-WGcSiufW3WEIJ8ymWQRbTGQTAuEXKmU', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
      })
    })
    startTabs()
  }

  emailInputHandler = (event) => {
    this.setState({email: event}); 
  }
  passInputHandler = (event) => {
    this.setState({password: event}); 
  }

  render () {
    return (
      <View style={styles.container} >
        <Image source={image} style={styles.image}maxHeight='30%' maxWidth='50%'></Image>
        <TextInput placeholder='Email' style={styles.textInput} onChangeText={this.emailInputHandler}></TextInput>
        <View style={styles.button}>
          <CustomButton onPress={this.submitHandler}>Submit</CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton>Back to Login</CustomButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: 'GillSans',
    color: '#ddd',
    fontWeight: 'bold',
    padding: 20
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
    borderRadius: 3,
    width: '99%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee', 
  },
  button: {
    width: '100%'
  }
})


export default ForgotPass