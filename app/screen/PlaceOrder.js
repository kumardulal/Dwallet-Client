import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ConfirmUserOrder from '../components/modal/ConfirmUserOrder';
import LinkWalletValidation from '../components/modal/LinkWalletValidation';
// import * as SMS from 'expo-sms';

export default function PlaceOrder({ navigation, route }) {
    const userdata = route.params?.userdata
    const orderItems = route.params?.orderItems
    const [userConfirmModel, setUserConfirmModel] = useState(<Blank />)
    const [confirmedStatus, setConfirmedStatus] = useState("Wallet Linked ❎")
    const [modalVisible, setModalVisible] = useState(false)
    const [confirmFinishbtn, setConfirmFinishbtn] = useState("Link Wallet")
    //this walletPassword is updated from the child function .so don't remove 
    const [walletPassword, setWalletPassword] = useState("")

    // this is for rendering the componet after click in confirm in model and place order
    useEffect(() => {

        if (modalVisible == false) {

            console.log("model was open: ", modalVisible)
            setUserConfirmModel(<Blank />)

            // setConfirmFinishbtn("Link Wallet")


        }
        else {
            console.log("model was open: ", modalVisible)
            //if the model is visible // pass some 
            setUserConfirmModel(<ConfirmUserOrder
                setModalVisible={setModalVisible}
                userdata={userdata}
                setConfirmedStatus={setConfirmedStatus}
                setConfirmFinishbtn={setConfirmFinishbtn}

            />)
            setConfirmFinishbtn("Finish")

        }


    }, [modalVisible])


    //empty component to render 
    function Blank() {
        return (
            <View style={{ height: 0 }}></View>
        )
    }



    const handleLinkWallet = () => {

        if (modalVisible == true) {
            if (confirmFinishbtn === "Finish") {
                // LinkWalletValidation()
                alert("This needs to evaluate and validate and say success")
            }
            else {
                setModalVisible(false)
                // LinkWalletValidation()
            }
            //this state change is detected by useEffect
            // setModalVisible(false)
            // alert("Validating transaction ")

        }
        else {
            //this state change is detected by useEffect
            // setModalVisible(true)
            if (confirmFinishbtn === "Done") {
                alert("Successfully Ordered -evelaution here")
            }

            else {
                setModalVisible(true)

            }

        }




    }

    const handleCancel = () => {
        console.log("go back")
        navigation.goBack()
    }




    return (
        <SafeAreaView style={styles.maincont}>
            <View>
                <Text style={styles.texttop}>CONFIRM ORDER</Text>
            </View>

            {/* all the orders data here inside scrollView  */}

            <ScrollView style={styles.itemsContainer}>
                <View style={{ flex: 1, justifyContent: "space-around", padding: 5, flexDirection: "row" }}>
                    <Text style={styles.allItemTextTitle}> IMG</Text>
                    <Text style={styles.allItemTextTitle}> ITEM</Text>
                    <Text style={styles.allItemTextTitle}> Qty</Text>
                    <Text style={styles.allItemTextTitle}> price</Text>
                </View>
                {orderItems.map((val, index) => {
                    return (
                        < View key={index}>

                            <View style={{
                                flex: 1,
                                justifyContent: "space-around",
                                padding: 5, flexDirection: "row"
                            }}
                            >

                                <Image
                                    resizeMode="contain"
                                    source={{ uri: (val.productimage) }}
                                    style={{ height: 30, width: 50 }}
                                />
                                <Text style={styles.allItemText}> {val.productname}</Text>
                                <Text style={styles.allItemText}> {val.quantity}</Text>
                                <Text style={styles.allItemText}> {val.productprice}</Text>
                            </View>

                        </View>
                    )
                })}
                <View style={{ height: 2, width: "100%", backgroundColor: "black" }}></View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                    <Text>TOTAL</Text>
                    <Text>=</Text>
                    <Text>Rs 9500</Text>
                </View>

                <View style={{
                    height: 200,
                    width: "85%",
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: "center",
                    alignSelf: 'center',
                    marginTop: 20,
                    backgroundColor: Colors.light, padding: 15
                }}>

                    <Text style={{ fontWeight: "bold", height: 20 }}>DELIVERY AND PAYMENTS</Text>
                    <Text>Dear customer ,Generally Delivery are made within a week.Your payment of the product will be paid through Dwallet.Please Recharge before purchase. If you want to enquire about your order. Contact: 09564692647</Text>

                </View>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "green",
                    margin: 30
                }}> {confirmedStatus}</Text>

            </ScrollView>


            <View style={styles.btnWrapper}>
                <TouchableOpacity
                    onPress={handleCancel}

                    style={styles.confirmbtn}>

                    <Text style={{ alignSelf: "center", fontSize: 15, color: "#1a0000" }}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    onPress={handleLinkWallet}
                    style={styles.confirmbtn}>
                    <Text style={{ alignSelf: "center", fontSize: 15, color: "#1a0000" }}>{confirmFinishbtn}</Text>

                </TouchableOpacity>

            </View>

            {/* <ConfirmUserOrder /> */}
            {/* //this is the model that appears after place holder is clicked */}
            {userConfirmModel}

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        height: "100%",
        backgroundColor: "#dce7f6",

    },

    texttop: {
        fontSize: 21,
        alignSelf: 'center',
        fontWeight: "bold",
        marginBottom: 5,
        color: "#1a0000"
    },
    itemsContainer: {
        backgroundColor: Colors.white,
        height: "80%"
    },
    confirmbtn: {
        height: 50,
        width: "40%",
        backgroundColor: "lightblue",
        borderRadius: 20,
        flex: -1,
        justifyContent: "center",
        alignItems: "center"
    },
    btnWrapper: {
        height: "20%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    allItemText: {
        width: 70
    },
    allItemTextTitle: {
        width: 70,
        fontWeight: 'bold'
    },
    modelwrapper: {
        // opacity: 0,
        // height: 0
    }
})


