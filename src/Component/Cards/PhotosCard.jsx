import React from 'react'

const PhotosCard = ({ data }) => {
    return (
        <div>
            {data.map((photo) => (
                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto">
                    <h2 className="border-solid border-b-2 border-gray-700 text-base font-bold mb-2">{photo.title}</h2>
                    <div className='flex flex-row justify-between'>

                        <div className="flex flex-col items-start mb-4">
                            <div className="text-gray-600">Album ID: {photo.albumId}</div>
                            <div className="text-gray-600">ID: {photo.id}</div>
                        </div>
                        <div>
                            <img src={photo.thumbnailUrl} alt={photo.title} className="mb-4" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PhotosCard