import React,{useState} from 'react'
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import { NavigationContainer } from '@react-navigation/native'




const Register = ({navigation}) => {

    const [formData, setformData] = useState({
        email:'',
        password:''
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" backgroundColor="#c5c5c5" />
            {/* login form section */}
             <View style={{flex:2,flexDirection:'column',backgroundColor:'#c5c5c5',paddingTop:10,paddingHorizontal:'3%'}} >
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',justifyContent:'center'}} >
                    <Image source={require('../assets/images/login.png')} style={{width:350,height:350}}  />
                </View>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20,marginLeft:10}} >
                        <Icon name="user" size={22} color="#000" />
                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="| Full Name" secureTextEntry={true} placeholderTextColor="#818181" />
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

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'95%',borderRadius:10,height:60,paddingLeft:20,marginTop:20,marginBottom:20}} >
                        <Icon name="phone" size={22} color="#000" />

                        <TextInput onChangeText={(text)=>{setformData((prevState)=>({...prevState,password:text}))}} style={styles.input} placeholder="| Contact Number" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View> 
                            {/* <TouchableOpacity style={{justifyContent:'center',width:'90%',backgroundColor:Colors.primary,height:50,borderRadius:10,marginTop:40}} 
                    onPress={()=>navigation.navigate("Profile")}
                    >
                    </TouchableOpacity> */}
                    <Buttons btn_text={"Register"} on_press={()=>navigation.navigate("Profile")}/>
                </View>


                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-end',backgroundColor:'#fff', marginBottom:0}} >
                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:17,color:'#818181'}} >Already Have An Account </Text>
                    <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Login</Text>
                </View>

            </View>
            
        </ScrollView>
    )
}

export default Register

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
        borderColor:'blue',
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

