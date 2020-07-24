import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { selectCartItems } from "./cart.selectors";
import UserActionTypes from "../user/user.types";
import { CartActionTypes } from "./cart.types";
import {
	clearCart,
	setCartFromFirebase,
	updateCartInFirebaseLogger,
} from "./cart.actions";
import {
	getCurrentUser,
	firestore,
	getUserCartRef,
} from "../../firebase/firebase.utils";

export function* getCartFromFirebase({ payload: user }) {
	const cartRef = yield getUserCartRef(user.id);
	const snapshot = yield cartRef.get();
	const cartItems = yield snapshot.data().cartItems;
	yield put(setCartFromFirebase(cartItems));
}

export function* updateCartInFirebase() {
	const userAuth = yield getCurrentUser();
	if (!userAuth) return;
	try {
		const cartItems = yield select(selectCartItems);
		const cartDocRef = yield getUserCartRef(userAuth.uid);
		yield cartDocRef.update({ cartItems });
		yield put(updateCartInFirebaseLogger());
	} catch (error) {
		console.log(error);
	}
}

export function* clearCartInFirebase() {
	const userAuth = yield getCurrentUser();
	if (!userAuth) return;
	yield firestore.doc(`carts/${userAuth.uid}`).delete();
}

export function* clearCartOnSignout() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignout);
}

export function* onCheckoutSuccess() {
	yield takeLatest(UserActionTypes.CHECKOUT_SUCCESS, clearCartOnSignout);
}

export function* onCartChange() {
	yield takeLatest(
		[
			CartActionTypes.ADD_ITEM,
			CartActionTypes.REMOVE_ITEM,
			CartActionTypes.CLEAR_ITEM_FROM_CART,
		],
		updateCartInFirebase
	);
}

export function* onSignInSuccess() {
	yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getCartFromFirebase);
}

export function* cartSagas() {
	yield all([
		call(onSignOutSuccess),
		call(onCheckoutSuccess),
		call(onCartChange),
		call(onSignInSuccess),
	]);
}
