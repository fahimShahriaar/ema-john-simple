import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const precisions = (num) => Number(Number(num).toFixed(2));
    let shipping = 0;
    if (total > 0) {
        shipping = precisions(4.99);
    }
    const tax = precisions(total / 10);
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Ordered Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <p><small>items: ${precisions(total)}</small></p>
            <p><small>Shipping: ${shipping}</small></p>
            <p><small>Tax: ${tax}</small></p>
            <h3>Order Total: ${precisions(grandTotal)}</h3>
        </div>
    );
};

export default Cart;