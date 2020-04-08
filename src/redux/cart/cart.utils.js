export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => {        
        console.log (cartItem, cartItemToAdd)
        console.log(cartItem, cartItem.id, cartItemToAdd.id, cartItem.id === cartItemToAdd.id);
        return cartItem.id === cartItemToAdd.id});


    if (existingCartItem) {
        console.log("Item already in cart!");
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem)
    }

    console.log("Item not in cart");

    return [...cartItems, {cartItemToAdd, quantity: 1}]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?  {...cartItem, quantity: cartItem.quantity - 1} : cartItem)

}