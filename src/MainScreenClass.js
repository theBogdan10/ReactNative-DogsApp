import React, {useState,useEffect,useReducer, useLayoutEffect} from 'react';
import {TouchableOpacity, Text, TextInput,StyleSheet,Image, View, Button } from 'react-native' ;
import I18n from './i18';


class MainScreenClass extends React.Component{
  constructor(props){
    super(props);
    const {navigate} = props.navigation;
    this.state={
      value:3,
      imgUrl:''
    }
  }


  componentWillMount(){
    setTimeout(()=>{
      fetch('https://dog.ceo/api/breeds/image/random')
        .then( res => res.json())
        .then( data => {
          this.setState({imgUrl:data.message})
        })
    },this.state.value*1000)
  }

  

   
  render(){
    return(
      <View style={styles.container}>
        <View style={{width:'80%'}}>
          <View style={{alignItems:'center',marginTop:'20%'}}>
            <Image style={styles.img} source={{uri:`${this.state.imgUrl}`}} />
          </View>
          <Text style={styles.updateText}>{I18n.t('mainScreen.updateTime')}</Text>
          <TextInput placeholder={I18n.t('mainScreen.valuePlaceholder')} style={styles.input} onChangeText={(numb)=>this.setState({value:numb})} value={this.state.value}  />
          <View >
            <TouchableOpacity style={styles.exit} onPress={()=>navigate('Login')} >
              <Text style={{color:'black'}}>{I18n.t('mainScreen.exit')} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );  
  }    
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#293155',
  },
  input:{
    width:'30%',
    color:'white',
    marginTop:'10%',
    borderBottomColor: '#EBEDE8',
    borderBottomWidth: 1.5,
    fontSize:17,
    alignSelf:'center',
    marginBottom:'15%'
  },
  img:{
    width:'100%',
    height:350,
    borderRadius:10,
   
  },
  exit:{
    height:40,
    backgroundColor:'#5ED1BA',
    width:'50%',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    opacity:0.8
  },
  updateText:{
    alignSelf:'center',
    color:'white',
    fontSize:18,
    marginTop:'15%'
  }
})

export default MainScreenClass;