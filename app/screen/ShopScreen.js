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
            return (val.productname.match(regex)) || (val.productdesc.match(regex));

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

                <Text style={styles.text1} >Search results..</Text>


                <ScrollView style={styles.productcont} >
                    <Search userdata={userdata} searchitemlist={searchitemlist} />
                </ScrollView>


            </SafeAreaView >


        );

    }
    else {


        return (

            <SafeAreaView style={styles.maincont} >
                {/* remove the comment if needed */}
                {/* <Text style={styles.text1} >SHOP WITH D-WALLET</Text> */}

                <TextInput style={styles.search}
                    onChangeText={(text) => searchhandler(text)}
                    placeholder='search' />



                <View style={styles.productcont}>
                    {/* {compState} */}
                    <ProductView userdata={userdata} setProductdata={setProductdata} />
                </View>

            </SafeAreaView >

        );
    }


}
const styles = StyleSheet.create({
    maincont: {
        flex: 1,
        backgroundColor: COLORS.lightbluebtn,
        justifyContent: "center",
        alignItems: "center"


    },

    search: {

        height: 37,
        color: 'black',
        width: "95%",
        maxWidth: 600,
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
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
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.red,
        opacity: 0.5,
        backgroundColor: COLORS.white,
        padding: 5,
        width: "80%",
        borderRadius: 10,
        marginTop: 5



    },


})



export default ShopScreen;