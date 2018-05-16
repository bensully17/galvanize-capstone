import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import { userWines } from '../../store/actions/index'
import WineDetail from '../../components/wineDetail/wineDetail'


class Cellar extends Component {
  state = {
    listItems: []
  }

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
    this.props.navigator.addOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
    if (event.id === 'bottomTabSelected') {
      fetch('https://mycellar-v1.herokuapp.com/usercellars')
        .then(res => res.json())
        .then(res => {
          this.props.updateWines(res.reverse())
        })
      }
    if (event.id === 'bottomTabReselected') {
      this.forceUpdate()
    }
  }


  viewModal = (info) => {
    console.log('info: ', info)
    this.props.navigator.showModal({
    screen: "MyCellar.WineDetail", // unique ID registered with Navigation.registerScreen
    title: info.item.wineName,
    passProps: {
      itemInfo: info
    }, // simple serializable object that will pass as props to the modal (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
    })
  }

  componentDidMount() {
    fetch('https://mycellar-v1.herokuapp.com/usercellars')
    .then(res => res.json())
    .then(res => {
      this.props.updateWines(res.reverse())
    })
  }
  render () {    
    return (
      <FlatList 
        style={styles.topContainer}
        data={this.props.userWines}
        keyExtractor={(item, index) => `${index}`}
        renderItem={(info) => (<ListItem itemName={info.item.wineName} onPress={() => this.viewModal(info)} rating={info.item.rating} disabled={true} itemVarietal={info.item.varietal} imageUrl={info.item.imageURL} />)}
        ></FlatList>
    )
  }
}

const mapStateToProps = state => {
  return {
    userWines: state.wines.userWines
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateWines: function(wines) {
      return dispatch(userWines(wines))
    }
  }
}
const styles = StyleSheet.create({
  topContainer: {
    flex: 1, 
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff'
  },
  list: {
    width: '100%',
    backgroundColor: '#ccc'
  }
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Cellar)