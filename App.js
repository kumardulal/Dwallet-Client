import React from 'react';

import WelcomeScreen from './app/screen/WelcomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './app/screen/RegistrationScreen';
import HomeScreenNav from './app/components/routes/HomeScreenNav';
import ProductDetailScreen from './app/screen/ProductDetailScreen';
import Checkout from './app/screen/Checkout';
import PlaceOrder from './app/screen/PlaceOrder';


// import ProductView from './app/components/ProductView';
// import WalletScreen from './app/screen/WalletScreen';
// import ImagePicker from './app/components/ImagePicker'



const Stack = createStackNavigator();
function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>


        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <Stack.Screen name="HomeScreenNav" component={HomeScreenNav} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
        <Stack.Screen name="CheckOutScreen" component={Checkout} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />


        {/* useless for now  */}
        {/* <Stack.Screen name="ProductView" component={ProductView} />
        <Stack.Screen name="WalletScreen" component={WalletScreen} />
        <Stack.Screen name="Imagepicker" component={ImagePicker} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;


