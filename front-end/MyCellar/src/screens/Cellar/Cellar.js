import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'
import { Navigation } from 'react-native-navigation'


class Cellar extends Component {
  static navigatorStyle = {
    navBarTextColor: 'silver',
    drawUnderNavBar: false,
    navBarTranslucent: true,
    topBarElevationShadowEnabled: true,
    navBarBackgroundColor: '#590000',
  }
  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Log Out',
        id: 'logout', 
        disabled: false, 
        buttonColor: 'silver', 
        buttonFontSize: 14, 
        buttonFontWeight: '600', 
      }
    ]
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { 
    if (event.type == 'NavBarButtonPress') { 
      if (event.id == 'logout') { 
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'MyCellar.AuthScreen',
            title: 'Sign In'
          }
        })
      }
    }
  }
  render () {
    return (
      <View style={styles.topContainer}>
        <View style={styles.list}>
          <ListItem itemName='Item Number 1' ></ListItem>
          <ListItem itemName='Item Number 2' ></ListItem>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1, 
    width: '100%',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#800020'
  },
  list: {
    width: '80%',
  }
  
})

export default Cellar