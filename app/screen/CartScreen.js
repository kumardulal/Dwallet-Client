import React, { useState } from 'react';
import CartView from '../components/CartView';
import { Text, TextInput, StyleSheet, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import COLORS from '../components/Colors';
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
                placeholder='search' />

            <Text style={styles.countitem} >Your Carted Items - {countcarteditem}</Text>

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
        backgroundColor: "#6a73cc",


    },

    search: {

        height: 50,
        color: 'black',
        width: "100%",
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        borderStartColor: "red"



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
    countitem: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"

    },


    bottombuttons: {
        height: 40,
        width: "35%",
        backgroundColor: "#ed4b80",
        // borderRadius: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CartScreen;