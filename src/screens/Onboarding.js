import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Buttons from '../components/Buttons'


const Onboarding = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:Colors.white}} >
            <StatusBar barStyle="dark-content" backgroundColor="gray" />
            {/* handshake image */}
            <View style={{flex:3,flexDirection:"column",backgroundColor:'gray'}} >
                <ImageBackground source={require('../assets/images/sad.png')}
                style={{flex:1,width:'100%',backgroundColor:'gray'}}  />
            </View>

            {/* button and text */}
            <View style={{flex:2,backgroundColor:'gray'}} >
                {/* Text part */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'center',backgroundColor:'gray'}} >
                    <Text style={{fontFamily:'OpenSans-Bold',color:Colors.black,fontSize:30}} >HELLO</Text>
                    <Text style={{maxWidth:'50%', fontFamily:'OpenSans-Medium',color:"#000",fontSize:14, textAlign:'center',paddingTop:10}} >Alayon Offers Digitalized & Modern Solutions for Modern Problems</Text>
                </View>   

                {/* Button */}
                <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}} >
                    {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,marginBottom:30,borderRadius:10}} 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:Colors.white}} >Get Started</Text>


                    </TouchableOpacity> */}
                    <Buttons btn_text={"Get Started"} on_press={()=>navigation.navigate("Login")} />
                    
                    

                </View>

            </View>
            
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})
