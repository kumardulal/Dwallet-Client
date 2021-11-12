//This is not in use for now because it didnt updated properly the rerender 

import Axios from "axios"
import ApiAddress from "./ApiAddress"


//orign called in = CartView handleCount
// cartid can be replaced with other ids to match the parameters
export default function UpdateCartItemQuantity(mathOperator, cartid, itemQuantity, userid) {



    if (mathOperator === 'plus') {
        itemQuantity = itemQuantity + 1
        storeData;
    }
    else if (mathOperator === 'minus') {
        itemQuantity = itemQuantity - 1
        minusdata;
        getData;
    }
    else {
        console.log("operator cannot match plus or minus")
    }


    Axios.post(`${ApiAddress.httpaddress}/api/post/cartUpdateItemQuantity`, {
        cartid: cartid,
        cartuserid: userid,
        itemQuantity: itemQuantity
        //item carted quantity value for each will be updated in server in execution 
    }).then(() => {
        console.log("item quantity Updated")
        //after update it will render again all data to update the view


    }).catch = (err) => {
        console.log(err)

    }

}
