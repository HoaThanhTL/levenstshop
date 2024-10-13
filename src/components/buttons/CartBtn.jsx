import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './button.css';

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="icon-button ms-2">
                <span className="fa fa-shopping-cart"></span>
                <span className="item-count"></span> ({state.length})
            </NavLink>
        </>
    )
}


export default CartBtn
