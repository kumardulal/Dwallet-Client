import Axios from 'axios';
import React from 'react';
import { View } from "react-native";

function AddToCart(cartedproductid, cartuserid) {

    Axios.post("http://192.168.254.102:8000/api/post/addtocart", {
        cartedproductid: cartedproductid,
        cartuserid: cartuserid
    }).then((response) => {
        alert("successfully item  added to cart")
        //getting auto generated cartid origin from database id val)
        // setnotecartid(response.data.insertId)
    }).catch = (err) => {
        console.log(err)
    }

}

export default AddToCart;