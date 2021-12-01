import React, { useState, useRef } from 'react';
import { Animated, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

// mga tab icons 
import ride from '../assets/images/ride.png';
import home from '../assets/images/home.png';
import search from '../assets/images/search.png';
import notification from '../assets/images/notification.png';
import settings from '../assets/images/settings.png';
import logout from '../assets/images/logout.png';
import order from '../assets/images/order.png';
// menu icon
import menu from '../assets/images/menu.png';
import close from '../assets/images/close.png';

import photo from '../assets/images/photo1.png';


export default function Profile() {
    const [ currentTab, setCurrentTab ] = useState("Home");
    // para pagkukuha ht current status tat menu
    const [ showMenu, setShowMenu ] = useState(false);

    const offsetValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'flex-start', padding: 10 }}>
                <Image source={ride} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 10
                }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
                marginTop: 10
            }}>Lebron James</Text>

            <TouchableOpacity>
                <Text style={{
               marginTop: 4,
               color: 'white',
            }}>View Profile</Text>
            </TouchableOpacity>

             <View style={{ flexGrow: 1, marginTop: 50 }}>
                 {
                     // tab bar buttons
                 }

                {TabButton(currentTab,setCurrentTab,"Home",home)}
                {TabButton(currentTab,setCurrentTab,"Orders",order)}
                {TabButton(currentTab,setCurrentTab,"Search",search)}
                {TabButton(currentTab,setCurrentTab,"Notification",notification)}
                {TabButton(currentTab,setCurrentTab,"Settings",settings)}
             </View>

                 <View>
                     {TabButton(currentTab,setCurrentTab,"Logout",logout)}
                 </View>

            </View>

            {
                //overlay view
            }

            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: '#DCDCDC',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                paddingHorizontal: 15,
                paddingVertical: 20,
                borderRadius: showMenu ? 15 : 0,
                //para pag tra transform ht view
                transform: [
                    { scale: scaleValue },
                    { translateX: offsetValue }
                ]
            }}>

                {
                    //para menu area
                }

                <Animated.View style={{
                    transform: [{
                        translateY: closeButtonOffset
                    }]
                }}>
                <TouchableOpacity onPress={() => {
                    Animated.timing(scaleValue, {
                        toValue: showMenu ? 1 : 0.88,
                        duration: 300,
                        useNativeDriver: true
                    })
                    .start()

                    Animated.timing(offsetValue, {
                        toValue: showMenu ? 0 : 230,
                        duration: 300,
                        useNativeDriver: true
                    })
                    .start()

                    Animated.timing(closeButtonOffset, {
                        // YOur Random Value...
                        toValue: !showMenu ? -30 : 0,
                        duration: 300,
                        useNativeDriver: true
                      })
                        .start()

                    setShowMenu(!showMenu);
                }}>

                    <Image source={showMenu ? close : menu} style={{
                        width: 30,
                        height: 30,
//                      tintColor: 'black',
                        marginTop: 13, 
                    }}></Image>

                </TouchableOpacity>
                <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'black',
                        paddingTop: 5
                    }}>{currentTab}</Text>
                    
                    <Image source={photo} style={{
                        width: '80%',
                        height: 250,
                        borderRadius: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 50
                        
                    }}></Image>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingTop: 15,
                        paddingBottom: 5
                    }}>Benjamin Hemmings</Text>

                    <Text style={{
                    }}>Techie, Youtube, PS Lover, Apple Addict</Text>

                </Animated.View>

            </Animated.View>

        </SafeAreaView>    
    );
}

// para ha damo na buttons
const TabButton = ( currentTab, setCurrentTab, title, image, navigation ) => {
    return (
        <TouchableOpacity onPress={() => {
            if(title == "Logout") {
                // alams na
            } else {
                setCurrentTab(title)
            }
        }}>
        
        <View style={{
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 8,
            backgroundColor: currentTab == title ? '#A9A9A9' : 'transparent',
            paddingLeft: 13,
            paddingRight: 35,
            borderRadius: 8
        }}>
            <Image source={image} style={{
                width: 25, height: 25,
             //   tintColor: currentTab == title ? "#fff" : "#808080"
            }}></Image>

            <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                paddingLeft: 15,
              // color: currentTab == title ? "#fff" : "#808080"
            }}>{title}</Text>

         </View>
      
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
   	backgroundColor: "#c5c5c5",
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
   },
 });
