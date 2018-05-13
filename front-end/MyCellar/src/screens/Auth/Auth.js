import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import startTabs from '../../Navigation/StartMainTabs'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../../Assets/cheers.png'
import { uiStartLoading, uiStopLoading, authSetToken } from '../../store/actions/index'

class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: null,
    password: null
  }
  static navigatorStyle = {
    navBarTextColor: 'silver',
    drawUnderNavBar: true,
    navBarTranslucent: true,
    topBarElevationShadowEnabled: true,
    navBarBackgroundColor: '#590000',
    navBarHidden: true
  }
  
  loginHandler = () => {
    this.props.startLoading()
    fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB-WGcSiufW3WEIJ8ymWQRbTGQTAuEXKmU', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        returnSecureToken: true
      })
    })
    .catch(err => {
      this.props.stopLoading()
      alert('Authentication Failed, Please Try Again!')
    })
    .then(res => res.json())
    .then(res => { 
      if(res.error) {
        if (res.error.message === "INVALID_PASSWORD") {
          this.props.stopLoading()
          alert('Incorrect password, please try again.')
        }
        else if(res.error.message === "EMAIL_NOT_FOUND") {
          this.props.stopLoading()
          alert('Email not found, please try again.')
        }
        else if(res.error.message === "USER_DISABLED") {
          this.props.stopLoading()
          alert('The user account has been disabled by an administrator.')
        }
        else if(res.error) {
          this.props.stopLoading()
          alert(res.error.message)
        }
      } 
      else {
        this.props.stopLoading()
        console.log(res)
        
        this.props.setToken(res.idToken)
        startTabs()
      }
    })
  }

  emailInputHandler = (event) => {
    this.setState({email: event}); 
  }
  passInputHandler = (event) => {
    this.setState({password: event}); 
  }
  startCreateAccount = () => {
    this.props.navigator.push({
      screen: 'MyCellar.CreateAccount', 
      title: 'Create Account'
    });
  }
  startForgotPassword = () => {
    this.props.navigator.push({
      screen: 'MyCellar.ForgotPass',
      title: 'Reset Password'
    })
  }

  render () {
    let submitButton = (
      <CustomButton onPress={this.loginHandler}>Sign In</CustomButton>
    )
    if (this.props.isLoading) {
      submitButton = <ActivityIndicator />
    }
    return (
      <View style={styles.container} >
        <Image source={image} style={styles.image}maxHeight='30%' maxWidth='50%'></Image>
        <Text style={styles.text}>MyCellar</Text>
        <TextInput placeholder='Email' style={styles.textInput} onChangeText={this.emailInputHandler}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true} onChangeText={this.passInputHandler}></TextInput>
        <View style={styles.button}>
          {submitButton}
          <CustomButton onPress={this.startCreateAccount}>Create New Account</CustomButton>
          <Button color='#eee' onPress={this.startForgotPassword} title='Forgot Password'></Button>
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
  },
  button: {
    width: '80%',
    marginTop: '10%'
  }
})

const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoading: function() {
      return dispatch(uiStartLoading())
    },
    stopLoading: function() {
      return dispatch(uiStopLoading())
    },
    setToken: function(token) {
      return dispatch(authSetToken(token))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)