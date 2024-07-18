import React from 'react';

const ClientSearch = ({ setClientSearch }) => {
    const handleSearch = (event) => {
        setClientSearch(event.target.value);
    };

    return (
        <input
            type="text"
            className="text-black border p-2 rounded w-1/2 mr-4"
            placeholder="Client-side Search..."
            onChange={handleSearch}
        />
    );
};

export default ClientSearch;
