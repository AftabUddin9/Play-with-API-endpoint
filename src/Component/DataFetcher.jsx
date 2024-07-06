import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostsCard from './Cards/PostsCard.jsx';
import CommentsCard from './Cards/CommentsCard.jsx';
import AlbumsCard from './Cards/AlbumsCard.jsx';
import PhotosCard from './Cards/PhotosCard.jsx';
import TodosCard from './Cards/TodosCard.jsx';
import UsersCard from './Cards/UsersCard.jsx';
import Pagination from './Pagination.jsx';

const DataFetcher = ({ endpoint }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = data.slice(firstPostIndex, lastPostIndex)

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/${endpoint}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [endpoint]);

    let Component;
    switch (endpoint) {
        case 'posts':
            Component = PostsCard;
            break;
        case 'comments':
            Component = CommentsCard;
            break;
        case 'albums':
            Component = AlbumsCard;
            break;
        case 'photos':
            Component = PhotosCard;
            break;
        case 'todos':
            Component = TodosCard;
            break;
        case 'users':
            Component = UsersCard;
            break;
        default:
            Component = null;
    }

    return (
        <div className="">
            {Component ? <Component data={currentPosts} /> : <div>No data available!</div>}
            <Pagination totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage} />
        </div>
    );
};

export default DataFetcher