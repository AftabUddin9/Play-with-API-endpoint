import React from 'react'

const ClientSideSearch = ({ clientSearch, setClientSearch }) => {
    return (
        <div className='flex flex-col'>
            <input
                type='text'
                placeholder='Client-side Search'
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
                className='border p-2 mb-4 rounded-lg'
            />
        </div>
    )
}

export default ClientSideSearch