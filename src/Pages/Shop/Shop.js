import React, { useEffect, useState } from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import ProductBox from "../../Components/ProductBox/ProductBox"
import { products } from '../../data'
import Pagination from "../../Components/Pagination/Pagination"


export default function Shop() {

    const [productsData, setProductsData] = useState(products)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(8)
    const paginate = (pageNumber) => { setCurrentPage(pageNumber); }
    const totalPages = Math.ceil(productsData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = productsData.slice(startIndex, endIndex);

    useEffect(() => {
        //
    }, []);

    return (
        <>
            <HeaderSection
                title={"Shop"}
                link={"shop"}
            />
            <div className="shop">
                <div className="container">
                    <div className="shop-wrapper row">
                        {currentItems.map(product => (
                            <ProductBox
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </div>
                    <Pagination
                        postsPerPage={itemsPerPage}
                        totalPosts={productsData.length}
                        paginate={paginate}
                    />
                </div>
            </div>
        </>
    )
}
