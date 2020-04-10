import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>
{
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_WBlX1ihuh1MXSaIvnOyQJHlq00VBI5aHAE";
    return <StripeCheckout label='Pay Now' name='CRWN Clothing Ltd.' billingAddress shippingAddress stripeKey={publishableKey}
    image='https://sendeyo.com/up/d/f3eb2117da' description={`Your total is $${price}`} amount={priceForStripe} panelLabel='Pay Now' token={onToken}/>
}

export default StripeCheckoutButton;