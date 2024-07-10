import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ data }) => {
    const postsPerPage = 10








    return (
        <div className=''>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item '}
                pageLinkClassName={''}
                previousClassName={'page-item '}
                previousLinkClassName={''}
                nextClassName={'page-item '}
                nextLinkClassName={''}
                breakClassName={'page-item '}
                breakLinkClassName={''}
                activeClassName={'active'}
            />

            {/* {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? 'active' : ''}>{page}</button>
                })
            } */}
        </div>
    );
};

export default Pagination