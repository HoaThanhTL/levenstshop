import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../../Data';
import './ProductHome.css';

const ProductHome = () => {
    const [category, setCategory] = useState('bestSeller');
    const productListRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [underlinePosition, setUnderlinePosition] = useState(0);
    const [underlineWidth, setUnderlineWidth] = useState(0); 

    const productsToShow = DATA.filter(item => item.category === category);

    const cardItem = (item) => (
        <div className="product" key={item.id}>
            <img src={item.img} alt={item.title} />
            <NavLink to={`/products/${item.id}`}>
                <h3>{item.title}</h3>
            </NavLink>
            <p>{item.price} VND <span className="original-price">{item.originalPrice ? item.originalPrice + " VND" : ''}</span></p>
        </div>
    );

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - productListRef.current.offsetLeft);
        setScrollLeft(productListRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - productListRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        productListRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleClick = (e) => {
        const selectedCategory = e.target.dataset.category;
        setCategory(selectedCategory);
        const width = e.target.offsetWidth;
        const left = e.target.offsetLeft;
        setUnderlinePosition(left);
        setUnderlineWidth(width);
    };

    const handleMouseEnter = (e) => {
        const width = e.target.offsetWidth;
        const left = e.target.offsetLeft;
        setUnderlinePosition(left);
        setUnderlineWidth(width);
    };

    return (
        <div className="product-section">
            <div className="product-title">
                <h2 
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    data-category="bestSeller"
                    className={`best-seller ${category === 'bestSeller' ? 'active' : ''}`}
                >
                    BEST SELLER
                </h2>
                <h2 
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    data-category="newArrival"
                    className={`new-arrival ${category === 'newArrival' ? 'active' : ''}`}
                >
                    NEW ARRIVAL
                </h2>
                <div 
                    className="underline" 
                    style={{ 
                        left: underlinePosition, 
                        width: underlineWidth 
                    }} 
                />
                <div className="gray-line" /> 
            </div>

            <div 
                className="products" 
                ref={productListRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {productsToShow.map(cardItem)}
            </div>
            <div className="view-all">
                <NavLink to="/all-products" className="view-all-link">Xem tất cả</NavLink>
            </div>
        </div>
    );
};

export default ProductHome;
