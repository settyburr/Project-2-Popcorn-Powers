import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

// import type { UserData } from "../interfaces/UserData";
import auth from '../utils/auth';

interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const UserList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if(searchTerm === ""){
            setCharacters([]);
            return;
        }

        const delayDebounceFn = setTimeout(async () => {
            setLoading(true);
            try {
                const response = await axios.get('/api/marvel-characters', {
                    params: { nameStartsWith: searchTerm },
                });
                setCharacters(response.data.data.results);
            } catch (error) {
                    console.error("Error fetching Marvel characters:", error);
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

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

    {loading ? (
        <p>Loading...</p>
    ) : (
        characters.length > 0 ? (
            characters.map((character) => (
                <div className='row align-center mb-5' key={character.id}>
                    <div className='col-md-6'>
                        <h3>{character.name}</h3>
                        <p>{character.description || "No description available."}</p>
                    </div>
                    <div className='col-md-6'>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            alt={character.name}
                            style={{width: '100px', height: '100px'}}
                        />
                    </div>
                </div>
            ))
        ) : (
            <p>No characters found. Try a different search!</p>
        )
    )}
    </>
);
};

    
export default UserList;
