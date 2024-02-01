import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import "./Navbar.css"

export default function Navbar() {
    const [showShoppingCart, setShowShoppingCart] = useState(false)
    const clickedShopp = () => { setShowShoppingCart(prev => !prev) }

    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center" id='navbar'>
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="Ferniro" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="nav-container p-2  w-100">
                            <ul className="navbar-nav list">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                            </ul>
                            <div className="navbar-nav icon-container">
                                <button className="icon-box">
                                    < FiUser className='icon' />
                                </button>
                                <button className="icon-box" onClick={clickedShopp}>
                                    <CiShoppingCart className='icon' />
                                </button>
                                <button className="icon-box">
                                    <CiSearch className='icon' />
                                </button>
                                <button className="icon-box">
                                    <FaRegHeart className='icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {showShoppingCart && (
                <div className="shopping-cart">
                    <h5>Shopping Cart</h5>
                    <div className="shopping-container">
                        <p>Your Bucket is Empty!</p>
                    </div>
                    <Link className='link' to="/cart">
                        <button>Go to Cart</button>
                    </Link>
                </div>
            )}
        </>
    )
}
