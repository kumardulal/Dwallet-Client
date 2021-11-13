import React, { useState } from 'react'
import Axios from 'axios'
import ApiAddress from '../requests/ApiAddress';
import ButtonsTextName from '../collections/ButtonsTextName';


//parameters of the function should match the positioning of parent function
export default function LinkWalletValidation(username, walletPassword, { setConfirmedStatus }, { setModalVisible }, { setConfirmFinishbtn }) {


    //setConfirmedStatus wil update the text in placeorder page

    //same login api is used to validate the wallet password
    Axios.post(`${ApiAddress.httpaddress}/api/welcomescreen/logintask`, {

        username: username,
        password: walletPassword,

    }).then((response) => {
        if (response.data.message) {
            alert(response.data.message);


        }

        else {
            // handle success
            /// declaring the values of api responnse data of user to send it as props to other child routes .
            // console.log("Successfully LInked from linkWallet Validation")
            setModalVisible(false)
            setConfirmFinishbtn(ButtonsTextName.DoneFinalstep)
            setConfirmedStatus(ButtonsTextName.WalletLinkedStatus)





        }

    }).catch(error => console.log(error));
};



