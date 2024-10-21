import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './button.css';

const CartBtn = () => {
    const state = useSelector((state) => state.addItem);

    return (
        <>
            <NavLink to="/cart" className="icon-button ms-2">
                <span className="item-count"> ({state.length})</span>
            </NavLink>
        </>
    );
};

export default CartBtn;
