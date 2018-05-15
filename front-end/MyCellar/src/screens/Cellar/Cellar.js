import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'
import { Navigation } from 'react-native-navigation'
import WineDetail from '../../components/wineDetail/wineDetail'


class Cellar extends Component {
  static navigatorStyle = {
    navBarTextColor: '#fff',
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

viewModal = () => {
  this.props.navigator.showModal({
  screen: "MyCellar.WineDetail", // unique ID registered with Navigation.registerScreen
  title: "The Prisoner", // title of the screen as appears in the nav bar (optional)
  passProps: {
    itemName: 'The Prisoner'
  }, // simple serializable object that will pass as props to the modal (optional)
  navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
  animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
}

  render () {
    return (
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.list} onPress={this.viewModal}>
          <ListItem itemName='The Prisoner' ></ListItem>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1, 
    width: '100%',
    padding: '2%',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  list: {
    width: '100%',
    backgroundColor: '#ccc'
  }
  
})

export default Cellar