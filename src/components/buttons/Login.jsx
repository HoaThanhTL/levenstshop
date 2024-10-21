import React from 'react';
import './button.css';

const Login = () => {
    return (
        <div className="form-container">
            <form className="scrollable-form">
                <div className="scrollable-content">
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="loginPassword" />
                    </div>
                </div>
                <div className="fixed-button-container">
                    <button type="submit" className="btn btn-outline-primary w-100 fixed-button">Đăng nhập</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
