import React from 'react';
import { useState, useEffect } from 'react';
import { retrieveSeries, retrieveHeros, retrieveEvents } from '../api/marvelAPI';

// import type { UserData } from "../interfaces/UserData";
import auth from '../utils/auth';

interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    series: string[];
    events: string[];
    comics: string[];
    thumbnail: {
        path: string;
        extension: string;
    };
}

const UserList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [characters, setCharacters] = useState<MarvelCharacter[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setCharacters([]);
            return;
        }

        const delayDebounceFn = setTimeout(async () => {
            setLoading(true);
            try {
                //    const heroDesc = await MarvelService.getHeroDesc(searchTerm);
                const heroComics = await retrieveHeros(searchTerm);
                const heroEvents = await retrieveEvents(searchTerm);
                const heroSeries = await retrieveSeries(searchTerm);

                setCharacters([
                    {
                        id: 1,
                        name: searchTerm,
                        description: searchTerm,
                        series: heroSeries,
                        comics: heroComics,
                        events: heroEvents,
                        thumbnail: {
                            path: '.path to picture',
                            extension: 'jpg',
                        },
                    },
                ]);
            } catch (error) {
                console.error("Error fetching Marvel characters", error);
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
                                    style={{ width: '100px', height: '100px' }}
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
