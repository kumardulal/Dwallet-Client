import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddToCart from './AddToCart';

function ProductView({ userdata, setProductdata }) {
    const cartuserid = userdata.id
    const [productInfo, setProductInfo] = useState([]);
    const navigation = useNavigation()

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            try {
                Axios.get("http://192.168.254.102:8000/api/get/productdata",)
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



    const handleaddcart = (cartedproductid) => {
        //using function of another comonent for add to cart
        AddToCart(cartedproductid, cartuserid)

    }

    const ViewdetailsHandler = (pid, pname, pdesc, pprice, pimage) => {
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
                productInfo?.map((val, index) => {
                    return (

                        <View style={styles.ProductView} key={index} >



                            {/* Remove this one conponent after done with image storing in sql database */}
                            <TouchableOpacity style={styles.ProductView}
                                onPress={() => ViewdetailsHandler(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}>
                                <View style={styles.productdetail}>
                                    <View>
                                        <Image
                                            resizeMode="contain"
                                            source={{ uri: (val.productimage) }}
                                            style={styles.imageview}
                                        />

                                    </View>
                                    <View style={styles.titletext}>

                                        <View
                                            style={styles.name}>
                                            <Text>name: {val.productname} </Text>
                                        </View>
                                        <View
                                            style={styles.priceTag}>
                                            <Text>Price: {val.productprice} </Text>
                                        </View>
                                        <View
                                            style={styles.pdesc}>
                                            <Text>Desc: {val.productdesc} </Text>
                                        </View>

                                    </View>
                                    {/* <Button
                                        onPress={() => ViewdetailsHandler(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}
                                        title="View dETAILS"
                                        color="#A9A9F5"
                                        accessibilityLabel="Learn more about this purple button"
                                    /> */}
                                    <Button
                                        onPress={() => {
                                            handleaddcart(val.productid)
                                        }}

                                        title="Add to Cart"
                                        color="#DA81F5"
                                        accessibilityLabel="Learn more about this purple button"
                                    />

                                </View>
                            </TouchableOpacity>


                        </View>
                    )
                })
            }

        </>




    );
}
const styles = StyleSheet.create({
    ProductView: {
        flex: -1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'space-around',
        margin: 3,





    },
    productdetail: {
        backgroundColor: "#eee",
        borderRadius: 10,
        overflow: "hidden"
    },
    titletext: {
        padding: 0,
        width: "80%",

    },

    imageview: {

        height: 220,
        width: 300
    },
    priceTag: {
        backgroundColor: "#00B761",
        width: 120,
        height: 25,
        justifyContent: 'space-around',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,

    },
    pdesc: {

        height: 25,
    }
})

export default ProductView;




