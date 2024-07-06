import React from 'react';

const UsersCard = ({ data }) => {
    return (
        <div>
            {data.map((user) => (
                <div key={user.id} className="bg-gray-300 shadow-md rounded-lg p-6 mb-4 max-w-md mx-auto">
                    <div className="border-solid border-b-2 border-gray-700 flex justify-between items-center mb-4">
                        <span className="text-gray-600">ID: {user.id}</span>
                        <span className="text-gray-600">Username: {user.username}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{user.name}</h2>
                    <p className="text-gray-700 mb-2">Email: {user.email}</p>
                    <p className="text-gray-700 mb-2">Phone: {user.phone}</p>
                    <p className="text-gray-700 mb-2">Website: {user.website}</p>
                    <div className="mb-2">
                        <h3 className="text-lg font-bold">Address:</h3>
                        <p className="text-gray-700">Street: {user.address.street}</p>
                        <p className="text-gray-700">Suite: {user.address.suite}</p>
                        <p className="text-gray-700">City: {user.address.city}</p>
                        <p className="text-gray-700">Zipcode: {user.address.zipcode}</p>
                        <p className="text-gray-700">Geo: {user.address.geo.lat}, {user.address.geo.lng}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Company:</h3>
                        <p className="text-gray-700">Name: {user.company.name}</p>
                        <p className="text-gray-700">Catch Phrase: {user.company.catchPhrase}</p>
                        <p className="text-gray-700">BS: {user.company.bs}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersCard;
