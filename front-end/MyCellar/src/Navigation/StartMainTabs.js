import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([Icon.getImageSource('ios-wine', 30),
  Icon.getImageSource('md-settings', 30, '#800020'),
  Icon.getImageSource('md-add', 30)
]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'My Cellar',
        screen: 'MyCellar.Cellar',
        title: 'My Cellar',
        icon: sources[0]
      },
      {
        label: 'Add a Wine',
        screen: 'MyCellar.AddWine',
        title: 'Add a Wine',
        icon: sources[2]
      },
      {
        label: 'Settings',
        screen: 'MyCellar.Settings',
        title: 'Settings',
        icon: sources[1]
      }
    ]
  })
})
}
  

export default startTabs