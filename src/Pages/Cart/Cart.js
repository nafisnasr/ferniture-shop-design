import React from 'react'
import HeaderSection from "../../Components/HeaderSection/HeaderSection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import "./Cart.css"

export default function Cart() {
  return (
    <>
      <HeaderSection
        title={"Cart"}
        link={"/cart"}
      />
      <div className="cart">
        <div className="cart-wrapper w-100 row">
          <div className="col-lg-8">

            <table class="table cart-container">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className='main-col'>
                  <td>
                    <img
                      src="/images/products/img-1.png"
                      alt="Product"
                    />
                  </td>
                  <td>
                    Asgard Sofa
                  </td>
                  <td>25000000</td>
                  <td>1</td>
                  <td>25000000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-lg-4">
            <div className="price-container">
              <h3 className="title">Total Prices</h3>
              <div className="items-prices">
                <span className="name">asgard sofa</span>
                <span className="price">25000000</span>
              </div>
              <div className="total">
                <span>total Price:</span>
                <span className="total-price">25000000</span>
              </div>
              <div className="btn-container">
                <button className="checkout-btn">Check Out</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ServicesSection />
    </>
  )
}
