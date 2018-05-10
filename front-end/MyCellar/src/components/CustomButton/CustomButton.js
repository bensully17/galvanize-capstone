import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButton = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 7,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#999',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: .5,
  },
  text: {
    color: 'rgb(0, 100, 197)',
    fontWeight: 'bold'
  }
})

export default CustomButton