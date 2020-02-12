import React, { useState } from 'react';
import {TextInput, View,TouchableOpacity,Text, Alert} from 'react-native';
import I18n from './i18';
import styles from './UserFormStyle';


export const UserForm = (props) =>{

  const [focus,setFocus]=useState({name:false,password:false});
  const [name,setName] = useState('');
  const [passw,setPassw] = useState('');
  const {navigate} = props.navigation;

  const NAME_REGEX = /^[a-zA-Z]+$/;
  const PASSWORD_REGEX = /^[a-zA-Z0-9]+$/;
  const ARABIC_REGEX=/[\u0600-\u06FF]/;

  const validaton = () => {
      switch(props.lang){
        case 'en':{
            if ( NAME_REGEX.test(name)==true && PASSWORD_REGEX.test(passw)==true){
              navigate('Main')
              setName('');
              setPassw('');
            }
            else{
              Alert.alert(`${I18n.t('loginScreen.error')}`, `${I18n.t('loginScreen.messageError')}`,
              [ 
                {text: I18n.t('loginScreen.ok') },
              ],
              {cancelable: false},
              )}
          };
        break;
        case 'ar':{
            if ( (ARABIC_REGEX.test(name)==true  || NAME_REGEX.test(name)==true) && (ARABIC_REGEX.test(passw)==true || PASSWORD_REGEX.test(passw)))
            {
              navigate('Main')
              setName('');
              setPassw('');
            }
            else{
              Alert.alert(`${I18n.t('loginScreen.error')}`, `${I18n.t('loginScreen.messageError')}`,
              [
                {text: I18n.t('loginScreen.ok')},
              ],
              {cancelable: false},
              )}
        };
        break;
      };
    }

    return(
        <View style={styles.container}>
            <View>
              <TextInput  onFocus={()=>setFocus({name:true})} 
                          onEndEditing={()=>{setFocus({name:false})}}
                          style={[styles.input, focus.name ? styles.focus : styles.unfocus]} 
                          placeholder={I18n.t('loginScreen.inputName')} 
                          onChangeText={(text) => setName(text)}
                          value={name}
                          placeholderTextColor='white'
                          maxLength={40}
              />
              <TextInput  secureTextEntry={props.parametrs.arabic=='true' ? false : true}
                          onFocus={()=>{setFocus({password:true})} }
                          onEndEditing={()=>setFocus({password:false})}
                          style={[styles.input, focus.password ? styles.focus : styles.unfocus]} 
                          placeholder={I18n.t('loginScreen.inputPassw')}
                          onChangeText={(text) => setPassw(text)}
                          value={passw}
                          placeholderTextColor='white'
                          maxLength={40}
              />
            </View>
            <View>
              <View style={styles.forgotPassword}>
                  <TouchableOpacity>
                      <Text style={styles.text}>{I18n.t('loginScreen.passwForget')} </Text>
                  </TouchableOpacity>
              </View>
              <View style={{marginBottom:'5%',marginTop:'5%'}}>
                  <TouchableOpacity style={[styles.signIn]}
                                    onPress={()=> validaton() } >
                      <Text style={{color:'white'}}>{I18n.t('loginScreen.signIn')} </Text>
                  </TouchableOpacity>
              </View>
              <View>
                  <TouchableOpacity style={styles.signUp} >
                      <Text style={{color:'white'}}  >{I18n.t('loginScreen.signUp')} </Text>
                  </TouchableOpacity>
              </View>
            </View>
        </View>
    );
}
