import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CardComponent from './CardComponent';
import ClientSearch from './ClientSideSearch';
import ServerSearch from './ServerSideSearch';

const DataFetcher = ({ endpoint }) => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [clientSearch, setClientSearch] = useState('');
    const [serverSearch, setServerSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const limit = 10;
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    // Fetch paginated data
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setIsSearching(false);
            try {
                const response = await axios.get(`${baseUrl}/${endpoint}`, {
                    params: {
                        _page: currentPage,
                        _limit: limit,
                    },
                });
                const total = response.headers['x-total-count'];
                setData(response.data);
                setFilteredData(response.data);
                setPageCount(Math.ceil(total / limit));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };
        if (!serverSearch) {
            fetchData();
        }
    }, [endpoint, currentPage, serverSearch]);

    // Server-side search with pagination
    useEffect(() => {
        const fetchSearchData = async () => {
            setLoading(true);
            setIsSearching(true);
            try {
                const response = await axios.get(`${baseUrl}/${endpoint}`, {
                    params: {
                        q: serverSearch,
                        _page: currentPage,
                        _limit: limit,
                    },
                });
                const total = response.headers['x-total-count'];
                setFilteredData(response.data);
                setPageCount(Math.ceil(total / limit));
            } catch (error) {
                console.error('Error fetching search data:', error);
            }
            setLoading(false);
        };
        if (serverSearch) {
            fetchSearchData();
        } else {
            setFilteredData(data);
        }
    }, [serverSearch, currentPage, endpoint]);

    // Client-side search
    useEffect(() => {
        if (clientSearch) {
            setFilteredData(
                data.filter((item) =>
                    Object.values(item).some((value) =>
                        value.toString().toLowerCase().includes(clientSearch.toLowerCase())
                    )
                )
            );
        } else {
            setFilteredData(data);
        }
    }, [clientSearch, data]);

    const handlePageClick = async (data) => {
        setCurrentPage(data.selected + 1);
    };

    return (
        <div className="container mx-auto p-4 bg-dark min-h-screen">
            <div className="flex justify-between mb-4">
                <ClientSearch setClientSearch={setClientSearch} />
                <ServerSearch setServerSearch={setServerSearch} />
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className=''>
                    <div className="flex overflow-x-auto pb-2 mb-4">
                        <CardComponent data={filteredData} />
                    </div>
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
                        forcePage={currentPage -1}
                    />
                </div>
            )}
        </div>
    );
};

export default DataFetcher;




// import PostsCard from './Cards/PostsCard.jsx';
// import CommentsCard from './Cards/CommentsCard.jsx';
// import AlbumsCard from './Cards/AlbumsCard.jsx';
// import PhotosCard from './Cards/PhotosCard.jsx';
// import TodosCard from './Cards/TodosCard.jsx';
// import UsersCard from './Cards/UsersCard.jsx';
// import Pagination from './Pagination.jsx';

    // const fetchalldata = async (currentPage) => {
    //     const res = await fetch(
    //         `${baseUrl}/${endpoint}?_page=${currentPage}&_limit=${limit}`
    //     );
    //     const data = await res.json();
    //     return data;
    // };

    // const handlePageClick = async (data) => {
    //     console.log(data.selected);
    //     let currentPage = data.selected + 1
    //     const dataFetched = await fetchData(currentPage);
    //     setData(dataFetched);
    // }

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

    /* {Component ?
                <div className=' flex items-center justify-between'>
                    {
                        data && (<Component data={data} />)
                    }

                </div>
                : <div>No data available!</div>
            } */