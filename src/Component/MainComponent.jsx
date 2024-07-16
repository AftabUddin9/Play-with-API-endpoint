import React, { useState } from 'react'
import DataFetcher from './DataFetcher';
import ClientSideSearch from './ClientSideSearch';
import SearchResults from './SearchResults';
import ServerSideSearch from './ServerSideSearch';

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
    const [clientSearch, setClientSearch] = useState('');
    const [serverSearch, setServerSearch] = useState('');
    const [clientData, setClientData] = useState([]);
    const [serverData, setServerData] = useState([]);

    const buttonClicked = (id, endpoint) => {
        setSelectedEndpoint(endpoint);
        setActiveButton(id);
        setClientSearch('');
        setServerSearch('');
    };

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-xl font-bold border-b-2 border-b-rose-700'>PLAY WITH API ENDPOINTS</h1>
            <div>
                <div className='flex justify-center mb-4'>
                    {sites.map((site) => {
                        return (
                            <button key={site.id} className={`rounded-lg mx-2 p-2 capitalize text-center justify-between ${activeButton === site.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} hover:bg-blue-300`}
                                onClick={() => buttonClicked(site.id, site.endpoint)}>
                                {site.endpoint}
                            </button>
                        );
                    })}
                </div>
                <div className='flex gap-4'>
                    {/* column for client side search */}
                    <div className='w-1/4'>
                        <ClientSideSearch clientSearch={clientSearch} setClientSearch={setClientSearch} />
                        <SearchResults data={clientData} />
                    </div>
                    {/* cards for endpoint buttons */}
                    <div className='w-2/4'>
                        {activeButton && selectedEndpoint &&
                            <DataFetcher
                                endpoint={selectedEndpoint}
                                clientSearch={clientSearch}
                                serverSearch={serverSearch}
                                setClientData={setClientData}
                                setServerData={setServerData}
                            />
                        }
                    </div>
                    {/* column for server side search */}
                    <div className='w-1/4'>
                        <ServerSideSearch setServerSearch={setServerSearch} />
                        <SearchResults data={serverData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent