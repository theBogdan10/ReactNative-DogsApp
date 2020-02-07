
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import MainScreen from './src/MainScreen';
import MainScreenClass from './src/MainScreenClass';


const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions:{ 
      header:false
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions:{ 
      header:false
    },
  },  
},
 {
    initialRouteName:'Login'
});

const App = createAppContainer(MainNavigator);
  
export default App;