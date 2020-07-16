import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51H2FJILXoE0RkQdqqTr47PxxNU1bADu9wGeegOgLhWpxgSIAZOcejqHRStRZv4T4QmcI5JkCdT9a1IE4Gi3bzFlM009gpguurz";
	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert("Payment success");
			})
			.catch((error) => {
				console.log("Payment error:", JSON.parse(error));
				alert(
					"There as an issue with your payment. Please make sure you use the provided credit card"
				);
			});
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
