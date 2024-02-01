import React from 'react';
import "./Pagination.css"

const Paginate = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div className="pagination-container">
            {pageNumbers.map((number) => (
                <div
                    key={number}
                    onClick={() => paginate(number)}
                    className="page-box"
                >
                    {number}
                </div>
            ))}
        </div>
    );
};

export default Paginate;