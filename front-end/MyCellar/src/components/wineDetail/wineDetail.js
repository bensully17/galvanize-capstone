import React from 'react'
import { Modal, View, Image, Text, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation';
import image from '../../../Assets/Prisoner.jpg'

const dismissModal = (props) => {
    Navigation.dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
});
}

const wineDetail = props => {
    console.log('INFO: ', props.itemInfo)
    return (
    <TouchableWithoutFeedback onPress={dismissModal}>
        <View style={styles.modal}>
            <View style={styles.image}>
                <Image source={{uri: props.itemInfo.item.imageURL}} style={{ height:300, width: 300 }}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.textBig}>{props.itemInfo.item.wineName}</Text>
                <Text style={styles.text}>{props.itemInfo.item.vintage}</Text>
                <Text style={styles.subText}>{props.itemInfo.item.wineMaker}</Text>
                <Text style={styles.subText}>{props.itemInfo.item.varietal}</Text>
                <Text style={styles.paragraph}>{props.itemInfo.item.notes}</Text>
            </View>
       </View>
    </TouchableWithoutFeedback>
    
)}

const styles = StyleSheet.create({
    image: {
        flex: 1
    },
    details: {
        flex: 1
    },
    modal: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 24
    },
    details: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24
    },
    modalImage: {
        maxHeight: '50%',
        maxWidth: '50%'
    },
    textBig: {
        fontSize: 26,
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 22,
        marginTop: 10,
        marginBottom: 10
    },
    subText: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },
    paragraph: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10
    }
})


export default wineDetail