import React from 'react'
import CardComponent from './CardComponent'

const SearchResults = ({ data }) => {
    return (
        <div className='overflow-y-auto max-h-[500px]'>
            <CardComponent data={data} />
        </div>
    )
}

export default SearchResults