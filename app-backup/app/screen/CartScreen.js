import React, { useEffect, useState } from 'react';
import CartView from '../components/CartView';
import { Text, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

function CartScreen({ userdata }) {
    const [countcarteditem, setCountCartedItem] = useState(0);
    //carted item count is performed here 
    return (
        <SafeAreaView style={styles.maincont} >

            <TextInput style={styles.search}
                placeholder='search' />

            <Text style={styles.text1} >Your Carted Items - {countcarteditem}</Text>

            <ScrollView style={styles.productcont}>
                <CartView userdata={userdata} setCountCartedItem={setCountCartedItem} />
                {/* <ProductView setproductdata={setproductdata} /> */}

            </ScrollView>




        </SafeAreaView>






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
    productcont: {
        top: 10,
        flex: 1,
        marginHorizontal: 7,
        backgroundColor: 'white',
        overflow: "scroll"
    },
    text1: {

        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'



    },
    tab1: {
        backgroundColor: "red",

    }

})

export default CartScreen;