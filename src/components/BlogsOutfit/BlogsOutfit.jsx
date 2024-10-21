import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../../Data';
import './BlogsOutfit.css';

const BlogsOutfit = () => {
    const productListRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const productsToShow = DATA.filter(item => item.category === 'styling');

    const cardItem = (item) => (
        <div className="product" key={item.id}>
            <img src={item.img} alt={item.title} />
            <NavLink to={`/blogs/outfit/${item.id}`}>
                <h3>{item.title}</h3>
            </NavLink>
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

    return (
        <div className="product-section">
            <div className="products" 
                ref={productListRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {productsToShow.map(cardItem)}
            </div>
            <div className="view-all">
                <NavLink to="/products" className="view-all-link">Xem tất cả</NavLink>
            </div>
        </div>
    );
};

export default BlogsOutfit;
