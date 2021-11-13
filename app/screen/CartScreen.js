import React, { useState } from 'react';
import CartView from '../components/CartView';
import { Text, TextInput, StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import COLORS from '../components/collections/Colors';
import { useNavigation } from '@react-navigation/native';


// MAin screen for cart- child id cartView of components
//cart screen with footer two delete and place order buttons


function CartScreen({ userdata }) {
    const navigation = useNavigation();
    //carted item count is performed here for top header text
    const [countcarteditem, setCountCartedItem] = useState(0);
    //setOrder is passed to cartscreen to get the order items from latest renderitems
    const [orderItems, setOrderItems] = useState([])




    const handledelete = () => {
        console.log("delete the selected item")

    }
    const handlePlaceOrder = () => {
        console.log("Placing the Order")
        navigation.navigate({
            name: 'PlaceOrder',
            params: { userdata: userdata, orderItems: orderItems },
            merge: true,
        })

    }
    return (
        <SafeAreaView style={styles.maincont} >

            <TextInput style={styles.search}
                placeholder='search carted item' />

            <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", justifyContent: "center" }}>
                <Text style={styles.Headline} >CARTED ITEMS - </Text>
                <Text style={{ fontSize: 19, color: COLORS.purpleblue, fontWeight: "bold" }}>{countcarteditem}</Text>
            </View>

            <ScrollView style={styles.cartscrollview}>
                <CartView userdata={userdata} setCountCartedItem={setCountCartedItem} setOrderItems={setOrderItems} />
                {/* <ProductView setproductdata={setproductdata} /> */}

            </ScrollView>
            <View style={
                {
                    flex: -1,
                    height: 55,
                    backgroundColor: "#fff",
                    borderBottomLeftRadius: 25,
                    borderTopRightRadius: 40,
                    // bottom: 5,
                    marginBottom: 10,

                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                    borderColor: "green",
                    borderWidth: 2
                }}>
                <TouchableOpacity
                    onPress={() => handledelete()}
                    style={styles.bottombuttons}>
                    <Text style={{ color: "white" }}>DELETE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottombuttons} onPress={() => handlePlaceOrder()}>
                    <Text style={{ color: "white" }}>PLACE ORDER</Text>
                </TouchableOpacity>

            </View>




        </SafeAreaView >






    );
}
const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        backgroundColor: COLORS.bgtheme1,


    },

    search: {

        height: 45,
        color: 'black',
        width: "100%",
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,

        alignSelf: "center",
        marginTop: 2,
        marginBottom: 2,



    },
    cartscrollview: {
        top: 10,
        flex: 1,
        marginHorizontal: 7,
        backgroundColor: 'white',
        overflow: "scroll",
        borderWidth: 2,
        borderColor: "green",
        marginBottom: "2%",

    },
    Headline: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.lightbluebtn

    },


    bottombuttons: {
        height: 40,
        width: "35%",
        backgroundColor: COLORS.cartScreenBtn,
        // borderRadius: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CartScreen;