import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import CartScreen from '../../screen/CartScreen';
import ShopScreen from '../../screen/ShopScreen';

const Tab = createMaterialTopTabNavigator();
export default function HomeTopTabsNav({ userdata }) {

    return (
        <Tab.Navigator
            style={styles.topbar}

            tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
                style: {

                    backgroundColor: '#04356d',

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



    );
}
const styles = StyleSheet.create({
    topbar: {
        backgroundColor: '#04356d',
        paddingTop: "6%"
    },

})