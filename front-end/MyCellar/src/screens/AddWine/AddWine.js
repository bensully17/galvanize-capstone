import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native'
import { Drawer } from 'native-base'
import ListItem from '../../components/ListItem/ListItem'
import { Navigation } from 'react-native-navigation'
import ImagePicker from 'react-native-image-picker'
import PickImage from '../../components/PickImage/PickImage'
import { connect } from 'react-redux'
import { newWineGrapes, newWineMaker, newWineName, newWineNotes, newWineVarietal, newWineVintage } from '../../store/actions/index' 
import CustomButtonSmall from '../../components/CustomButton/small'



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
    ImagePicker.showImagePicker({title: 'Select an Image', maxWidth: 800, maxHeight: 600}, res => {
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
    navBarTextColor: 'silver',
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
  
  render () {
    return (
      <View style={styles.topContainer}>
        <View style={styles.pickImage}>
          <PickImage style={styles.pickImage} selectImage={this.pickImageHandler} selectedImage={this.state.selectedImage}/>
        </View>
        <View style={styles.picker}>
          <CustomButtonSmall style={styles.CustomButton} onPress={this.openVintagePicker}>Select a Vintage</CustomButtonSmall> 
          <View style={styles.vintageContainer}>
            <Text style={styles.vintage}>{this.props.newVintage}</Text>
          </View> 
        </View> 
        <View style={styles.form}>
          <TextInput placeholder='Wine Name' style={styles.textInput}></TextInput>
          <TextInput placeholder='Wine Maker' style={styles.textInput}></TextInput>
          <TextInput placeholder='Varietal(s)' style={styles.textInput}></TextInput>
          <TextInput placeholder='Notes' style={styles.notes} multiline={true}></TextInput>
        </View> 
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
    backgroundColor: 'rgba(107,10,24,.7)'
  },
  form: {
    width: '100%',
    alignItems: 'center',
    flex: 5
  },
  CustomButton: {
    width: '100%',
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
    fontSize: 20,
    color: '#111',
    margin: 5,
    padding: 2,
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
    margin: 5,
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 45,
    backgroundColor: '#eeeeee',
  },
  pickImage: {
    width: '100%',
    marginTop: '2%',
    flex: 4
  },
  picker: {
    flex: 2,
    justifyContent: 'flex-end',
    marginBottom: 10,
    width: '37%',
  },
  pickerText: {
  },
  pickerPicker: {
    height: 100
  }
})

const mapStateToProps = state => {
  return {
    newVintage: state.newWine.vintage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateVintage: function(vintage) {
      return dispatch(newWineVintage(vintage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddWine) 