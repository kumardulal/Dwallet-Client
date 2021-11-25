// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTopTabsNav from '../routes/HomeTopTabsNav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WalletScreen from '../../screen/WalletScreen';
import { SafeAreaView } from 'react-native-safe-area-context';




//home screen is the js of routing after login ......................
//it has -shopstore and Wallet tabs
//hometotabnav is also navigation inside shope store tab

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function NavWallet({ userdata }) {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="WalletScreen"
                children={() => <WalletScreen userdata={userdata} />}


            />
        </Stack.Navigator>
    )
}
function NavShop({ userdata }) {

    return (
        <>

            <HomeTopTabsNav userdata={userdata} />

        </>

    )
}

function HomeScreenNav({ route }) {
    //param here props from welcomeScreen -homescreennav- to down -Dwallet Tab navigater - component function NavWallet
    //do not erase the upper text 
    const data = route.params?.data;

    return (
        <Tab.Navigator  >

            <Tab.Screen
                name="ShopStore"

                children={() => <NavShop userdata={data} />}
                // component={NavShop}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shop" size={32} color={color} />

                        // <Ionicons name="ios-home" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="DWallet"
                children={() => <NavWallet userdata={data} />}
                // component={NavWallet}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Icon name="money" size={32} color={color} />
                        // <Ionicons name="ios-wallet" size={size} color={color} />

                    )
                }} />
        </Tab.Navigator>
    );
}



export default HomeScreenNav;



//$$$$$$$$this is to render the params sent by parent component 
// const userprops = () => {
    //     React.useEffect(() => {
    //         if (route.params?.data) {
    //             // Post updated, do something with `route.params.post`
    //             // For example, send the post to the server
    //             const data = () => { return route.params.data }

    //         }
    //     }, [route.params?.data]);
    // }
    // userprops.data()
