import { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import Cellar from './src/screens/Cellar/Cellar'
import Settings from './src/screens/Settings/Settings'
import AddWine from './src/screens/AddWine/AddWine';

//Register Screens
Navigation.registerComponent('MyCellar.AuthScreen', () => AuthScreen)
Navigation.registerComponent('MyCellar.Cellar', () => Cellar)
Navigation.registerComponent('MyCellar.Settings', () => Settings)
Navigation.registerComponent('MyCellar.AddWine', () => AddWine)

//Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'MyCellar.AuthScreen',
    title: 'Sign In'
  }
})