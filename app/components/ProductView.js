import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddToCart from './requests/AddToCart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ApiAddress from './requests/ApiAddress';
import COLORS from './collections/Colors';


function ProductView({ userdata, setProductdata }) {
    const cartuserid = userdata.userid
    const [productInfo, setProductInfo] = useState([]);
    const navigation = useNavigation()

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            try {
                Axios.get(`${ApiAddress.httpaddress}/api/get/productdata`,)
                    .then((response) => {
                        setProductInfo(response.data)
                        setProductdata(response.data)
                    })
            }
            catch (error) {
                Alert.alert('Failed to get product info')
            }

        });

        return unsubscribe;
    }, [navigation, 1]);

    //making the product go random view on refresh // 
    //this place we can put alorithm for how we want to show our product list and suggesion on page
    const productInfo1 = productInfo.sort(() => Math.random() - Math.random());



    const handleaddcart = (cartedproductid) => {
        //using function of another comonent for add to cart functionality
        const quantity = 1;
        AddToCart(cartedproductid, cartuserid, quantity)



    }

    const handleviewdetails = (pid, pname, pdesc, pprice, pimage) => {
        const pdata = { 'pid': pid, 'pname': pname, 'pdesc': pdesc, 'pprice': pprice, 'pimage': pimage }


        navigation.navigate({
            name: 'ProductDetailScreen',
            params: { userdata: userdata, pdata: pdata },
            merge: true,
        })
    }


    return (

        <>
            {
                productInfo1?.map((val, index) => {
                    return (

                        <View style={styles.maincontainer} key={index} >



                            {/* Remove this one conponent after done with image storing in sql database */}
                            {/* <TouchableOpacity style={styles.ProductView}
                                //this functin handle view details is import from handler
                                onPress={() => handleviewdetails(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}> */}
                            <View style={styles.productdetail}>

                                <TouchableOpacity
                                    style={styles.imageWrapper}
                                    onPress={() => handleviewdetails(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}>
                                    <Image
                                        resizeMode="contain"
                                        source={{ uri: (val.productimage) }}
                                        style={styles.imageview}
                                    />

                                </TouchableOpacity>


                                <View style={styles.titletext}>
                                    <View style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        width: "70%"
                                    }}>

                                        <View
                                            style={styles.name}>
                                            <Text>name: {val.productname} </Text>
                                        </View>
                                        <View
                                            style={styles.priceTag}>
                                            <Text>Price: {val.productprice} </Text>
                                        </View>
                                    </View>





                                    <View style={{
                                        height: 45,
                                        backgroundColor: COLORS.lightblue,
                                        width: "16%",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10,


                                    }} ><TouchableOpacity
                                        onPress={() => handleaddcart(val.productid)}>
                                            <Icon name="add-shopping-cart" size={32} onPress={() => handleaddcart(val.productid)} />
                                            {/* <Image
                                                    source={require("../assets/addtocart1.png")} /> */}
                                        </TouchableOpacity>


                                    </View>
                                </View>
                                <View
                                    style={styles.pdesc}>
                                    <Text>Desc: {val.productdesc} </Text>
                                </View>
                            </View>





                        </View>
                    )
                })
            }

        </>




    );
}
const styles = StyleSheet.create({

    maincontainer: {
        flex: -1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'space-around',
        margin: 5,
        flexWrap: "wrap",


    },

    productdetail: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden"
    },
    titletext: {
        padding: 0,
        width: "95%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 10,

    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    imageview: {

        height: 280,
        width: "92%",
        bottom: 10,
        borderRadius: 15
    },
    priceTag: {
        backgroundColor: "#00B761",
        width: 120,
        height: 26,
        justifyContent: 'space-around',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,

    },
    pdesc: {
        width: "90%",
        height: 23,
        overflow: "hidden",
        // alignSelf: "start",
        marginLeft: "8%"



    }
})

export default ProductView;




