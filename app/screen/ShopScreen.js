import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import ProductView from '../components/ProductView';
import { useNavigation } from '@react-navigation/native';
import Search from '../components/Search';
import COLORS from '../components/collections/Colors';



function ShopScreen({ userdata }) {
    const navigation = useNavigation()
    const [productdata, setProductdata] = useState([])
    const [searchitemlist, setSearchItemList] = useState([])

    const searchhandler = (search) => {

        let matches = productdata.filter(val => {
            const regex = new RegExp(`^${search}`, `gi`);
            return (val.productname.match(regex) || val.productdesc.match(regex));

        });
        if (search.length === 0) {

            navigation.reset({
                routes: [{ name: 'ShopStore' }],
            })

            matches = [];
            setSearchItemList([]);
        }
        setSearchItemList(matches)

    }


    if (searchitemlist.length > 0) {

        return (

            <SafeAreaView style={styles.maincont} >

                <TextInput style={styles.search}
                    onChangeText={(text) => searchhandler(text)}
                    placeholder='search' />

                <Text style={styles.text1} >Shop With D-Wallet</Text>


                <ScrollView style={styles.productcont} >
                    <Search userdata={userdata} searchitemlist={searchitemlist} />
                </ScrollView>


            </SafeAreaView >


        );

    }
    else {


        return (

            <SafeAreaView style={styles.maincont} >

                <TextInput style={styles.search}
                    onChangeText={(text) => searchhandler(text)}
                    placeholder='search' />

                <Text style={styles.text1} >SHOP WITH D-WALLET</Text>



                <ScrollView style={styles.productcont}>
                    <ProductView userdata={userdata} setProductdata={setProductdata} />
                </ScrollView>

            </SafeAreaView >

        );
    }




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
        marginTop: 2,
        marginBottom: 2,




    },
    productcont: {
        top: 10,
        flex: -1,
        marginHorizontal: 7,
        backgroundColor: 'white',
        marginBottom: 10,


    },
    text1: {

        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.lightbluebtn



    },
    tab1: {
        backgroundColor: "red",

    }

})



export default ShopScreen;