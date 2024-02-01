import React, { useState } from 'react'
import ProductBox from '../ProductBox/ProductBox'
import { products } from '../../data'
import "./AllProducts.css"
import { Link } from 'react-router-dom'

export default function AllProducts() {

    const [productsData, setProductsData] = useState(products)

    return (
        <div className='all-products'>
            <section className="title-section">
                <h3 className="title">All Products</h3>
            </section>
            <div className="all-product-section">
                <div className="container">
                    <div className="all-product-wrapper row">
                        {productsData.map(item => (
                            <ProductBox {...item} />
                        ))}
                    </div>
                    <div className="btn-container">
                        <Link to="/shop" className="link">
                            <button className="see-more-btn">
                                See more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
