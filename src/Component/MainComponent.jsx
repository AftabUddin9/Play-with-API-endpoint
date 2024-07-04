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
        <div className="flex my-6 mx-4">
            <div className='flex flex-col gap-y-8 mx-2 my-2'>
                {
                    sites.map((site) => {
                        return (
                            <div key={site.id} className='flex flex-col gap-y-2 m-2 p-2'>
                                <button className='btn-main capitalize text-center justify-between hover:bg-pink-400 active:text-white' style={{ backgroundColor: activeButton === site.id ? "red" : "white" }}
                                    onClick={() => buttonClicked(site.id, site.endpoint)}>
                                    {site.endpoint}
                                </button>
                            </div>
                        );
                    })
                }
            </div>
            {selectedEndpoint && <DataFetcher endpoint={selectedEndpoint} />}
        </div>
    );
};

export default MainComponent