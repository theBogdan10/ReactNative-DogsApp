import React, {useState,useEffect} from 'react';
import {TouchableOpacity, Text,StyleSheet,Image, View,ScrollView,Slider} from 'react-native' ;
import I18n from './i18';


const MainScreen = (props) =>{

  const [value, setValue] = useState(3);
  const [imgUrl,setImgUrl] = useState();
  const {navigate} = props.navigation;
  
  useEffect( () => {
    const valueCopy=value;
    const timer=setInterval(()=>{
      fetch('https://dog.ceo/api/breeds/image/random')
        .then( responce => responce.json())
        .then( data => {
          setImgUrl(data.message)
        })
    },valueCopy*1000)

    return ()=>clearInterval(timer);
  });
    
    return(
      <View style={styles.container}>
        <View style={{width:'80%'}}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='always'>

          <View style={{alignItems:'center',marginTop:'20%'}}>
            <Image style={styles.img} source={{uri:`${imgUrl}`}} />
          </View>

          <Text style={styles.updateText}>{I18n.t('mainScreen.updateTime')}</Text>

          <View style={{alignItems:'center',marginTop:'5%'}}>
            <Text style={{color:'white',fontSize:17}}>{value}</Text>
            <Slider
                    style={{width:'100%',height: 70}}
                    step={1}
                    minimumValue={1}
                    maximumValue={60}
                    minimumTrackTintColor='#d23366'
                    maximumTrackTintColor='white'
                    value={value}
                    onValueChange={(sliderValue)=>setValue(sliderValue)}        
            />
          </View>

          <View >
            <TouchableOpacity style={styles.exit} onPress={()=>navigate('Login')} >
              <Text style={{color:'black'}}>{I18n.t('mainScreen.exit')} </Text>
            </TouchableOpacity>
          </View>

          </ScrollView>
        </View>
      </View>
    )  
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#293155',
  },
  img:{
    width:'100%',
    height:350,
    borderRadius:10,
  },
  exit:{
    height:50,
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
});

export default MainScreen;