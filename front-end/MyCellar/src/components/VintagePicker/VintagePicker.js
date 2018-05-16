import React, { Component } from 'react'
import { View, StyleSheet, Picker, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import { newWineVintage } from '../../store/actions/index' 

const dismissModal = (props) => {
    Navigation.dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
});
}

class VintagePicker extends Component {
  state = {
    vintages: null,
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

  vintageUpdateHandler = (value) => {
    this.props.updateVintage(value)
  }
  render () {
    return (
      <View style={styles.topContainer}>
        <Picker
          selectedValue={this.props.newVintage}
          style={{ height: '80%', width: '100%' }}
          onValueChange={(itemValue) => this.props.updateVintage(itemValue)}>
          <Picker.Item label='Select a Vintage' value='' key={Math.random()}/>
          {this.state.vintages}
        </Picker>
        <Button title='Select' onPress={dismissModal}></Button>
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
    backgroundColor: '#eee'
  },
  picker: {
    flex: 1,
    justifyContent: 'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(VintagePicker) 