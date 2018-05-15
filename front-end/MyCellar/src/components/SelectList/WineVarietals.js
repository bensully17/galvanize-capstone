import React, { Component } from 'react'
import { View, StyleSheet, Picker, Text, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { connect } from 'react-redux'
import { newWineVarietal } from '../../store/actions/index' 

const dismissModal = (props) => {
    Navigation.dismissModal({
        animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
});
}

class VarietalPicker extends Component {

  render () {
    return (
      <View style={styles.topContainer}>
        <Picker
          selectedValue={this.props.newVarietal}
          style={{ height: '80%', width: '100%' }}
          onValueChange={(itemValue) => this.props.updateVarietal(itemValue)}>
          <Picker.Item label='Select a Varietal' value=''/>
          <Picker.Item label='Blend' value='Blend'/>
          <Picker.Item label='Barbaresco' value='Barbaresco'/>          
          <Picker.Item label='Barbera' value='Barbera'/>
          <Picker.Item label='Barolo' value='Barolo'/>
          <Picker.Item label='Brunello di Montalcino' value='Brunello di Montalcino'/>
          <Picker.Item label='Cabernet Franc' value='Cabernet Franc'/>
          <Picker.Item label='Cabernet Sauvignon' value='Cabernet Sauvignon'/>
          <Picker.Item label='Chablis' value='Chablis'/>
          <Picker.Item label='Champagne' value='Champagne'/>
          <Picker.Item label='Champagne Rosé' value='Champagne Rosé'/>
          <Picker.Item label='Chardonnay' value='Chardonnay'/>
          <Picker.Item label='Châteauneuf-du-Pape' value='Châteauneuf-du-Pape'/>
          <Picker.Item label='Chenin Blanc' value='Chenin Blanc'/>          
          <Picker.Item label='Chianti' value='Chianti'/>
          <Picker.Item label='Côtes du Rhône' value='Côtes du Rhône'/>          
          <Picker.Item label='Grenache' value='Grenache'/>
          <Picker.Item label='Grenache Blanc' value='Grenache Blanc'/>
          <Picker.Item label='Malbec' value='Malbec'/>          
          <Picker.Item label='Merlot' value='Merlot'/>
          <Picker.Item label='Moscato' value='Moscato'/>          
          <Picker.Item label='Pinot Grigio' value='Pinot Grigio'/>
          <Picker.Item label='Pinot Gris' value='Pinot Gris'/>
          <Picker.Item label='Pinot Noir' value='Pinot Noir'/>
          <Picker.Item label='Petit Sirah' value='Petit Sirah'/>
          <Picker.Item label='Riesling' value='Riesling'/>
          <Picker.Item label='Rosé - Cabernet Franc' value='Rosé - '/>
          <Picker.Item label='Rosé - Cabernet Sauvignon' value='Rosé - Cabernet Sauvignon'/>
          <Picker.Item label='Rosé - Grenache' value='Rosé - Grenache'/>
          <Picker.Item label='Rosé - Merlot' value='Rosé - Merlot'/>
          <Picker.Item label='Rosé - Pinot Noir' value='Rosé - Pinot Noir'/>
          <Picker.Item label='Rosé - Sangiovese' value='Rosé - Sangiovese'/>
          <Picker.Item label='Rosé - Syrah' value='Rosé - Syrah'/>
          <Picker.Item label='Rosé - White Zinfandel' value='Rosé - White Zinfandel'/>
          <Picker.Item label='Sangiovese' value='Sangiovese'/>
          <Picker.Item label='Sauvignon Blanc' value='Sauvignon Blanc'/>
          <Picker.Item label='Shiraz' value='Shiraz'/>
          <Picker.Item label='Super-Tuscan' value='Super-Tuscan'/>          
          <Picker.Item label='Syrah' value='Syrah'/>
          <Picker.Item label='Zinfandel' value='Zinfandel'/>
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
    newVarietal: state.newWine.varietal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateVarietal: function(varietal) {
      return dispatch(newWineVarietal(varietal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VarietalPicker) 