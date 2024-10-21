import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

const Product = () => {
    const cardItem = (item) => {
        return (
            <div className="col-md-4" key={item.id}>
                <div className="card my-3" style={{ width: "100%" }}>
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">{item.price} VND</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    );
};

export default Product;
