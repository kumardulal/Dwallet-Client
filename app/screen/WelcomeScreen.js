import React, { useState, useEffect, Component } from 'react';
import { ImageBackground, TextInput, View, Image, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Axios from 'axios';
import ApiAddress from '../components/requests/ApiAddress';



function WelcomeScreen({ navigation }) {
    let pagetitle = "Welcome People!";
    let pagedesc = "Buy and sell anything with D-Wallet";
    const [username, setusername] = useState();
    const [password, setpassword] = useState();


    const onclickLogin = () => {


        Axios.post(`${ApiAddress.httpaddress}/api/welcomescreen/logintask`, {
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
                const data = { 'userid': userid, 'username': username, 'phonenumber': phonenumber }
                navigation.navigate({
                    name: 'HomeScreenNav',
                    params: { data: data }, //here if I pass data as something different name the way i get this data in another file might not accept
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

            <View style={{ flexDirection: "column", width: "95%", margin: 5 }}>
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
            </View>
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
        borderRadius: 10,
        bottom: 5,
        alignItems: "center",
        justifyContent: "center"

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
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
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
        borderRadius: 10,


    },
    inputpassword: {
        width: "95%",
        height: 60,
        margin: 12,
        borderWidth: 2,
        backgroundColor: "white",
        textAlign: 'center',
        borderRadius: 10,

    },
    newview: {
        flex: 1,
        backgroundColor: "red",
    },

})
export default WelcomeScreen;


