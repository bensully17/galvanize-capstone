import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import Cellar from './src/screens/Cellar/Cellar'
import AddWine from './src/screens/AddWine/AddWine'
import WineDetail from './src/components/wineDetail/wineDetail'
import CreateAccount from './src/screens/Auth/CreateAccount'
import ForgotPass from './src/screens/Auth/ForgotPass'
import configureStore from './src/store/configureStore'
import VintagePicker from './src/components/VintagePicker/VintagePicker'
import VarietalPicker from './src/components/SelectList/WineVarietals'

const store = configureStore()

//Register Screens
Navigation.registerComponent('MyCellar.AuthScreen', () => AuthScreen, store, Provider)
Navigation.registerComponent('MyCellar.Cellar', () => Cellar, store, Provider)
Navigation.registerComponent('MyCellar.AddWine', () => AddWine, store, Provider)
Navigation.registerComponent('MyCellar.WineDetail', () => WineDetail, store, Provider)
Navigation.registerComponent('MyCellar.CreateAccount', () => CreateAccount, store, Provider)
Navigation.registerComponent('MyCellar.ForgotPass', () => ForgotPass, store, Provider)
Navigation.registerComponent('MyCellar.VintagePicker', () => VintagePicker, store, Provider)
Navigation.registerComponent('MyCellar.VarietalPicker', () => VarietalPicker, store, Provider)


//Start app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'MyCellar.AuthScreen',
    navBarHidden: true
  }
})