import React from 'react'
import { Link } from 'react-router-dom'
import "./HeaderSection.css"

export default function HeaderSection({ title, link }) {
    return (
        <header className='headersection'>
            <div className="wrapper">
                <h1>{title}</h1>
                <p><Link className='link' to="/">Home</Link> {`>`} <Link className='link' to={`${link}`}>{title}</Link></p>
            </div>
        </header >
    )
}
