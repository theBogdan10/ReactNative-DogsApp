/* eslint-disable linebreak-style */
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import MainScreen from './src/MainScreen';

const MainNavigator = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			header: false
		},
	},
	Main: {
		screen: MainScreen,
		navigationOptions: {
			header: false
		},
	},
},
{
	initialRouteName: 'Login'
});

const App = createAppContainer(MainNavigator);

export default App;