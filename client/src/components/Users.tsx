import React from 'react';
import { useState } from 'react'

import type { UserData } from "../interfaces/UserData";
import auth from '../utils/auth';

// Define the props for the component
interface UserListProps {
    users: UserData[] | null; // users can be an array of UserData objects or null
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filterUsers = users ? users.filter((user) => 
        user.username?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];
    return (
        <>
            <h2 className="pb-5">
               Hey {auth.getProfile().username}, search your favorite marvel characters!
            </h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search Charcters..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-control"
                />
            </div>

            {filterUsers.length > 0 ? (
                filterUsers.map((user) =>(
                    <div className='row align-center mb-5' key={user.id}>
                        <div className='col-mb-5'>
                            <h3>{user.id}. {user.username}</h3>
                        </div>
                    </div>
                ))
            ) : (
                <p>No users found. Try a different search!</p>
            )}
        </>
    );
};

export default UserList;
