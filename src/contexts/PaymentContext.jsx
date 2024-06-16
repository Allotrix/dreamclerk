import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

const PaymentState = ({ children }) => {
    const [checkoutForm, setCheckoutForm] = useState({
        fullName: "",
        email: "",
        phoneNo: "",
        addressLine1: "",
        addressLine2: "", 
        country: "India",
        city: "",
        pinCode: "",
        state: ""
    });

    const paymentData = {
        ...checkoutForm,
        address: checkoutForm.addressLine1 + "" + checkoutForm.addressLine2,
        merchantTransactionId: `${checkoutForm.phoneNo.substring(0,7)}${checkoutForm.fullName.substring(0,7)}`,
        merchantUserId: `${checkoutForm.fullName.substring(0,7)}${checkoutForm.email.substring(0,7)}`
    }

    const checkoutData = {
        "merchantId": "M22NXKDJPMF54",
        "merchantTransactionId": paymentData.merchantTransactionId,
        "merchantUserId": paymentData.merchantUserId,
        "amount": 209000,
        "redirectUrl": `https://allotrix.com/`,
        "redirectMode": "REDIRECT",
        "mobileNumber": `${paymentData?.phoneNo}`,
        "paymentInstrument": {
            "type": "PAY_PAGE"
        }
    }

    const writeDataToSheet = async (data) => {
        try {
            await fetch('https://sheetdb.io/api/v1/yypaboy966mrd', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: {
                        'Name': data.fullName,
                        'Email': data.email,
                        "Phone": data.phoneNo,
                        'Address': data.address,
                        'City': data.city,
                        'State': data.state,
                        'Pincode': data.pinCode,
                        'Country':data.country,
                    }
                })
            });
        } catch (error) {
            console.error('Error updating sheet:', error);
        }
    }

    return (
        <PaymentContext.Provider value={{ checkoutForm, setCheckoutForm, checkoutData, writeDataToSheet }}>
            {children}
        </PaymentContext.Provider>
    )
}

export default PaymentState;
