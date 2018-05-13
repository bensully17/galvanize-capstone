import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButtonSmall = props => {
  return (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: '3%',
    padding: 6,
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#004467',
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: .5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    width: '100%',
    alignItems: 'center',
    borderRadius: 4
  },
  text: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 14
  }
})

export default CustomButtonSmall