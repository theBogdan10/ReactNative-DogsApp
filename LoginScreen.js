import React,{useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View,Image,ScrollView,KeyboardAvoidingView, Dimensions} from 'react-native';
import {UserForm} from './src/UserForm';
import I18n from './src/i18';


const LoginScreen = (props) => {

  const {height, width} = Dimensions.get('window');
  const [parametrs,setParametrs]=useState({arabic:'false',langValue:'en',});

  const onChangeLang = (data) => {
    switch(data.lang){
      case 'en':{
        setParametrs({langValue:'en',arabic:'false'});
        I18n.locale='en';
      }
      break;
      case 'ar':{
        setParametrs({langValue:'ar',arabic:'true'});
        I18n.locale='ar';
      }
      break;       
    };
  }

  return (
    <View style={styles.container}>
        <View style={{width:'80%'}}>
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'  >
          <KeyboardAvoidingView  behavior='position' keyboardVerticalOffset={-height/10} >

            <View style={{alignItems:'center',marginBottom:'5%',marginTop:'10%'}}>
              <Image style={{width:'80%', height:150}} source={require('./img/Dog.png')} />
            </View>

            <UserForm navigation={props.navigation} parametrs={parametrs} lang={parametrs.langValue} />

            <View style={{alignItems:'center',marginTop:'10%'}}>
              <TouchableOpacity style={{height:20}}>
                <Text style={{color:'white'}} >{I18n.t('loginScreen.skipRegistr')} </Text>
              </TouchableOpacity>
            </View>
                
            <View style={styles.langChoise}>
                <TouchableOpacity style={{height:30,marginTop:5}}  onPress={() => {setParametrs({arabic:'false'}); onChangeLang({lang:'en'});}} >
                  <Text style={[styles.english, parametrs.langValue=='ar' ? styles.langOpacity : null ]}>English </Text>
                </TouchableOpacity>
                <Text style={{color:'white',height:20}}> — </Text>
                <TouchableOpacity style={{height:30}} onPress={() => {setParametrs({arabic:'true'}); onChangeLang({lang:'ar'});}}   >
                  <Text style={[styles.arabic, parametrs.langValue=='en' ? styles.langOpacity : null ]}>عربي</Text>
                </TouchableOpacity>
            </View> 
            
          </KeyboardAvoidingView>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#293155',
    justifyContent:'center',
    
  },
  langChoise:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:'15%',
    alignItems:'center',
    alignSelf:'center',
  },
  english:{
    color:'white',
    fontSize:17
  },
  arabic:{
    color:'white',
    fontSize:18
  },
  langOpacity:{
    opacity:0.4
  }
});

export default LoginScreen;

