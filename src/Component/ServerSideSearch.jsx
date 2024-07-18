import React from 'react';

const ServerSearch = ({ setServerSearch }) => {
    const handleSearch = (event) => {
        setServerSearch(event.target.value);
    };

    return (
        <input
            type="text"
            className="text-black border p-2 rounded w-1/2 ml-4"
            placeholder="Server-side Search..."
            onChange={handleSearch}
        />
    );
};

export default ServerSearch;
