import cartActionTypes from './cart.types';
import CartActiontypes from './cart.types';

export const toggleCartHidden = () => {
    return {type: cartActionTypes.TOGGLE_CART_HIDDEN}
}

export const addItem = item => {
    return {
        type: CartActiontypes.ADD_ITEM,
        payload: item
    }
}

export const clearItemFromCart = item => {
    return {
        type: CartActiontypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

export const removeItem = item => {
    return {type: CartActiontypes.REMOVE_ITEM,
    payload: item}
}