import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import COLORS from '../components/collections/Colors'
export default function FinishOrder({ navigation }) {
    return (
        <View style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            <View style={{
                marginTop: "25%",
                display: "flex",
                height: "13%",

                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Order Successfull..</Text>
                <Text style={{ fontSize: 15, width: 260, }}>We will contact your for further process.Show the token number to receive the delivery. </Text>
            </View>

            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "21%",
                width: 270,
                marginLeft: "5%"

            }}>
                <Text style={{ fontSize: 20, }}>order-Token Number:</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", }}> UsFD3435</Text>

                <Text style={{ fontSize: 15 }}>Support Contact: 09564692647</Text>

            </View>
            <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("DWallet")}
            >
                <Text style={{ color: "green", fontSize: 20, }}>ok</Text>
            </TouchableOpacity>


        </View >
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: "90%",
        backgroundColor: COLORS.lightbluebtn,
    },
})
