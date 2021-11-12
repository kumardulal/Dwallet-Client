import Axios from 'axios';
import ApiAddress from './ApiAddress'
function AddToCart(cartedproductid, cartuserid) {

    //used in ProductView COMPONENT and pRODUCTDETAIL SCREEN
    Axios.post(`${ApiAddress.httpaddress}/api/post/addtocart`, {
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