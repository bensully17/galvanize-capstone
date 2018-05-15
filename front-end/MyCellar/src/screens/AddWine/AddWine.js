import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Picker, ActivityIndicator } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'
import { Navigation } from 'react-native-navigation'
import ImagePicker from 'react-native-image-picker'
import PickImage from '../../components/PickImage/PickImage'
import { connect } from 'react-redux'
import { newWineGrapes, newWineMaker, newWineName, newWineNotes, newWineVarietal, newWineVintage, newWineImage } from '../../store/actions/index' 
import { uiStartLoading, uiStopLoading } from '../../store/actions/index'
import CustomButtonSmall from '../../components/CustomButton/small'
import CustomButton from '../../components/CustomButton/CustomButton'
import WineRating from '../../components/StarRating/StarRating'


class AddWine extends Component {
  state = {
    vintages: null,
    selectedImage: null
  }
  componentWillMount() {
    let currentDate = new Date(Date.now())
    let currentYear = currentDate.getFullYear()
    let vintageArray = []
    let vintageStringArray = []
    let componentArray = []
    for (i = 1950; i <= currentYear; i++) {
      vintageArray.push(i)
    }
    vintageArray.forEach(year => {
      return (vintageStringArray.push(year.toString()))
    })
    vintageStringArray.forEach(year => {
      return(componentArray.push(<Picker.Item label={year} value={year} key={Math.random()}/>))
    })
    this.setState({vintages: componentArray.reverse()})
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Select an Image', maxWidth: 600, maxHeight: 800}, res => {
      if (res.didCancel) {console.log('User Cancelled')}
      else if (res.error) {
        console.log('Error', res.error)
      }
      else {
        this.setState({
          selectedImage: { uri: res.uri, base64: res.data }
        })
      }
    })
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
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
  }

  vintageUpdateHandler = (value) => {
    this.props.updateVintage(value)
  }

  openVintagePicker = () => {
    this.props.navigator.showModal({
      screen: "MyCellar.VintagePicker", 
      title: "Pick a Vintage",
      animationType: 'slide-up' 
    })
  }
  openVarietalPicker = () => {
    this.props.navigator.showModal({
      screen: 'MyCellar.VarietalPicker',
      title: 'Pick a Varietal',
      animationType: 'slide-up'
    })
  }

  updateNameHandler = (name) => {
    this.props.updateName(name)
  }
  
  updateMakerHandler = (maker) => {
    this.props.updateMaker(maker)
  }

  updateNotesHandler = (notes) => {
    this.props.updateNotes(notes)
  }

  postWineToServer = () => {
     const data = {
      "uid": this.props.uid,
      "wineMaker": this.props.wineMaker,
      "wineName": this.props.wineName,
      "vintage": this.props.newVintage,
      "varietal": this.props.newVarietal,
      "notes": this.props.notes,
      "imageURL": this.props.imageURL,
      "rating": this.props.rating
    }
    fetch('https://mycellar-v1.herokuapp.com/usercellars', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log('POST New Wine: ', res)
        this.props.stopLoading()
      })
  }

  postWineHandler = () => {
   
    this.props.startLoading()
    fetch('https://us-central1-mycellar-v1.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: this.state.selectedImage.base64
      })
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
      this.props.imageUpload(parsedRes.imageUrl)
      console.log('Image URL: ', this.props.imageURL)
      this.postWineToServer()
    })
  }
    

  render () {
    let varietalButton = 'Select Varietal'
    let vintageButton = 'Select Vintage'
    let submitButton = <CustomButton style={styles.submit} onPress={this.postWineHandler}>Add Wine</CustomButton>
    if (this.props.newVarietal !== null) {
      varietalButton = `Varietal: ${this.props.newVarietal}`
    }
    if (this.props.newVintage !== null) {
      vintageButton = `Vintage: ${this.props.newVintage}`
    }
    if (this.props.isLoading) {
      submitButton = <ActivityIndicator style={styles.submit}/>
    }
    return (
      <View style={styles.topContainer}>
        <View style={styles.pickImage}>
          <PickImage style={styles.pickImage} selectImage={this.pickImageHandler} selectedImage={this.state.selectedImage}/>
        </View>
        <View style={styles.form}>
          <TextInput placeholder='Wine Name' style={styles.textInput} onChangeText={this.updateNameHandler}></TextInput>
          <TextInput placeholder='Wine Maker' style={styles.textInput} onChangeText={this.updateMakerHandler}></TextInput>
          <TextInput placeholder='Notes' style={styles.notes} multiline={true} onChangeText={this.updateNotesHandler}></TextInput>
        </View> 
         <View style={styles.vintage}>
          <CustomButtonSmall style={styles.CustomButton} onPress={this.openVintagePicker}>{vintageButton}</CustomButtonSmall> 
        </View> 
        <View style={styles.vintage}>
            <CustomButtonSmall onPress={this.openVarietalPicker}>{varietalButton}</CustomButtonSmall>
        </View>
        <WineRating style={styles.stars}/>
        {submitButton}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1, 
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
  form: {
    width: '100%',
    alignItems: 'center',
    flex: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    width: '80%',
    margin: 5,
    padding: 6,
    backgroundColor: '#eeeeee', 
  },
  vintage: {
    marginBottom: '3%',
    padding: 2,
    width: '38%',
    flex: 1
  },
  vintageContainer: {
    alignItems: 'center'
  },
  notes: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    width: '80%',
    margin: '1%',
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 45,
    backgroundColor: '#eeeeee',
  },
  pickImage: {
    width: '100%',
    marginTop: '1%',
    marginBottom: '1%',
    flex: 5
  },

  stars: {
    flex:1
  },
  submit: {
    flex: 1
  }

})

const mapStateToProps = state => {
  return {
    newVintage: state.newWine.vintage,
    newVarietal: state.newWine.varietal,
    isLoading: state.ui.isLoading,
    wineName: state.newWine.name,
    wineMaker: state.newWine.maker,
    notes: state.newWine.notes,
    rating: state.newWine.rating,
    uid: state.auth.token,
    imageURL: state.newWine.imageURL
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateVintage: function(vintage) {
      return dispatch(newWineVintage(vintage))
    },
    updateName: function(name) {
      return dispatch(newWineName(name))
    },
    updateMaker: function(maker) {
      return dispatch(newWineMaker(maker))
    },
    updateNotes: function(notes) {
      return dispatch(newWineNotes(notes))
    },
    startLoading: function() {
      return dispatch(uiStartLoading())
    },
    stopLoading: function() {
      return dispatch(uiStopLoading())
    },
    imageUpload: function(image) {
      return dispatch(newWineImage(image))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWine) 