import React from 'react'
import "./ServiceBox.css"

export default function ServiceBox({ img, title, info }) {
    return (
        <div className="col-lg-3 col-md-6 col-11">
            <div className="service-box">
                <img
                    src={img}
                    alt={title}
                />
                <div className="text-box">
                    <h5>{title}</h5>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    )
}
