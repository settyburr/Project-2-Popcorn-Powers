import { useState } from "react";
import { retrieveComics } from "../api/marvelAPI";
import { MarvelCharacter } from "../interfaces/HeroData";
import ErrorPage from "./ErrorPage";

const ComicsPage = () => {
  // State to handle the search term, character data, loading, and errors
  const [searchTerm, setSearchTerm] = useState('');
  const [character, setCharacter] = useState<MarvelCharacter | null>(null);
  const [comics, setComics] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle the search term change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle the search button click
  const handleSearchClick = async () => {
    if (!searchTerm) return; // Don't fetch if search term is empty

    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const data = await retrieveComics(searchTerm);
      if (data && data.length > 0) {
        const characterData = data[0]; // Assuming the first character is the desired one
        setCharacter(characterData);
        setComics(characterData.comics);
      } else {
        setError('Character not found.');
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Marvel Comics Search</h1>
      
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a Marvel character..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
      {/* Search button */}
      <button onClick={handleSearchClick}>Search</button>

      {/* Show loading state */}
      {loading && <p>Loading...</p>}

      {/* Show error message */}
      {error && <ErrorPage />}

      {/* Show character details if available */}
      {character && !loading && !error && (
        <div>
          <h2>{character.name}</h2>
          <p>{character.description || 'No description available.'}</p>

          <h3>Comics:</h3>
          <ul>
            {comics.length > 0 ? (
              comics.map((comic, index) => (
                <li key={index}>{comic}</li>
              ))
            ) : (
              <p>No comics available for this character.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ComicsPage;
