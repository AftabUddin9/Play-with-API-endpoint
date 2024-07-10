import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PostsCard from './Cards/PostsCard.jsx';
// import CommentsCard from './Cards/CommentsCard.jsx';
// import AlbumsCard from './Cards/AlbumsCard.jsx';
// import PhotosCard from './Cards/PhotosCard.jsx';
// import TodosCard from './Cards/TodosCard.jsx';
// import UsersCard from './Cards/UsersCard.jsx';
// import Pagination from './Pagination.jsx';
import ReactPaginate from 'react-paginate';
import CardComponent from './CardComponent.jsx';

const DataFetcher = ({ endpoint }) => {
    const [data, setData] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    const limit = 10;
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${endpoint}?_page=1&_limit=${limit}`);
                setData(response?.data);
                const total = response.headers.get("x-total-count");
                setPageCount(Math.ceil(total / limit));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [endpoint]);


    const fetchalldata = async (currentPage) => {
        const res = await fetch(
            `${baseUrl}/${endpoint}?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1
        const dataFetched = await fetchalldata(currentPage);
        setData(dataFetched);
    }


    // let Component;
    // switch (endpoint) {
    //     case 'posts':
    //         Component = PostsCard;
    //         break;
    //     case 'comments':
    //         Component = CommentsCard;
    //         break;
    //     case 'albums':
    //         Component = AlbumsCard;
    //         break;
    //     case 'photos':
    //         Component = PhotosCard;
    //         break;
    //     case 'todos':
    //         Component = TodosCard;
    //         break;
    //     case 'users':
    //         Component = UsersCard;
    //         break;
    //     default:
    //         Component = null;
    // }

    return (
        <div className="container">
            <CardComponent data={data} />
            {/* {Component ?
                <div className=' flex items-center justify-between'>
                    {
                        data && (<Component data={data} />)
                    }

                </div>
                : <div>No data available!</div>

            } */}
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default DataFetcher