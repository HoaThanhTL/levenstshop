import React from 'react';
import './button.css';

const Signup = () => {
    return (
        <div>
            <button type="button" className="icon-button" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus"></span>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
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
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
