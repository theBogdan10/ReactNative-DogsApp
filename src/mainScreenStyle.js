import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#293155',
	},
	img: {
		width: '100%',
		height: height/2,
		borderRadius: 10,
	},
	exit: {
		height: 50,
		backgroundColor: '#5ED1BA',
		width: '50%',
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		opacity: 0.8
	},
	updateText: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 18,
		marginTop: '15%'
	},
	componentWidth:{
		width:'80%',
		alignSelf:'center'
	},
	imageView:{
		alignItems: 'center',
		marginTop: '20%'
	},
	updateView:{
		alignItems: 'center',
		marginTop: '5%'
	},
	valueText:{
		color: 'white', 
		fontSize: 17 
	},
	slider:{
		width: '100%',
		height: 70
	},
	exitText:{
		color:'black',
		fontSize:16,
	},
	test:{
		marginTop:'5%'
	},
	hidden:{
		display:'none'
	},
	scroll:{
		height:'100%',
		width:'100%'
	},
	networkError:{
		color: 'white', 
		fontSize: 20
	},
	errorView:{
		alignItems:'center',
	}
});

export default styles;