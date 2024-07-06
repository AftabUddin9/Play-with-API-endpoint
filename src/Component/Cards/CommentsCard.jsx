import React from 'react'

const CommentsCard = ({ data }) => {
    return (
        <div className=''>
            {data.map((data) =>
            (
                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto">
                    <div className="border-solid border-b-2 border-gray-700 flex justify-between items-center mb-4">
                        <span className="text-gray-600">Post ID: {data.postId}</span>
                        <span className="text-gray-600">ID: {data.id}</span>
                    </div>
                    <h2 className="border-solid border-b-2 border-gray-700 text-xl font-bold mb-2">{data.name}</h2>
                    <p className="italic text-gray-700">{data.email}</p>
                    <p className="text-gray-700">{data.body}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsCard