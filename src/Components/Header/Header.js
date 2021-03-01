import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <ul>
                    <li><a href="./shop">Shop</a></li>
                    <li><a href="./review">Order Review</a></li>
                    <li><a href="./manage">Manage Inventory Here</a></li>
                </ul>   
            </nav>
            
            <div className="search-bar">
                <input type="search" name="" id="search-field" placeholder="type here to search"/>
                <FontAwesomeIcon icon={faShoppingCart} className="fontColor"/>
            </div>
        </div>
    );
};

export default Header;