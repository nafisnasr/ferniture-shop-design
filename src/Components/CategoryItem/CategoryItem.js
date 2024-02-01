import React from 'react'
import "./CategoryItem.css"

export default function CategoryItem({title,img}) {
    return (
        <div className="col-lg-3 col-md-5 col-8 ">
            <div className="category-box">
                <img
                    src={img}
                    alt={title}
                    className="container-fluid category-img"
                />
                <p className="text">{title}</p>
            </div>
        </div>)
}
