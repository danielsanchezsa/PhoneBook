import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ContactsListContextProvider from './src/context/ContactsListContext';
import AddContact from './src/screens/AddContact';
import ContactScreen from './src/screens/ContactScreen';
import EditContact from './src/screens/EditContact';
import MainScreen from './src/screens/MainScreen';

const navigator = createStackNavigator(
  {
   MainScreen: MainScreen,
   ContactScreen: ContactScreen,
   AddContact: AddContact,
   EditContact: EditContact
  },
  {
    initialRouteName:'MainScreen',
    defaultNavigationOptions:{
      title: 'PhoneBook'
    }
  }
);

const App = createAppContainer(navigator);

export default ()=>{
 return(
    <ContactsListContextProvider>
     <App/>
  </ContactsListContextProvider>
 );
}