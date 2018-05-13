import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import CustomButtonSmall from '../../components/CustomButton/small'


class PickImage extends Component {
  state = {
    pickedImage: null
  }

  render() {
    return (
     <View style={styles.container}>
       <View style={styles.placeholder}>
         <Image source={this.props.selectedImage} style={styles.previewImage}></Image>
       </View>
       <View style={styles.button}>
         <CustomButtonSmall onPress={this.props.selectImage}>Select an Image</CustomButtonSmall>
       </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      width: "100%",
      alignItems: "center",
      flex: 1
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#ddd",
    width: '40%',
    height: '100%',
    borderRadius: 5,
    flex: 4
  },
  button: {
    marginTop: 10,
    width: '37%',
    flex: 1
  },
  previewImage: {
      width: "100%",
      height: "100%",
      flex: 1
  }
});

export default PickImage