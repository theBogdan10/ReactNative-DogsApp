import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#293155',
	},
	img: {
		width: '100%',
		height: 350,
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
	}
});

export default styles;