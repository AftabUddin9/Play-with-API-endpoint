import React from 'react'

const CardComponent = ({ data }) => {
    return (
        <div className=''>
            {data.map((data, id) =>
            (
                <div key={id} className="bg-gray-300 shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto">
                    <div className="border-solid border-b-2 border-gray-700 flex justify-between items-center mb-4">
                        <span className="text-gray-600 mb-2">ID: {data.id}</span>
                        <span className="text-gray-600 mb-2">
                            {data.postId ? `Post ID: ${data?.postId}` :
                                data.username ? `Username: ${data?.username}` :
                                    data.albumId ? `Album ID: ${data?.albumId}` :
                                        `User Id: ${data?.userId}`}
                        </span>
                    </div>

                    <div className="border-solid border-b-2 border-gray-700 mb-2">
                        <span className='text-lg font-semibold mb-2'>
                            {data.title ? `Title: ${data?.title}` :
                                `Name: ${data?.name}`}
                        </span>
                        {data.email && <p className="italic text-gray-700 mb-2">{data.email}</p>}
                        {data.completed && <p className="italic text-gray-700 mb-2">Completed: {data.completed ? "YES" : "NO"}</p>}
                        {data.phone && <p className="italic text-gray-700 mb-2">Phone: {data.phone}</p>}
                        {data.website && <p className="italic text-gray-700 mb-2">Website: {data.website}</p>}
                    </div>

                    <div>
                        {data.body && <p className="text-gray-700">{data.body}</p>}
                        {data.thumbnailUrl && <div>
                            <img src={data.thumbnailUrl} alt={data.title} className="mb-4" />
                        </div>}
                        {data.address &&
                            <div className="mb-2">
                                <h3 className="text-lg font-bold">Address:</h3>
                                <p className="text-gray-700">Street: {data?.address?.street}</p>
                                <p className="text-gray-700">Suite: {data?.address?.suite}</p>
                                <p className="text-gray-700">City: {data?.address?.city}</p>
                                <p className="text-gray-700">Zipcode: {data?.address?.zipcode}</p>
                                <p className="text-gray-700">Geo: {data?.address?.geo?.lat}, {data?.address?.geo?.lng}</p>
                            </div>}
                        {data.company &&
                            <div>
                                <h3 className="text-lg font-bold">Company:</h3>
                                <p className="text-gray-700">Name: {data?.company?.name}</p>
                                <p className="text-gray-700">Catch Phrase: {data?.company?.catchPhrase}</p>
                                <p className="text-gray-700">BS: {data?.company?.bs}</p>
                            </div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardComponent