import React, { useState } from 'react';
import {
    View, Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Button,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';


function WalletScreen({ userdata }) {
    const navigation = useNavigation();

    const [currentbalance, setCurrentBalance] = useState('80000');
    const userid = userdata.userid;
    const username = userdata.username;
    const userphonenumber = userdata.phonenumber



    const handleShopNow = () => {
        console.log("i got you here -Dwallet to Shop")
        navigation.navigate("Shop")
        // navigation.reset({

        //     routes: [{ name: 'ShopStore' }],
        // });

    }


    return (

        <SafeAreaView style={styles.allbody}>
            <View style={styles.walletheader}>


                <Text style={styles.profileText}>Account ID : {userid} </Text>
                <Text style={styles.profileText}>Account Holder Name : {username} </Text>
                <Text style={styles.profileText}>Phonenumber : {userphonenumber} </Text>
                <Text style={styles.balance}>Your Balance : {currentbalance} </Text>

                <Image style={styles.profile_img}
                    source={require('../assets/me.jpg')}
                />

            </View>



            <Button
                style={styles.btnshop}
                title="View transactions"
                color="red"
                accessibilityLabel="Learn more about this purple button"
            />


            <View style={styles.tskcontainer}>
                <TouchableOpacity
                    style={styles.task1shop}
                    onPress={handleShopNow}>
                    <Image
                        style={styles.button_img}
                        source={require("../assets/shop.png")}
                    >
                    </Image>
                    {/* <Text style={styles.shoptxt}>Shop </Text> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.tsktransfer}>
                    <Image
                        style={styles.button_img}
                        source={require("../assets/transfer2.png")}
                    >
                    </Image>

                    {/* <Text style={styles.shoptxt}>Transfer </Text> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.tskwithdraw}>
                    <Image
                        style={styles.button_img}
                        source={require("../assets/withdraw1.png")}
                    >
                    </Image>

                    {/* <Text style={styles.shoptxt}>WithDraw </Text> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.tskrecharge}>
                    <Image
                        style={styles.button_img}
                        source={require("../assets/recharge.png")}
                    >
                    </Image>
                    {/* <Text style={styles.shoptxt}>Recharge </Text> */}
                </TouchableOpacity>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    allbody: {
        flex: 1,
        backgroundColor: 'green',
        height: "15%",
        width: "100%",
        top: "5%",


    },
    walletheader: {
        backgroundColor: '#475FFF80',
        width: '100%',
        height: '17%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: "flex-start",
        alignItems: 'flex-end'

    },
    balance: {

        alignSelf: "auto",
        top: "25%",
        fontSize: 20,
        color: 'purple',
        backgroundColor: 'green',
        borderRadius: 20,
        width: "59%",
        textAlign: "center"

    },
    profileText: {

        top: "10%",
        fontSize: 12,
        color: 'black',
        alignSelf: "flex-start",
        left: '47%'
    },
    profile_img: {
        right: "60%",
        bottom: 75,
        height: "100%",
        width: '50%'
    },



    task1shop: {
        top: '5%',
        backgroundColor: '#BCA9F5',
        borderRadius: 5,
        height: '15%',
        alignItems: 'center',

        justifyContent: 'center'

    },
    shoptxt: {
        fontSize: 20,
        color: 'white',


    },
    tsktransfer: {
        top: '10%',
        backgroundColor: '#FA58F4',
        borderRadius: 5,
        height: '15%',
        alignItems: 'center',

        justifyContent: 'center'
    },
    tskwithdraw: {
        top: '15%',
        backgroundColor: '#2ECCFA',
        borderRadius: 5,
        height: '15%',
        alignItems: 'center',

        justifyContent: 'center'
    },
    tskrecharge: {
        top: '20%',
        backgroundColor: '#8258FA',
        borderRadius: 5,
        height: '15%',
        alignItems: 'center',

        justifyContent: 'center'
    },
    tskcontainer: {
        flex: 1,
        backgroundColor: "grey",
        margin: 2,
        justifyContent: 'flex-start',

    },
    button_img: {
        top: 5,
        height: 90,
        width: "90%",
        borderRadius: 20
    }


})


export default WalletScreen;