import React from "react"
import CategoryItem from "../CategoryItem/CategoryItem"
import "./Categories.css"

export default function Categories() {
    return (
        <div className="categories" id="categories">

            <section className="title-section">
                <h3 className="title">Browse the Range</h3>
                <p className="subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </section>

            <section className="categories-container container">
                <div className="categories-wrapper row">
                    <CategoryItem
                        title={"Dining"}
                        img={"/images/categories/img-1.png"}
                    />
                    <CategoryItem
                        title={"Living"}
                        img={"/images/categories/img-2.png"}
                    />
                    <CategoryItem
                        title={"Bedroom"}
                        img={"/images/categories/img-3.png"}
                    />
                </div>
            </section>

        </div>
    )
}