import Axios from "axios"
import ApiAddress from "./ApiAddress"

export default function FetchOrderItems(orderitems, userdata) {
    console.log(orderitems, "this is the order")
    const username = userdata.username
    const productid = orderitems[0].productid
    const quantity = orderitems[0].quantity
    const totalprice = orderitems[0].quantity * orderitems[0].productprice
    // const quantity = orderitems.quantity

    Axios.post(`${ApiAddress.httpaddress}/api/postorders`, {
        username: username,
        productid: productid,
        quantity: quantity,
        totalprice: totalprice
    }).then((res) => {
        alert("success")
    }).catch = (err) => {
        console.log(err)
    }
}
