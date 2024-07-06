import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostsCard from './Cards/PostsCard.jsx';
import CommentsCard from './Cards/CommentsCard.jsx';
import AlbumsCard from './Cards/AlbumsCard.jsx';
import PhotosCard from './Cards/PhotosCard.jsx';
import TodosCard from './Cards/TodosCard.jsx';
import UsersCard from './Cards/UsersCard.jsx';

const DataFetcher = ({ endpoint }) => {
    const [data, setData] = useState([]);
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
            {Component ? <Component data={data} /> : <div>No data available!</div>}
        </div>
    );
};

export default DataFetcher