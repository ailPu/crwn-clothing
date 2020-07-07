import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51H2FJILXoE0RkQdqqTr47PxxNU1bADu9wGeegOgLhWpxgSIAZOcejqHRStRZv4T4QmcI5JkCdT9a1IE4Gi3bzFlM009gpguurz";
	//! token ist die Callback Funktion und würde dann zum backend fahren, was hier nicht passiert
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
