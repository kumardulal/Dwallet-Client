import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddToCart from './requests/AddToCart';

function Search({ userdata, searchitemlist }) {
    const cartuserid = userdata.userid
    console.log("I need the data to work")
    const navigation = useNavigation()



    const handleaddtocart = (cartedproductid) => {
        AddToCart(cartedproductid, cartuserid)
    }
    const handleseachproductclick = (pid, pname, pdesc, pprice, pimage) => {
        const pdata = { "pid": pid, "pname": pname, "pdesc": pdesc, "pprice": pprice, "pimage": pimage }
        navigation.navigate(
            {
                name: 'ProductDetailScreen',
                params: { "userdata": userdata, "pdata": pdata },
                marge: true,
            }
        )
    }
    return (
        <>
            {searchitemlist?.map((val, index) => {
                return (
                    <View style={{
                        flex: 1,
                        margin: "4%",
                        alignItems: "center",


                    }} key={index} >

                        <View
                            style={{

                                backgroundColor: "white",
                                width: "90%",
                                borderRadius: 10,
                                borderWidth: 2,
                                paddingBottom: "0.9%",
                                borderColor: "#8aa981",
                                alignItems: "center"

                            }}>
                            <View>
                                <TouchableOpacity
                                    onPress={() => handleseachproductclick(
                                        val.productid,
                                        val.productname,
                                        val.productdesc,
                                        val.productprice,
                                        val.productimage)}>
                                    <Image
                                        style={{

                                            height: 200,
                                            width: "100%",
                                            backgroundColor: "#eeeef1",
                                            borderRadius: 10

                                        }}
                                        resizeMode="contain"
                                        source={{ uri: (val.productimage) }}
                                    />
                                </TouchableOpacity>


                                <View style={{
                                    flexDirection: "row",
                                    width: "85%",
                                    justifyContent: "space-between",
                                    padding: 5,
                                    backgroundColor: "#cfd6db"

                                }} >
                                    <View style={{
                                        backgroundColor: "lightblue",
                                        height: "100%",
                                        width: "80%",
                                        paddingLeft: 12
                                    }} >
                                        <View
                                        >

                                            <View style={{ flexDirection: "row" }} >
                                                <Text style={{
                                                    color: "black",
                                                    fontWeight: "bold"
                                                }}>Item:</Text>

                                                <Text style={styles.fontstyle}> {val.productname}</Text>

                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <View><Text style={{ color: "black", fontWeight: "bold" }}>Price:</Text></View>
                                                <View>
                                                    <Text style={styles.fontstyle}>{val.productprice}</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>

                                    <View style={{
                                        height: 40,
                                        backgroundColor: "grey",
                                        width: "16%",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }} >

                                        <Icon name="shopping-cart" size={28} onPress={() => handleaddtocart(val.productid)} />
                                    </View>

                                </View>
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
    fontstyle: {
        color: "green",
        fontWeight: "bold",
        overflow: "hidden",

    }
})

export default Search;