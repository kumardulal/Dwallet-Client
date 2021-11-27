import Axios from "axios"
import ApiAddress from "./ApiAddress"

export default function FetchOrderItems(orderItems, userdata, { navigation }) {
    console.log(orderItems, "this is the order")
    // const cartid = orderItems.cartid
    const userid = userdata.userid


    Axios.put(`${ApiAddress.httpaddress}/api/postorders`, {
        // cartid: cartid,
        userid: userid,

    }).then((res) => {
        if (res) {
            navigation.navigate("FinishOrder")
        }
        else {
            alert("nonono")
        }

    }).catch = (err) => {
        console.log(err)
    }
}
