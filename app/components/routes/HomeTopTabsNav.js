import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartScreen from '../../screen/CartScreen';
import ShopScreen from '../../screen/ShopScreen';
import COLORS from '../collections/Colors';

const Tab = createMaterialTopTabNavigator();
export default function HomeTopTabsNav({ userdata }) {

    return (
        // <SafeAreaView style={{ width: "100%", height: "100%", top: "-3.8%" }}>
        <Tab.Navigator
            style={styles.topbar}

            tabBarOptions={{

                activeTintColor: COLORS.green,
                inactiveTintColor: COLORS.dark,

                style: {

                    backgroundColor: COLORS.iphoneWhite,
                    color: "black"


                }
            }}
        >
            <Tab.Screen


                name="Shop"
                children={() => <ShopScreen userdata={userdata} />}

            />

            <Tab.Screen
                name="Cart"
                children={() => <CartScreen userdata={userdata} />}

            />
        </Tab.Navigator>
        // </SafeAreaView>


    );
}
const styles = StyleSheet.create({
    topbar: {
        backgroundColor: COLORS.lightbluebtn,
        paddingTop: "9.5%",
        height: "9%",
        opacity: 0.9
    },

})