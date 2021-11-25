import React, { useState } from 'react';
import {
    View, Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,

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

    const transferIcon = <MaterialCommunityIcons name="transfer" size={60} color={COLORS.iphoneWhite} />
    const withdrawIcon = <FontAwesome5 name="cash-register" size={50} color={COLORS.iphoneWhite} />
    const rechargeIcon = <MaterialCommunityIcons name="cash-plus" size={80} color={COLORS.iphoneWhite} />


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

                <View></View>
                <Text style={styles.profileText}>Account ID : {userid} </Text>
                <Text style={styles.profileText}>Account Holder Name : {username} </Text>
                <Text style={styles.profileText}>Phonenumber : {userphonenumber} </Text>
                <Text style={styles.balance}>Your Balance : {currentbalance} </Text>

                <Image style={styles.profile_img}
                    source={require('../assets/me.jpg')}
                />

            </View>

            <Button

                title="View transactions"
                color={COLORS.green}
                accessibilityLabel="Learn more about this purple button"
            />


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
                            <Text style={styles.fonttran_width}>Withdraw</Text>
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
                    <TouchableOpacity style={styles.messageReport}>
                        <Text style={styles.btnsMsgRep}>REPORT</Text>
                        <Text style={styles.btnsMsgRep}>Message</Text>
                    </TouchableOpacity>


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
        paddingTop: 40,
        backgroundColor: "#008080",
        width: '100%',
        height: '24%',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: "space-between",
        alignItems: 'flex-end',
        maxWidth: 600

    },
    balance: {
        alignSelf: "auto",
        top: "20%",
        fontSize: 20,
        color: 'purple',
        backgroundColor: 'green',
        marginRight: 5,
        width: "62%",
        textAlign: "center",


    },
    profileText: {

        top: "10%",
        fontSize: 12,
        color: 'black',
        alignSelf: "flex-start",
        left: '47%'
    },
    profile_img: {
        right: "66%",
        bottom: 60,
        height: 90,
        width: 120,
        borderRadius: 20,
        borderTopRightRadius: 50,
        maxWidth: 300,
    },

    tasksbg: {

        backgroundColor: COLORS.primaryWall,
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
        fontSize: 20,
        color: COLORS.lightblue
    },
    cenering: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightbluebtn,
        padding: 10,
        borderRadius: 10,
        opacity: 0.5,

    },
    messageReport: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        opacity: 0.6
    },
    btnsMsgRep: {
        backgroundColor: COLORS.bgtheme1,
        fontSize: 20,
        padding: 10,
        borderRadius: 5,
        color: COLORS.white,
        width: "45%",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "5%"
    }



})


export default WalletScreen;