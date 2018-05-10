import React from 'react'
import { Modal, View, Image, Text, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import image from '/Users/ben/galvanize/capstone-frontend/galvanize-capstone/front-end/MyCellar/Assets/the-prisoner-wine-company-the-prisoner-1193399-s43_p.jpg'
import { Navigation } from 'react-native-navigation';

const dismissModal = (props) => {
    Navigation.dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
});
}

const wineDetail = props => (
    <TouchableWithoutFeedback onPress={dismissModal}>
        <View style={styles.modal}>
            <Image source={image}/>
            <Text>{props.itemName}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})


export default wineDetail