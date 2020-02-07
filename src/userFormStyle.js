import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },

  input: {
    opacity: 0.3,
    height: 50,
    width: '100%',
    color: 'white',
    borderBottomColor: '#EBEDE8',
    borderBottomWidth: 1.5,
    fontSize: 15,
  },

  error: {
    borderBottomColor: 'red'
  },

  focus: {
    borderBottomColor: '#00FFFF',
    opacity: 0.6,
  },

  unfocus: {
    borderBottomColor: '#EBEDE8',
  },

  frgt: {
    marginTop: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  text: {
    color: 'white',
    opacity: 0.5,
    marginBottom: 15,
  },
  signIn: {
    height: 40,
    backgroundColor: '#d23366',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  signUp: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#293155',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'white',
    opacity: 0.2
  },


});

export default styles;