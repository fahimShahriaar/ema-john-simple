import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('added product', product);
        setCart([...cart, product])
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;