import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Image, ActivityIndicator } from 'react-native'
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
    this.props.startLoading()
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
          this.props.stopLoading()
          alert('This email address is already associated with a user account. Please try logging in or select "forgot password".')
        }
        else if(res.error.message === "TOO_MANY_ATTEMPTS_TRY_LATER") {
          this.props.stopLoading()          
          alert('We have blocked all requests from this device due to unusual activity. Try again later.')
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
        this.props.setToken(res.localId)
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
  returnLogin = () => {
    this.props.navigator.push({
      screen: 'MyCellar.AuthScreen'
    })
  }

  render () {
    let submitButton = (
      <CustomButton onPress={this.submitHandler}>Submit</CustomButton>
    )
    if (this.props.isLoading) {
      submitButton = <ActivityIndicator />
    }
    return (
      <View style={styles.container} >
        <Image source={image} style={styles.image}maxHeight='30%' maxWidth='80%'></Image>
        <TextInput placeholder='Email' style={styles.textInput} onChangeText={this.emailInputHandler}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput} secureTextEntry={true} onChangeText={this.passInputHandler}></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            {submitButton}
          </View>
          <View style={styles.button}>
            <CustomButton onPress={this.returnLogin}>Return to Login</CustomButton>
          </View>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  forgot: {
    color: '#eee'
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: '10%'
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
  },
  button: {
    width: '80%',
    // marginTop: '10%'
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
