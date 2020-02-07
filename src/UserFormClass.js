import React, { useState } from 'react';
import { StyleSheet, TextInput, View,TouchableOpacity,Text, Alert } from 'react-native';
import I18n from './i18';
import styles from './userFormStyle';

export const UserForm = (props) =>{

    const [name, setName] = useState('');
    const [password,setPassword]=useState('');
    const [focus,setFocus]=useState({name:false,password:false});

    const [valuesValidate,setValuesValidate]=useState({nameValidate:true,passwordValidate:true})

    const {navigate} = props.navigation;


    const validate=(inp,type)=>{

    const userN=/^[a-zA-z]+$/;
    const passW=/^[a-zA-z0-9]+$/;

    switch(type){
      case 'name':{
        if(userN.test(inp)){
          setValuesValidate({nameValidate:true});
          setName(inp);

          
        }
        else{
          setValuesValidate({nameValidate:false})
        }
      };
      break;

      case 'password':{
        if(passW.test(inp)){
          setValuesValidate({passwordValidate:true});
          setPassword(inp)
        }
        else{
          setValuesValidate({passwordValidate:false});
        }
      };
      break;
    }
}

    return(
        <View style={styles.container}>
            <View>
              <TextInput  onFocus={()=>setFocus({name:true})} 
                          onEndEditing={()=>setFocus({name:false})}
                          style={[styles.input, !valuesValidate.nameValidate ? styles.error : null, focus.name ? styles.focus : styles.unfocus]} 
                          placeholder={I18n.t('loginScreen.inputName')} 
                          onChangeText={(text) => validate(text,'name')}
                          value={name}
                          clearTextOnFocus={true}
              />
              <TextInput  secureTextEntry 
                          onFocus={()=>setFocus({password:true})} 
                          onEndEditing={()=>setFocus({password:false})}
                          style={[styles.input, !valuesValidate.passwordValidate ? styles.error : null, focus.password ? styles.focus : styles.unfocus]} 
                          placeholder={I18n.t('loginScreen.inputPassw')} 
                          onChangeText={(text) => validate(text,'password')}
                          value={password}

            />
            </View>
            <View>
              <View style={[styles.frgt, props.parametrs.arabic=='true' ? 'row-reverse' : null]}>
                  <TouchableOpacity>
                      <Text style={styles.text}>{I18n.t('loginScreen.passwForget')} </Text>
                  </TouchableOpacity>
              </View>

              <View style={{marginBottom:'5%',marginTop:'5%'}}>
                  <TouchableOpacity style={[styles.signIn, props.parametrs.arabic=='true' ? 'row-reverse' : null]}
                                    onPress={()=>{ 
                                    name == '' || password == '' ? Alert.alert(`${I18n.t('loginScreen.error')}`, `${I18n.t('loginScreen.messageError')}`,
                                    [
                                      {text: I18n.t('loginScreen.ok'), onPress: () => console.log('OK Pressed')},
                                    ],
                                    {cancelable: false},
                                )
                                : navigate('Main')}} >

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
