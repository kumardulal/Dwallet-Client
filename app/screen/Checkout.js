import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet, Image, CheckBox, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../components/Colors';


function Checkout({ navigation }) {

    const [isSelected, setSelection] = useState(false)

    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.headertextContainer}>


                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
                <Text style={styles.headertext}>CHECKOUT</Text>
                <Icon name="shopping-cart" size={28} onPress={() => navigation.navigate("Cart")} />


            </View>
            <View style={styles.pcontainer}>
                <View style={styles.greendot} >

                </View>

                <View style={styles.pview}>
                    {/* <Image
                    resizeMode="cover"
                    source={{ uri: (val.productimage) }}
                    style={styles.imageview}
                /> */}


                    <View>

                        <Text style={styles.tabletitle}>P.Image</Text>
                    </View>
                </View>
                <View>

                    <Text style={styles.tabletitle}>P.name</Text>
                </View>
                <View>

                    <Text style={styles.tabletitle}>P.Quantity</Text>
                </View>
                <View>

                    <Text style={styles.tabletitle}>P.price</Text>
                </View>
                <View>

                    <Text style={styles.tabletitle}>P.total</Text>
                </View>
            </View>




            {/* this is the formart for listing product flexdirection to row */}

            <View style={styles.pcontainer}>

                <View  >
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}


                    />
                </View>
                <View style={styles.pview}>
                    {/* <Image
                    resizeMode="cover"
                    source={{ uri: (val.productimage) }}
                    style={styles.imageview}
                /> */}

                    <Image
                        style={styles.imageview}
                        resizeMode="contain"
                        source={require("../assets/upload.png")}
                    />
                </View>
                <View>

                    <Text style={styles.tablelisting} >skirt </Text>
                </View>
                <View>

                    <Text style={styles.tablelisting}>5</Text>
                </View>
                <View>

                    <Text style={styles.tablelisting}>500</Text>
                </View>
                <View>

                    <Text style={styles.tablelisting}>2500</Text>
                </View>
            </View>


        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        backgroundColor: COLORS.lightblue,

    },

    headertextContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: COLORS.lightblue,
        width: "100%",
        height: "8%",
        top: "10%",
        marginBottom: "12%",


    },
    headertext: {
        fontSize: 20,
        fontWeight: "bold"
    },
    pcontainer: {

        backgroundColor: COLORS.light,
        height: "5%",
        width: "100%",
        justifyContent: "space-evenly",
        flexDirection: 'row'

    },
    pview: {
        height: "80%",
        width: "15%",


    },
    imageview: {
        height: "100%",
        width: "100%",
    },
    tabletitle: {
        color: "green"
    },
    tablelisting: {
        color: "black",
        fontSize: 12,
    },

    checkboxitem: {
        flexDirection: "row",
        alignItems: "center"

    },
    greendot: {
        width: 25,
        height: 25,
        backgroundColor: "green",
        borderBottomEndRadius: 25

    },
    confirmcheckout: {
        flex: 1,
        height: 100,
        backgroundColor: "red"
    }


})

export default Checkout;