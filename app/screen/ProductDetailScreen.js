import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Colors';
import AddToCart from '../components/requests/AddToCart';

const ProductDetailScreen = ({ navigation, route }) => {
    const userdata = route.params?.userdata
    const productdetails = route.params?.pdata
    console.log("hey hey kfjkdljfkldfj", userdata.userid)

    const [countquantity, setCountQuantity] = useState(0);

    function handlecount(quantity) {
        console.log(quantity)
        if (quantity == "plus") {
            setCountQuantity(countquantity + 1)
        }
        if (quantity == "minus") {
            setCountQuantity(countquantity - 1)
        }
    }

    return (

        <SafeAreaView
            style={{
                flex: 1,
                height: "100%",
                backgroundColor: COLORS.white,
                marginBottom: "2%"
            }}>
            <View style={style.header}>
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate("Cart")} />
            </View>
            <View style={style.imageContainer}>
                <Image
                    source={{ uri: (productdetails.pimage) }}
                    style={{
                        resizeMode: 'repeat',
                        flex: 1,
                        height: "100%",
                        width: "100%"
                    }} />
            </View>
            <View style={style.detailsContainer}>
                <View
                    style={{
                        marginLeft: 20,
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                    <View style={style.line} />
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Best choice</Text></View>

                        <TouchableOpacity style={style.addtocartbtn} onPress={() => AddToCart(productdetails.pid, userdata.userid)} >
                            <Text
                                style={{ color: COLORS.white, fontSize: 15, fontWeight: 'bold' }}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        marginLeft: 20,
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'green' }}>{productdetails.pname}</Text>
                    <View style={style.priceTag}>
                        <Text
                            style={{
                                marginLeft: 22,
                                color: COLORS.white,
                                fontWeight: 'bold',
                                fontSize: 12,
                            }}>
                            {/* ${plant.price} */}Price:{productdetails.pprice}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 8, marginTop: 5 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Product Description</Text>
                    <ScrollView
                        style={style.scrollviewpart}>


                        <Text
                            style={{
                                color: 'green',
                                fontSize: 15,
                                lineHeight: 22,
                                marginTop: 1,
                                padding: 8,



                            }}>
                            {productdetails.pdesc}

                        </Text>


                    </ScrollView>

                    <View
                        style={{
                            marginTop: 8,
                            flexDirection: 'row',
                            justifyContent: 'space-between',

                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity
                                onPress={() => handlecount("minus")}
                                style={style.borderBtn}>
                                <Text style={style.borderBtnText}>-</Text>
                            </TouchableOpacity>
                            <View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        marginHorizontal: 10,
                                        fontWeight: 'bold',
                                    }}>
                                    {countquantity}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={style.borderBtn}
                                onPress={() => handlecount("plus")}>
                                <Text style={style.borderBtnText}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={style.buyBtn}>
                            <Text
                                style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                Buy Now
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </SafeAreaView >

    );
};

const style = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        flex: 0.45,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    detailsContainer: {
        flex: 0.55,
        backgroundColor: COLORS.light,
        marginHorizontal: 12,
        marginBottom: 2,
        borderRadius: 20,
        marginTop: 10,
        paddingTop: 1,
    },
    line: {
        width: 25,
        height: 20,
        backgroundColor: COLORS.dark,
        marginBottom: 5,
        marginRight: 3,

    },
    borderBtn: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: COLORS.red
    },
    borderBtnText: { fontWeight: 'bold', fontSize: 28 },
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    priceTag: {
        backgroundColor: COLORS.green,
        width: 120,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
    },
    addtocartbtn: {

        width: 130,
        height: 50,
        backgroundColor: COLORS.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderBottomLeftRadius: 20,

    },
    scrollviewpart: {
        height: "42%",
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'

    }
});

export default ProductDetailScreen;