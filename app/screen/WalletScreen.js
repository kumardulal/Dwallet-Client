import React, { useState } from 'react';
import {
    View, Image,
    StyleSheet,
    Text,
    TouchableOpacity,


} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../components/collections/Colors';
import YourOrderBtn from '../components/modal/YourOrderBtn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


function WalletScreen({ userdata }) {
    const navigation = useNavigation();

    const [currentbalance, setCurrentBalance] = useState('80000');
    const userid = userdata.userid;
    const username = userdata.username;
    const userphonenumber = userdata.phonenumber

    const transferIcon = <MaterialCommunityIcons name="transfer" size={60} color={COLORS.primaryWall} />
    const withdrawIcon = <FontAwesome5 name="cash-register" size={50} color={COLORS.primaryWall} />
    const rechargeIcon = <MaterialCommunityIcons name="cash-plus" size={80} color={COLORS.primaryWall} />


    const handleShopNow = () => {
        console.log("i got you here -Dwallet to Shop")
        navigation.navigate("Shop")
        // navigation.reset({

        //     routes: [{ name: 'ShopStore' }],
        // });

    }


    return (

        <View style={styles.allbody}>
            <View style={styles.walletheader}>
                <Image style={styles.profile_img}
                    source={require('../assets/me.jpg')}
                />
                <View style={{ display: "flex", flexDirection: "column" }}>

                    <Text style={styles.profileText}>Account ID : {userid} </Text>
                    <Text style={styles.profileText}>Account Holder Name : {username} </Text>
                    <Text style={styles.profileText}>Phonenumber : {userphonenumber} </Text>
                    <Text style={styles.balance}>Your Balance : {currentbalance} </Text>
                </View>



            </View>


            <TouchableOpacity style={{ backgroundColor: COLORS.yellow, height: 40, display: "flex", justifyContent: "center", alignItems: "center" }} >
                <Text style={{ textAlign: "center", fontSize: 20 }}>View transaction</Text>
            </TouchableOpacity>


            <View style={styles.tskcontainer}>
                <View style={styles.tasksbg}>
                    <TouchableOpacity
                        onPress={handleShopNow}>
                        <Image
                            style={styles.button_imgShop}
                            source={require("../assets/shop.png")}
                        >
                        </Image>
                    </TouchableOpacity>

                    {/* Button componet is made for the Your Orders btn */}
                    <YourOrderBtn navigation={navigation} />

                </View>
                {/* //////////////////////////////////////////////////Transfer and withdraw container */}
                <View style={styles.tasksbg2}>

                    <TouchableOpacity>
                        <View style={styles.cenering}>
                            {transferIcon}
                            <Text style={styles.fonttran_width}>TRANSER BALANCE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.cenering}>
                            {withdrawIcon}
                            <Text style={styles.fonttran_width}>WITHDRAW </Text>
                        </View>

                    </TouchableOpacity>

                </View>
                {/* Recharge Wallet - container starts */}
                <View style={styles.tasksbg2}>
                    <TouchableOpacity style={styles.cenering}>
                        {rechargeIcon}
                        <Text style={styles.fonttran_width}>RECHARGE WALLET</Text>
                    </TouchableOpacity>


                </View>
                <View style={{}}>
                    <View style={styles.messageReport}>
                        <TouchableOpacity>
                            <Text style={styles.btnsMsgRep}>REPORT PROBLEM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.btnsMsgRep}>HELP !</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
            <StatusBar style="dark" />
        </View>
    );
}
const styles = StyleSheet.create({
    allbody: {
        flex: 1,
        backgroundColor: COLORS.lightbluebtn,
        height: "100%",
        width: "100%",


    },
    walletheader: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        height: "16%",
        justifyContent: "space-around"

    },
    balance: {

        fontSize: 20,
        color: 'purple',
        backgroundColor: COLORS.new1,
        marginRight: 5,
        width: "100%",
        textAlign: "center",


    },
    profileText: {


        fontSize: 12,
        color: 'black',

    },
    profile_img: {

        height: 110,
        width: 140,
        borderRadius: 20,
        borderTopRightRadius: 50,
        maxWidth: 300,
    },

    tasksbg: {

        backgroundColor: COLORS.bgtheme1,
        borderRadius: 5,
        height: '15%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        margin: 2

    },
    tasksbg2: {
        backgroundColor: COLORS.primaryWall,
        borderRadius: 5,
        height: '31%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-around',
        margin: 2,


    },

    tskcontainer: {
        flex: 1,
        margin: 3,

        // justifyContent: 'space-around',


    },
    button_imgShop: {

        height: 40,
        width: 156,
        borderRadius: 10
    },
    button_img: {

        height: 90,
        width: 160,
        borderRadius: 10
    },

    fonttran_width: {
        fontWeight: "bold",
        fontSize: 18,
        color: COLORS.primaryWall
    },
    cenering: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.new1,
        padding: 10,
        borderRadius: 10,


    },
    messageReport: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",

    },
    btnsMsgRep: {
        backgroundColor: COLORS.iphoneWhite,
        fontSize: 14,
        padding: 10,
        borderRadius: 5,
        color: COLORS.dark,
        width: 150,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "20%"
    },




})


export default WalletScreen;