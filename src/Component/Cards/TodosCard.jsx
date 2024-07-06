import React from 'react'

const TodosCard = ({ data }) => {
    return (
        <div className=''>
            {data.map((data) =>
            (
                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto">
                    <div className="border-solid border-b-2 border-gray-700 flex justify-between items-center mb-4">
                        <span className="text-gray-600">User ID: {data.userId}</span>
                        <span className="text-gray-600">ID: {data.id}</span>
                    </div>
                    <h2 className="border-solid border-b-2 border-gray-700 text-lg mb-2">{data.title}</h2>
                    <p className="italic text-gray-700">Completed: {data.completed ? "YES" : "NO"}</p>
                </div>
            ))}
        </div>
    )
}

export default TodosCard