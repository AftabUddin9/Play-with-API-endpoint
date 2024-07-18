import React, { useState } from 'react'
import DataFetcher from './DataFetcher';

const MainComponent = () => {
    const sites = [
        { id: 1, endpoint: 'posts' },
        { id: 2, endpoint: 'comments' },
        { id: 3, endpoint: 'albums' },
        { id: 4, endpoint: 'photos' },
        { id: 5, endpoint: 'todos' },
        { id: 6, endpoint: 'users' },
    ];

    const [selectedEndpoint, setSelectedEndpoint] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    const buttonClicked = (id, endpoint) => {
        setSelectedEndpoint(endpoint);
        setActiveButton(id);
    };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-bold border-b-2 border-b-rose-700'>PLAY WITH API ENDPOINTS</h1>
            <div>
                <div className='flex justify-center mb-3'>
                    {sites.map((site) => (
                        <button
                            key={site.id}
                            className={`rounded-lg mx-2 p-2 capitalize text-center justify-between ${
                                activeButton === site.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                            } hover:bg-blue-300`}
                            onClick={() => buttonClicked(site.id, site.endpoint)}
                        >
                            {site.endpoint}
                        </button>
                    ))}
                </div>
                <div className=''>
                    {activeButton && selectedEndpoint && <DataFetcher endpoint={selectedEndpoint} />}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;