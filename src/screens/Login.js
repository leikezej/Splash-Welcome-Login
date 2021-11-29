import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'




const Login = () => {

    const [formData,setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff',paddingTop:10,paddingHorizontal:'3%'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',justifyContent:'center'}} >
                    <Image source={require('../assets/images/login.png')} style={{width:350,height:350}}  />
                </View>
               
                <View style={{flexDirection:'column',paddingTop:20,justifyContent:'center',alignItems:'center'}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="envelope-o" size={22} color="#000" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,email:text}))}} style={styles.input} placeholder="| Enter Email" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#000" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="| Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'95%',marginBottom:10}} >
                        <Text style={{fontSize:17,fontFamily:'OpenSans-SemiBold',
                    color:'#818181',alignSelf:'flex-end',paddingTop:10,justifyContent:'center',alignItems:'center'}} >Forgot Password?</Text>
                    </View>
                    <Buttons  btn_text={"Sign In"}  />
                </View>
            </View>

            {/* social login section */}
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%',justifyContent:'center',alignItems:'center'}} >
                <Text style={{fontFamily:"OpenSans-Bold",textAlign:'center',marginVertical:35,color:'#818181',fontSize:20}} >Or</Text>

                <View style={{flexDirection:'column',alignItems:'center',width:'95%'}} >
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/images/google_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Google </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>console.log("facebook login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Facebook </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff',marginBottom:40}} >
                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:17,color:'#818181'}} >Don't have an account? </Text>
                    <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Sign Up</Text>
                </View>
                 


            </View>
            
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
      
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:30,
        height:35,
        marginLeft:15,
    }
})
