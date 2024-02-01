import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <header className="header" id="header">
            <div className="header-wrapper row w-100">
                <div className="text-container col-lg-6 col-md-11 col-sm-11">
                    <p className="subtext">New Arrival</p>
                    <h2 className="title">Discover Our</h2>
                    <h2 className="title">New Collection</h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nobis, reprehenderit?Lorem ipsum dolor sit amet.
                    </p>
                    <Link to="/shop" className="link">
                        <button>Buy Now</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}