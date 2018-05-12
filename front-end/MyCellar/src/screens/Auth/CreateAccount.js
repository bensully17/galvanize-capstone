import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { Navigation } from 'react-native-navigation'
import startTabs from '../../Navigation/StartMainTabs'
import CustomButton from '../../components/CustomButton/CustomButton'
import image from '../../../Assets/cheers.png'
import { uiStartLoading, uiStopLoading, authSetToken } from '../../store/actions/index'



class CreateAccount extends Component {
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
  submitHandler = () => {
    fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB-WGcSiufW3WEIJ8ymWQRbTGQTAuEXKmU', {
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
      if (res.error) {
        if (res.error.message === "EMAIL_EXISTS") {
          alert('This email address is already associated with a user account. Please try logging in or select "forgot password".')
        }
        else if(res.error.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
          alert('We have blocked all requests from this device due to unusual activity. Try again later.')
        }
        else if(res.error.message === "USER_DISABLED") {
          alert('The user account has been disabled by an administrator.')
        }
        else if(res.error) {
          alert(res.error.message)
        }
      }
      else { 
        this.props.stopLoading()
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

  render () {
    return (
      <View style={styles.container} >
        <Image source={image} style={styles.image}maxHeight='30%' maxWidth='50%'></Image>
        <TextInput placeholder='Email' style={styles.textInput} onChangeText={this.emailInputHandler}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true} onChangeText={this.passInputHandler}></TextInput>
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
const mapStateToProps = state => {
  return {
    isLoading: state.ui.isLoading,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startLoading: function() {
      return dispatch(uiStartLoading)
    },
    stopLoading: function() {
      return dispatch(uiStopLoading)
    },
    setToken: function() {
      return dispatch(authSetToken)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
