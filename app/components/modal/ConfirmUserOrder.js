import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput, BackHandler } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import LinkWalletValidation from './LinkWalletValidation';
import ButtonsTextName from '../collections/ButtonsTextName';

export default function ConfirmUserOrder({ setModalVisible, userdata, setConfirmedStatus, setConfirmFinishbtn }) {
    const username = userdata.username;
    const navigation = useNavigation();
    const [walletPassword, setWalletPassword] = useState("")

    useEffect(() => {
        console.log(walletPassword)
    })

    const handleConfirmWalletPass = () => {
        // confirm if the link wallet validatin is success
        // console.log("after onclick", walletPassword, userid)
        LinkWalletValidation(username, walletPassword, { setConfirmedStatus }, { setModalVisible }, { setConfirmFinishbtn })

    }

    const handlecancel = () => {
        console.log("cancel")
        // setConfiremOrderModel(styles.modalmainNotVisible)
        setConfirmFinishbtn(ButtonsTextName.LinkWallet)
        setModalVisible(false)


    }
    return (
        <View style={styles.modalmain}>

            <View style={styles.secondbox}>
                <Text style={{ color: "green", fontWeight: "bold" }}>Security Check</Text>

                <TextInput
                    onChangeText={setWalletPassword}

                    placeholder="Wallet Password"
                    secureTextEntry
                    placeholderTextColor="#00716F"
                    style={styles.textinput}
                />
                <View style={{ display: 'flex', justifyContent: "space-around", flexDirection: "row", width: "100%", top: 10 }}>
                    <TouchableOpacity onPress={handlecancel}
                        style={styles.btns}>
                        <Text>Cancel</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleConfirmWalletPass}
                        style={styles.btns}>
                        <Text>Confirm</Text>
                    </TouchableOpacity>

                </View>



                {/* <Text>user Username</Text>
                <Text>paSSWORD</Text> */}
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    modalmain: {
        height: 300,
        width: "100%",
        position: 'absolute',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 200
    },
    // modalmainNotVisible: {
    //     opacity: 0, height: 0
    // },
    secondbox: {
        width: "80%",
        backgroundColor: "#dce7f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 50,
        borderRadius: 25

    },

    textinput: {
        paddingHorizontal: 5,
        width: '100%',
        borderWidth: 2,
        height: 40,
        backgroundColor: "white",
        margin: 5,
        textAlign: "center"
    },
    btns: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10
    }
})
