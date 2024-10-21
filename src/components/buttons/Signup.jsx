import React from 'react';
import './button.css';

const Signup = () => {
    return (
        <div className="form-container">
            <form className="scrollable-form">
                <div className="scrollable-content">
                    <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">Username</label>
                        <input type="text" className="form-control" id="usernameInput" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupEmailInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="signupEmailInput" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="signupPasswordInput" className="form-label">Password</label>
                        <input type="password" className="form-control" id="signupPasswordInput" />
                    </div>
                </div>
                <div className="fixed-button-container">
                    <button type="submit" className="btn btn-outline-primary w-100">Đăng ký</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
