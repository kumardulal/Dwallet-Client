import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, CheckBox, ScrollView, Alert } from 'react-native';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import COLORS from './Colors';




function CartView({ userdata, setCountCartedItem }) {
    const userid = userdata.id
    const navigation = useNavigation();
    const [cartedproduct, setCartedProduct] = useState([]);
    const [activebtn, setActiveBtn] = useState(styles.check)

    //useeffect call is made here with navigation focus addlisterner to refresh everyting it focus the cart screen.ok buddy
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            try {
                Axios.get(`http://192.168.254.102:8000/api/get/cartitems/${userid}`)
                    .then((response) => {

                        setCartedProduct(response.data)
                        // setproductdata(response.data)
                        setCountCartedItem(response.data.length)
                    })
            }
            catch (error) {
                Alert.alert('Failed to get product')
            }

        });

        return unsubscribe;
    }, [navigation, 1]);


    //main program before rendering components
    if (cartedproduct.length < 1) {
        return (
            <>
                <Emptycart />
            </>
        )
    }
    else {
        return (
            <>
                <CartedItem />
            </>
        )
    }

    //if no item in cart
    function Emptycart() {
        return (
            <View style={styles.emptycartcontainer}>
                <Text style={styles.emptycart}>No Items in Cart</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Shop' }],
                        });
                    }}
                    style={styles.shopnowbtn}>
                    <Image
                        source={require("../assets/shop.png")}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    //if there is carted item in cart
    function CartedItem() {


        const handledeletecarteditem = (cartid) => {
            const userid = userdata.id

            try {
                Axios.delete(`http://192.168.254.102:8000/api/delete/cartitems/${cartid}/${userid}`)
                    .then((response) => {
                        //on delete success ,there is message in need
                        console.log(response.data.message)
                        navigation.reset({
                            index: 0,
                            routes: [{ name: "Cart" }],

                        })

                    })

            }
            catch (err) {
                console.log(err)
            }

        }


        const handleviewDetails = (pid, pname, pdesc, pprice, pimage) => {
            const pdata = { 'pid': pid, 'pname': pname, 'pdesc': pdesc, 'pprice': pprice, 'pimage': pimage }
            navigation.navigate({
                name: 'ProductDetailScreen',
                params: { userdata: userdata, pdata: pdata },
                merge: true,
            })
        }
        const handlePlaceOrder = () => {
            navigation.navigate("CheckOutScreen")

        }


        ////////////////////////this id for checkbox/////////////////

        // const handlecheckbox = (pid, pname, pdesc, pprice, pimage, indexval) => {
        //     const pdata = { 'pid': pid, 'pname': pname, 'pdesc': pdesc, 'pprice': pprice, 'pimage': pimage }
        //     storecheckedproduct.push(pdata.pname)
        //     const prdata = storecheckedproduct
        //     validatecheckbox(prdata)
        // }


        // const validatecheckbox = (prdata) => {

        //     console.log("______________________________.", prdata)
        //     if (prdata.includes(prdata)) {
        //         setSelection(true)
        //     }

        // }



        const handlecheckbox = (indexval) => {
            console.log("clicked in the checkbox")
            console.log(indexval)
            // setActiveBtn(styles.checkbtn)
            if (activebtn.backgroundColor == "green") {
                setActiveBtn(styles.check)
            }
            if (activebtn.backgroundColor == "white") {

                setActiveBtn(styles.checkbtn)
            }

        }



        return (

            <View>
                <>

                    {
                        cartedproduct.map((val, index) => {

                            return (
                                <View style={styles.CartViewbox} key={index} >

                                    <View style={styles.CartViewbox}>
                                        <View style={styles.itemdetail}>
                                            <View style={styles.checkboxitem} key={index}>
                                                <TouchableOpacity
                                                    onPress={() => handlecheckbox(index)}
                                                >
                                                    <View style={activebtn} >


                                                    </View>
                                                </TouchableOpacity>

                                                {/* <CheckBox

                                                    value={isSelected}
                                                    onValueChange={setSelection}
                                                    style={styles.checkbox}

                                                /> */}
                                                <Image
                                                    resizeMode="cover"
                                                    source={{ uri: (val.productimage) }}
                                                    style={styles.imageview}
                                                />
                                            </View>
                                            <View style={styles.titletext}>
                                                <View style={styles.namecol}>
                                                    <View
                                                        style={styles.name}>
                                                        <Text>name: {val.productname} </Text>
                                                    </View>

                                                </View>
                                                <View style={styles.namecol}>
                                                    <View
                                                        style={styles.priceTag}>
                                                        <Text>Price: {val.productprice} </Text>
                                                    </View>
                                                    <View
                                                        style={styles.btndelete}>
                                                        <Button
                                                            onPress={() => handledeletecarteditem(val.cartid)}
                                                            title="Delete"
                                                            color="#e05d83"
                                                            accessibilityLabel="Learn more about this purple button"
                                                        />
                                                    </View>
                                                </View>


                                                <View
                                                    style={styles.desctext}>
                                                    <Text>Desc: {val.productdesc} </Text>
                                                </View>

                                            </View>

                                            <Button
                                                onPress={() => handleviewDetails(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}

                                                title="View dETAILS"
                                                color="#A9A9F5"
                                                accessibilityLabel="Learn more about this purple button"
                                            />
                                            <Button
                                                onPress={() => {
                                                    handlePlaceOrder()
                                                }}
                                                title="Place Order"
                                                color="#DA81F5"
                                                accessibilityLabel="Learn more about this purple button"
                                            />


                                        </View>
                                    </View>


                                </View>
                            )

                        }
                        )


                    }


                </>
            </View>

        );


        ///////////////////////////////
    }

}
const styles = StyleSheet.create({
    CartViewbox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,


    },
    itemdetail: {
        backgroundColor: "#eee",
        borderRadius: 10,



    },
    titletext: {
        width: "75%",
        backgroundColor: "#F1F1F1",
        paddingLeft: 8,


    },

    desctext: {
        paddingTop: 1,
        overflow: "hidden",
        height: "18%",
    },
    imageview: {

        height: 80,
        width: 250,

    },
    checkboxitem: {
        flexDirection: "row",
        alignItems: "center",


    },
    check: {
        padding: 5,
        margin: 10,
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "green"
    },
    checkbtn: {
        padding: 5,
        margin: 10,
        width: 30,
        height: 30,
        backgroundColor: "green",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "green"
    },

    emptycart: {
        marginTop: 45,
        textAlign: 'center',
        fontSize: 40

    },
    shopnowbtn: {
        marginTop: "20%",

    },
    emptycartcontainer: {
        borderRadius: 50,
        marginTop: "5%",
        backgroundColor: "#035A85",

    },
    priceTag: {
        backgroundColor: "#00B761",
        width: 120,
        height: 30,
        justifyContent: 'space-around',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,

    },
    btndelete: {
        paddingTop: 2,
        width: 70,
        marginLeft: "27%",
    },

    namecol: {
        flexDirection: 'row',
        alignItems: 'center',

    },

})

export default CartView;