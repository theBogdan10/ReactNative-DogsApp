import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#293155',
		justifyContent: 'center'
	},
	langChoise: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: '16%',
		alignItems:'center'
	},
	english: {
		color: 'white',
		fontSize: 17
	},
	arabic: {
		color: 'white',
		fontSize: 18
	},
	russian:{
		color: 'white',
		fontSize: 18
	},
	langOpacity: {
		opacity: 0.4
	},
	componentWidth:{
		width:'80%',
		alignSelf:'center'
	},
	logoView:{
		alignItems: 'center', 
		marginBottom: '5%', 
		marginTop: '15%'
	},
	logo:{
		width: '80%', 
		height: height/4
	},
	skipRegistrView:{
		alignItems: 'center',
		marginTop: '10%'
	},
	skipRegistrTouchOp:{
		height:20,
	},
	skipRegistrText:{
		color:'white'
	},
	separator:{
		color: 'white', 
		height: 20
	},
	englishTouchOp:{
		height: 30,
		marginTop: 5 
	},
	arabicTouchOp:{
		height: 30
	},
	russianTouchOp:{
		height: 30,
        
	},
	scroll:{
		height:'100%',
		width:'100%'
	}
});


export default styles;