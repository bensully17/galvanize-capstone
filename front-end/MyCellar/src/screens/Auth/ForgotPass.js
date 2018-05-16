import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
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
    fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getOobConfirmationCode?key=AIzaSyB-WGcSiufW3WEIJ8ymWQRbTGQTAuEXKmU', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        'requestType': "PASSWORD_RESET",
        'email': this.state.email
      })
    })
    .then(res => res.json())
    .then(res => {
      console.log('forgot: ', res)
        this.props.navigator.push({
        screen: 'MyCellar.AuthScreen'
      })
      })
    }
  

  emailInputHandler = (event) => {
    this.setState({email: event}); 
  }

  backToLogin = () => {
    this.props.navigator.push({
      screen: 'MyCellar.AuthScreen'
    })
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
          <CustomButton onPress={this.backToLogin}>Back to Login</CustomButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  forgot: {
    color: '#eee'
  },
  text: {
    fontSize: 30,
    fontFamily: 'GillSans',
    color: '#fff',
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
    backgroundColor: 'rgba(125, 25, 28, 1)',
    paddingTop: '10%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginTop: '3%',
    marginBottom: '10%'
  },
  button: {
    width: '80%',
  }
})


export default ForgotPass