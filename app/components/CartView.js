import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Alert } from 'react-native';
import Axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ApiAddress from './requests/ApiAddress';





function CartView({ userdata, setCountCartedItem, setOrderItems }) {
    const userid = userdata.userid
    const navigation = useNavigation();
    const [cartedproduct, setCartedProduct] = useState([]);
    const [checkeddata, setCheckedData] = useState([])
    const [activebtncolor, setActiveBtnColor] = useState(styles.check)
    const [deleteclicked, setDeleteClicked] = useState(false)




    //useeffect call is made here with navigation focus addlisterner to refresh everyting it focus the cart screen.ok buddy
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // do something
            RenderItems()
        }
        );

        return unsubscribe;
    }, [navigation, 1]);




    //if user like to
    useEffect(() => {
        if (deleteclicked === true) {
            console.log("'this is me,clicked delete useeffect")
            // Alert.alert('Failed to get product')
            RenderItems()

        }
        setDeleteClicked(false)

    }, [deleteclicked, cartedproduct, setCountCartedItem])

    // useEffect(() => {
    //     setCheckedData(
    //         checkeddata.map(d => {
    //             return (
    //                 {
    //                     checked: false,
    //                     pid: d.productid,
    //                     pname: d.productname,
    //                     pdesc: d.productdesc,
    //                     pprice: d.productprice,
    //                     pimage: d.productimage

    //                 }
    //             )
    //         })
    //     )
    // })

    //Rendering the carted Products items user anytime
    const RenderItems = () => {

        try {
            Axios.get(`${ApiAddress.httpaddress}/api/get/cartitems/${userid}`)
                .then((response) => {

                    setCartedProduct(response.data)
                    setOrderItems(response.data)
                    // setproductdata(response.data)
                    setCountCartedItem(response.data.length)
                })
        }
        catch (error) {
            Alert.alert('Failed to get product')
        }
    }

    //main program before rendering components\
    if (cartedproduct.length < 1) {
        return (
            <>
                <Emptycart />
            </>
        )
    }

    // else it will run the default function returns

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
    // function CartedItem() {


    //delete item from cart here
    const handledeletecartitem = (cartid) => {
        // DeleteCartItem(cartid, userid)

        try {
            Axios.delete(`${ApiAddress.httpaddress}/api/delete/cartitems/${cartid}/${userid}`)
                .then((response) => {
                    //on delete success ,there is message in need
                    // console.log(response.data.message)
                    setDeleteClicked(true)

                })


        }
        catch (err) {
            console.log(err)
        }

    }




    const handleviewdetails = (pid, pname, pdesc, pprice, pimage) => {
        // HandleViewDetails(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)
        const pdata = { 'pid': pid, 'pname': pname, 'pdesc': pdesc, 'pprice': pprice, 'pimage': pimage }
        navigation.navigate({
            name: 'ProductDetailScreen',
            params: { userdata: userdata, pdata: pdata },
            merge: true,
        })
    }


    //CHECK BOX-----------------------
    const handlecheckbox = (pid, index) => {
        //includes the value hold that are checked to send to place order item
        //if checkbox is checked
        if (checkeddata.includes(`${pid}`)) {
            for (let i = 0; i < checkeddata.length; i++) {
                if (checkeddata[i] = pid) {
                    chekingcheckbox();
                    checkeddata.splice(i, 1);
                    setCheckedData(checkeddata)

                } else {
                    setCheckedData()
                    chekingcheckbox();
                    // console.log(pid, "what the fuck bro data  didndnot match")
                    alert("some problem with validating the checkbox in handle checkbox")


                }

            }

        }
        //if the checkbox is not checked 
        else {
            console.log("+++++++++++++++++")
            setCheckedData(checkeddata => [...checkeddata, `${pid}`]);
            chekingcheckbox(pid);
        }

    }
    // console.log("checked data are", checkeddata)



    const chekingcheckbox = () => {

        if (activebtncolor.backgroundColor === "green") {

            setActiveBtnColor(styles.check)


        }
        else if (activebtncolor.backgroundColor === "white") {
            // setActiveBtn(indexval)

            setActiveBtnColor(styles.checkedbtn)


        }
        else {
            console.log("Cannot change the state of checkbox")
        }
    }


    // Plus and minus counter for product Quantity server Update and handler here ******
    const updateQuantityApi = (mathOperator, cartid, itemQuantity) => {
        if (mathOperator === 'plus') {
            itemQuantity = itemQuantity + 1
        }
        else if (mathOperator === 'minus') {
            itemQuantity = itemQuantity - 1
        }
        else {
            console.log("operator cannot match plus or minus")
        }
        Axios.post(`${ApiAddress.httpaddress}/api/post/cartUpdateItemQuantity`, {
            cartid: cartid,
            cartuserid: userid,
            itemQuantity: itemQuantity
            //item carted quantity for each will be updated in server in execution 
        }).then(() => {
            console.log("item quantity Updated")
            //after update it will render again all data to update the view
            //but when i try render after the completion of this funtion,it needs 2 clicks to render, Why??
            RenderItems()

        }).catch = (err) => {
            console.log(err)
        }
    }


    const handleItemCount = (mathOperator, cartid, itemQuantity) => {

        // updateQuantityApi(mathOperator, cartid, itemQuantity);
        updateQuantityApi(mathOperator, cartid, itemQuantity, userid)




    }
    // Plus and minus counter for product Quantity server Update and handler ENDS Here ******

    return (


        <View>
            <>

                {
                    cartedproduct.map((val, index) => {

                        return (
                            <View style={styles.maincard} key={index} >


                                <View style={styles.itemdetail}>
                                    <View style={styles.checkboxitem} key={index}>
                                        <TouchableOpacity
                                            onPress={() => handlecheckbox(val.productid, index)}
                                        >
                                            <View style={activebtncolor} >


                                            </View>
                                        </TouchableOpacity>

                                        {/* <CheckBox

                                                    value={isSelected}
                                                    onValueChange={setSelection}
                                                    style={styles.checkbox}

                                                /> */}
                                        <TouchableOpacity
                                            onPress={() => handleviewdetails(val.productid, val.productname, val.productdesc, val.productprice, val.productimage)}>

                                            <Image
                                                resizeMode="contain"
                                                source={{ uri: (val.productimage) }}
                                                style={styles.imageview}
                                            />
                                        </TouchableOpacity>
                                    </View>


                                    <View style={styles.titletext}>
                                        <View style={styles.namecol}>
                                            <View
                                                style={styles.name}>
                                                <Text>name: {val.productname} </Text>
                                            </View>

                                        </View>


                                        <View style={styles.delete_price_plus_minus}>
                                            <View
                                                style={styles.priceTag}>
                                                <Text>Price: {val.productprice} </Text>
                                            </View>

                                            <View style={styles.counterCount}>
                                                <TouchableOpacity
                                                    style={styles.plus_minus}
                                                    onPress={() => handleItemCount("minus", val.cartid, val.quantity)}>
                                                    <Text style={{ fontSize: 40, color: "#cb6592" }}>-</Text>


                                                </TouchableOpacity>

                                                <View >
                                                    <Text style={{
                                                        fontSize: 31,
                                                        color: "green",
                                                        marginLeft: 5,
                                                        marginRight: 5
                                                    }}>{val.quantity}</Text>

                                                </View>

                                                <TouchableOpacity
                                                    style={styles.plus_minus}
                                                    onPress={() => handleItemCount("plus", val.cartid, val.quantity)}
                                                >
                                                    <Text style={{ fontSize: 35, color: "#cb6592" }}>+</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View
                                                style={styles.btndelete}>
                                                <TouchableOpacity
                                                    style={{
                                                        backgroundColor: "white",
                                                        borderRadius: 10,
                                                        alignItems: "center",
                                                        width: "55%",


                                                    }}
                                                    onPress={() => handledeletecartitem(val.cartid)}>
                                                    <Icon
                                                        name="delete"
                                                        size={32}
                                                        style={{ color: "#d46071" }}
                                                        onPress={() => handledeletecartitem(val.cartid)} />

                                                </TouchableOpacity>

                                            </View>
                                        </View>

                                        <View
                                            style={styles.desctext}>
                                            <Text >Desc: {val.productdesc} </Text>
                                        </View>

                                    </View>
                                </View>
                            </View>



                        )

                    }
                    )


                }


            </>
        </View >


    );


    ///////////////////////////////


}
const styles = StyleSheet.create({
    maincard: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        marginTop: "4%",


    },

    itemdetail: {
        backgroundColor: "#eee",
        borderRadius: 10,
        flexDirection: "row"


    },
    titletext: {
        // height:"50%",
        width: "75%",
        backgroundColor: "#F1F1F1",
        paddingLeft: 8,


    },

    desctext: {
        paddingTop: 1,
        height: 20.5,
        overflow: "hidden",
        width: 150,



    },
    imageview: {

        height: 50,
        width: 50,
        borderRadius: 10

    },
    checkboxitem: {
        flexDirection: "row",
        alignItems: "center",


    },
    check: {
        padding: 5,
        margin: 10,
        width: 23,
        height: 23,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 4,
        borderColor: "green"
    },
    checkedbtn: {
        padding: 5,
        margin: 10,
        width: 23,
        height: 23,
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
        width: 80,
        height: 30,
        justifyContent: 'space-around',
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 20,

    },
    btndelete: {
        paddingTop: 2,
        width: 70,
        left: 15

    },

    namecol: {
        flexDirection: 'row',
        alignItems: 'center',



    },
    delete_price_plus_minus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",


    },
    plus_minus: {
        height: 35,
        width: 30,
        backgroundColor: "#b2d9c1",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    counterCount: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",



    }

})

export default CartView;