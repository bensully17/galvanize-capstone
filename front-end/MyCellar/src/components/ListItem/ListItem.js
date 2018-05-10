import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import prisoner from '/Users/ben/galvanize/capstone-frontend/galvanize-capstone/front-end/MyCellar/Assets/the-prisoner-wine-company-the-prisoner-1193399-s43_p.jpg'

const ListItem = (props) => {
  return(
    <View style={styles.listItem}>
      <Text>{props.itemName}</Text>
      <Image source={prisoner} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#333',
    borderWidth: 1,
    margin: 3,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: .5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    maxHeight: 50,
    maxWidth: 50
  },
  text: {
    color: '#333',
    fontSize: 12,
  }
})

export default ListItem