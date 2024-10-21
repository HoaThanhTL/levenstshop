import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import Cart from './Cart';
import CartBtn from './buttons/CartBtn'; // Import CartBtn
import './sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar, initialTab }) => {
    const [activeTab, setActiveTab] = useState(initialTab || 'cart'); // Cập nhật tab dựa vào initialTab
    const [accountTab, setAccountTab] = useState('login');
    const cartItems = useSelector((state) => state.addItem);

    return (
        <>
            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSidebar}>&times;</button>

                <div className="tabs">
                    {/* Hiển thị Tab "Tài khoản" */}
                    <button className={`tab-button ${activeTab === 'account' ? 'active' : ''}`} onClick={() => setActiveTab('account')}>Tài khoản</button>
                    {/* Hiển thị Tab "Giỏ hàng" */}
                    <button className={`tab-button ${activeTab === 'cart' ? 'active' : ''}`} onClick={() => setActiveTab('cart')}>Giỏ hàng</button>
                </div>

                {/* Nội dung của Tab "Giỏ hàng" */}
                {activeTab === 'cart' && (
                    <div className="tab-content">
                        <Cart /> 
                    </div>
                )}

                {/* Nội dung của Tab "Tài khoản" */}
                {activeTab === 'account' && (
                    <div className="account-tab-content">
                        <div className="account-tabs">
                            <button className={`tab-button ${accountTab === 'login' ? 'active' : ''}`} onClick={() => setAccountTab('login')}>Đăng nhập</button>
                            <button className={`tab-button ${accountTab === 'signup' ? 'active' : ''}`} onClick={() => setAccountTab('signup')}>Đăng ký</button>
                        </div>
                        <div className="scrollable-form-content">
                            {accountTab === 'login' ? <Login /> : <Signup />}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Sidebar;
