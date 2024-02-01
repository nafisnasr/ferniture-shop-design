import React from 'react'
import "./ProductBox.css"

export default function ProductBox({ image, title, desc, price, update }) {
  return (
    <div className='col-lg-3 col-md-4 col-6'>
      <div className="product-box">
        <img
          className="product-img"
          src={image}
          alt={title}
        />
        {update &&
          <div
            className={`circle ${update === 'New' ? 'new' : 'discount'}`}
          >
            {update}
          </div>
        }
        <div className="product-text">
          <h5 className="title">{title}</h5>
          <div className="description">{desc}</div>
          <div className="price-box">
            <span>price:</span>
            <span className='price'>{price}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
