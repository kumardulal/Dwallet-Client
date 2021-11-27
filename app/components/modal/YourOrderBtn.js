import React from 'react'
import { Feather } from '@expo/vector-icons';
import {
    Text, TouchableOpacity,
} from 'react-native';
import COLORS from '../collections/Colors';
export default function YourOrderBtn({ navigation }) {


    const handleOrdersbtn = () => {

        navigation.navigate("OrderedItems")
    }
    return (
        <TouchableOpacity
            onPress={handleOrdersbtn}
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: COLORS.iphoneWhite,
                padding: 13,
                borderRadius: 10
            }}>
            <Feather name="shopping-bag" size={25} color={COLORS.green} />
            <Text style={{
                marginLeft: 2,
                fontWeight: "bold",
                fontSize: 18,
                color: COLORS.green
            }} >Your Orders</Text>

        </TouchableOpacity>
    )
}
