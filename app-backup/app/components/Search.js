import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddToCart from './AddToCart';

function Search({ userdata, searchitemlist }) {
    const cartuserid = userdata.id
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

                        backgroundColor: "white"
                    }} key={index} >

                        <TouchableOpacity
                            style={{
                                backgroundColor: "white",
                                height: 258,
                                alignItems: "center",

                                margin: 10,


                            }}
                            onPress={() => handleseachproductclick(
                                val.productid,
                                val.productname,
                                val.productdesc,
                                val.productprice,
                                val.productimage)}>
                            <Image
                                style={{
                                    height: 220,
                                    width: "74%",
                                    backgroundColor: "#eeeef1",
                                    borderRadius: 10

                                }}
                                resizeMode="cover"
                                source={{ uri: (val.productimage) }}
                            />
                            <View style={{
                                flexDirection: "row",
                                height: 40,
                                width: "76%",
                                justifyContent: "space-between",
                                padding: 5,

                            }} >
                                <View style={{
                                    backgroundColor: "lightblue",
                                    height: 55,
                                    width: "79%",
                                    paddingLeft: 12
                                }} >
                                    <View
                                    >

                                        <View style={{ flexDirection: "row" }} >
                                            <Text style={{ color: "black", fontWeight: "bold" }}>Item:</Text>
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
                        </TouchableOpacity>

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