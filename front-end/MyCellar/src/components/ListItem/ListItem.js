import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import StarRating from '../../components/StarRating/StarRating'


const ListItem = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.listItem}>
        <View style={styles.details}>
          <Text style={styles.text}>{props.itemName}</Text>
          <Text style={styles.subText}>{props.itemVarietal}</Text>
          <StarRating style={styles.stars} size={20} styling={{width: '20%'}} disabled={props.disabled} rating={props.rating}/>
        </View>
        <Image source={{uri: props.imageUrl}} style={{ height:70, width: 70 }}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#eeeeee',
    borderRadius: 5,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOpacity: .5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  details: {
    justifyContent: 'center',
  },
  star: {
    width: '20%'
  },
  image: {
    height: 50,
    width: 50,
    flex: 1
  },
  text: {
    color: '#333',
    fontSize: 20,
  }
})

export default ListItem