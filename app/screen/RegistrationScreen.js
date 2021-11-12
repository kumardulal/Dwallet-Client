import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ImagePicker from '../components/ImagePicker'
import axios from 'axios';
import ApiAddress from '../components/requests/ApiAddress';

export default function RegistrationScreen({ navigation }) {
    const [username, setusername] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [password, setpassword] = useState("");
    const [passwordconfirm, setpasswordconfirm] = useState("");
    const [updateimage, setupdateimage] = useState("");


    // const onclickRegistration = () => {
    //     axios.post("http://localhost:3001/api/signup", {
    //         username: username,
    //         phonenumber: phonenumber,
    //         password: password
    //     }).then(() => {
    //         console.log("username:", username)
    //         console.log("username:", phonenumber)
    //         console.log("username:", password)
    //         navigation.navigate("WelcomeScreen")
    //     }).catch(Error)

    // }



    const onclickRegistration = () => {
        if (password === passwordconfirm) {
            console.log("This is it ", updateimage)

            axios.post(`${ApiAddress.httpaddress}/api/post/usersignup`, {
                username: username,
                phonenumber: phonenumber,
                password: password,


            })
                .then(function (response) {
                    // handle success
                    navigation.navigate("WelcomeScreen")
                    alert("signup successfull.You can login to proceed");
                    // alert(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    // handle error
                    console.log(error)
                    console.log(error.message)
                    alert(error.message);
                });
        }
        else {
            alert("password confirmation failed.try again")
        }
    };


    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={require('../assets/me.jpg')}
                style={{ width: "100%", height: "25%" }}
            />
            <Text
                style={{
                    fontSize: 30,

                    alignSelf: "center",
                }}
            >Register to Wallet
            </Text>

            <Text
                style={{
                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 10,
                    opacity: 0.4
                }}
            >
                You can buy and sell any products via D-wallet
            </Text>


            <View style={styles.registerstart}>
                {/* username/email input ######################################## */}
                <TextInput
                    onChangeText={setusername}
                    value={username}
                    placeholder="Email"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 5, width: '100%' }}
                />

            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,

                marginTop: 10,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                {/* PHONE NUMBER input ######################################## */}
                <TextInput
                    onChangeText={setphonenumber}
                    value={phonenumber}
                    placeholder="Phone Number"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 5, width: '100%' }}
                />

            </View>


            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                {/* Password  input ######################################## */}
                <TextInput
                    onChangeText={setpassword}
                    value={password}
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10, width: '100%' }}
                />
            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2
            }}>
                {/*Confirm Password  input ######################################## */}
                <TextInput
                    onChangeText={setpasswordconfirm}
                    value={passwordconfirm}
                    secureTextEntry
                    placeholder="Confirm Password"
                    placeholderTextColor="#00716F"
                    style={{ paddingHorizontal: 10, width: '100%' }}
                />

            </View>
            {/*Upload image ######################################## */}
            <View style={styles.imageupload}>
                <><ImagePicker setupdateimage={setupdateimage} />
                </>
            </View>

            {/* SIGNUP Button ######################################## */}
            <TouchableOpacity
                onPress={onclickRegistration}
                style={{
                    marginHorizontal: 55,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 30,
                    backgroundColor: "#00716F",
                    paddingVertical: 10,
                    borderRadius: 23
                }}>
                <Text style={{
                    color: "white",

                }}>Register</Text>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    registerstart: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 55,
        borderWidth: 2,

        marginTop: "3%",
        paddingHorizontal: 10,
        borderColor: "#00716F",
        borderRadius: 23,
        paddingVertical: 2
    },
    imageupload: {
        height: 150,

    }
})




