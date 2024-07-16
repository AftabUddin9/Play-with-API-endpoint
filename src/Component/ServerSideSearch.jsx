import React, { useState } from 'react'

const ServerSideSearch = ({ setServerSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        setServerSearch(searchTerm);
    };

    return (
        <div className='flex flex-row justify-between'>
            <input
                type='text'
                placeholder='Server-side search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='border p-2 mb-4 rounded-lg'
            />
            <button onClick={handleSearch} className='bg-blue-500 text-white p-2 rounded mb-4'>
                Search
            </button>
        </div>
    )
}

export default ServerSideSearch