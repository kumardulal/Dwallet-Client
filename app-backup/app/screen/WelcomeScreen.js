import React, { useState, useEffect, Component } from 'react';
import { ImageBackground, TextInput, View, Image, StyleSheet, Text, TouchableOpacity, Button, NativeModules, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Axios from 'axios';
import HomeScreenNav from '../components/HomeScreenNav';


function WelcomeScreen({ navigation }) {
    let pagetitle = "Welcome People!";
    let pagedesc = "Buy and sell anything with D-Wallet";
    const [username, setusername] = useState();
    const [password, setpassword] = useState();


    const onclickLogin = () => {

        Axios.post("http://192.168.254.102:8000/api/welcomescreen/logintask", {
            username: username,
            password: password,

        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);


            }

            else {
                // handle success
                /// declaring the values of api responnse data of user to send it as props to other child routes .
                const userid = response.data[0].userid;
                const username = response.data[0].username;
                const phonenumber = response.data[0].phonenumber;
                const data = { 'id': userid, 'username': username, 'phonenumber': phonenumber }
                navigation.navigate({
                    name: 'HomeScreenNav',
                    params: { data: data },
                    merge: true,
                });
            }

        }).catch(error => console.log(error));
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg2.jpg")}

        >

            <View style={styles.logocontainer} >
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}
                />
                <Text style={styles.titletext} >{pagetitle}</Text>
                <Text style={styles.desctext} >{pagedesc}</Text>

            </View>
            <TextInput
                onChangeText={setusername}

                placeholder="username"

                style={styles.inputusername} />
            <TextInput
                onChangeText={setpassword}

                placeholder="Password"
                secureTextEntry


                style={styles.inputpassword} />


            <TouchableOpacity

                onPress={onclickLogin}
                style={styles.loginbtn}
            >
                <View  >
                    <Text style={styles.logintext}>
                        Login
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.signup}
                onPress={() => navigation.navigate("RegistrationScreen")}>
                <View
                >
                    <Text
                        style={styles.signuptext}
                    >
                        SignUp
                    </Text>
                </View>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );

    // function loginbtnhandler() {
    //     console.log("listening")
    //     this.props.navigation.navigate('Home')

    // }
}

// stylesheet?????????????????????????????????????????????????????????????????????????????????????
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    loginbtn: {
        width: '100%',
        height: 70,
        backgroundColor: '#00bfff',

    },
    logintext: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffd11a'
    },
    signup: {
        width: '100%',
        height: 70,
        backgroundColor: '#1a1aff',
    },
    signuptext: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffd11a'

    },
    logo: {

        // bottom: "55%",
        width: '100%',
        height: 100,
        position: "absolute",

    },
    logocontainer: {
        position: "absolute",
        width: "100%",
        top: 1,
    },

    titletext: {
        top: "110%",
        fontSize: 35,
        textAlign: 'center',
        color: "#1a0000",
        fontWeight: 'bold',

    },
    desctext: {
        top: "110%",
        fontSize: 35,
        textAlign: 'center',
        color: "#ffcc00",
        fontWeight: 'bold',

    },
    inputusername: {
        width: "95%",
        height: 60,
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        textAlign: 'center',


    },
    inputpassword: {
        width: "95%",
        height: 60,
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        textAlign: 'center',

    },
    newview: {
        flex: 1,
        backgroundColor: "red",
    },

})
export default WelcomeScreen;


