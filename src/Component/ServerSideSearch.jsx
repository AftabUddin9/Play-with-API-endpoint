import React, { useState } from 'react'

const ServerSideSearch = ({ setServerSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        setServerSearch(searchTerm);
    };

    return (
        <div className='flex flex-row gap-4'>
            <input
                type='text'
                placeholder='Server-side search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='grow border p-2 mb-4 rounded-lg text-slate-700'
            />
            <button onClick={handleSearch} className='bg-violet-500 text-white p-2 rounded mb-4'>
                Search
            </button>
        </div>
    )
}

export default ServerSideSearch