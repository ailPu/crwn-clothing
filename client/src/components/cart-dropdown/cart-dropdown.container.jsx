import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
	hidden: selectCartHidden,
});

const CartDropDownContainer = ({ hidden }) =>
	hidden ? null : <CartDropdown />;

export default connect(mapStateToProps)(CartDropDownContainer);
