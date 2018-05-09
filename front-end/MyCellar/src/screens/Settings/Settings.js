import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'

class Cellar extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ListItem itemName='Item Number 1'></ListItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee'
  }
})

export default Cellar