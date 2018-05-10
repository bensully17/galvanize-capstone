import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = (props) => {
  return(
    <View style={styles.listItem}>
      <Text>{props.itemName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 25,
    borderColor: '#333',
    borderWidth: 1,
    margin: 3,
    backgroundColor: '#ddd',
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: .5
  }
})

export default ListItem