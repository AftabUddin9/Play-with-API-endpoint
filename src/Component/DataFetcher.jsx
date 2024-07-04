import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    return (
        <div>
            <h1>Data from /{endpoint}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataFetcher