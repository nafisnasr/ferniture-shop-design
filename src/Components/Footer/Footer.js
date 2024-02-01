import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {

    const [emailAddress, setEmailAddress] = useState("")
    const [clicked, setClicked] = useState(false)
    const subscribeHandler = () => {
        setEmailAddress("")
        setClicked(true)
    }


    return (
        <footer className='footer'>
            <div className="footer-wrapper row">
                <div className="col-lg-4 col-md-3 col-6">
                    <div className="first-col footer-col">
                        <h4 className="title">Funiro</h4>
                        <span className="text">400 university Drive suite 200 coral</span>
                        <span className="text">Gables,</span>
                        <span className="text">FL 33134 USA</span>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <div className="second-col footer-col">
                        <p className='title'>Links</p>
                        <div className="list">
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/shop" className='link'>Shop</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link'>About</Link>
                            </li>
                            <li>
                                <Link to="/contact" className='link'>Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-6">
                    <div className="third-col footer-col">
                        <p className='title'>Help</p>
                        <div className='list'>
                            <li>
                                <Link to="/" className='link'>Payment Options</Link>
                            </li>
                            <li>
                                <Link to="/" className='link'>Returns</Link>
                            </li>
                            <li>
                                <Link to="/" className='link'>Privacy Policies</Link>
                            </li>
                            <li>
                                <Link to="/" className='link'>Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-6">
                    <div className="forth-col footer-col">
                        <p className="title">Newsletter</p>
                        <div className="subscribe-container">
                            <input
                                type="text"
                                placeholder='Enter Your Email Address'
                                value={emailAddress}
                                onChange={event => setEmailAddress(event.target.value)}
                            />
                            <button
                                onClick={subscribeHandler}
                                className={`subscribe-btn ${clicked && `subscribed`}`}
                            >
                                {clicked ? "SUBSCRIBED !" : "SUBSCRIBE"}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="copyright-container">
                <p>2023 furino. All rights reverved</p>
            </div>
        </footer>
    )
}
