import React, { useState, useEffect, Component } from 'react';
import { ImageBackground, TextInput, View, Image, StyleSheet, Text, TouchableOpacity, ColorPropType, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Axios from 'axios';
import ApiAddress from '../components/requests/ApiAddress';
import COLORS from '../components/collections/Colors';




function WelcomeScreen({ navigation }) {
    let pagetitle = "🧙🏻‍♀️Welcome Guys !!";
    let pagedesc = " We sell Tech Products and Gadgets ";
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
            source={require("../assets/bgwallet.png")}

        >

            <View style={styles.logocontainerPlusTitle} >
                <Image
                    style={styles.logo}
                    source={require("../assets/logo.png")}
                />

                <View>
                    <Text style={styles.titletext} >{pagetitle}</Text>
                    <Text style={styles.desctext} >{pagedesc}</Text>
                    <Text style={styles.desctext} >D-Wallet Makes your purchase easy</Text>
                    <Text style={styles.desctext} >Easy transfer,recharge and withdraw wallet balance</Text>
                    <Text style={styles.desctext} >Free delivery within Kathmandu</Text>
                    <Text style={styles.desctext} >Support Contact: 09564692647</Text>
                </View>



            </View>

            <View style={{ width: "100%" }}>
                <TextInput
                    onChangeText={setusername}

                    placeholder="username"

                    style={styles.inputusername} />
                <TextInput
                    onChangeText={setpassword}

                    placeholder="Password"
                    secureTextEntry


                    style={styles.inputpassword} />

                <View style={{ flexDirection: "column", width: "95%", margin: 5, }}>
                    <TouchableOpacity

                        onPress={onclickLogin}
                        style={styles.loginbtn}
                    >
                        <View  >
                            <Text style={styles.logintext}>
                                LOGIN
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
                                REGISTER
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 650
        // fontFamily: "impact"
    },

    loginbtn: {
        width: '100%',
        height: 55,
        backgroundColor: "lightblue",
        borderRadius: 10,
        bottom: 5,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.4


    },
    logintext: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.white
    },
    signup: {
        width: '100%',
        height: 55,
        backgroundColor: "lightblue",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.4
    },
    signuptext: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.light

    },
    logo: {


        width: '100%',
        height: 90,

        backgroundColor: COLORS.dark,
        opacity: 0.7,
        borderRadius: 5,

    },
    logocontainerPlusTitle: {
        display: "flex",
        justifyContent: "space-around",
        height: "55%",
        width: "99%",
        top: 40,
        maxWidth: 600






    },

    titletext: {
        // top: "110%",
        fontSize: 40,
        textAlign: "center",
        color: COLORS.white,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10


    },
    desctext: {
        // top: 260,
        fontSize: 17,
        width: "85%",
        maxWidth: 600,
        textAlign: "left",
        color: COLORS.yellow,
        fontWeight: 'bold',
        margin: 1,
        backgroundColor: COLORS.green,
        opacity: 0.5,
        padding: 8,
        borderTopRightRadius: 10,


    },
    inputusername: {
        width: "95%",
        height: 60,
        margin: 5,
        borderWidth: 2,
        backgroundColor: "white",
        textAlign: 'center',
        borderRadius: 10,


    },
    inputpassword: {
        width: "95%",
        height: 60,
        margin: 5,
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


