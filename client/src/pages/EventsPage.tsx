import { useState } from "react";
import { retrieveEvents } from "../api/marvelAPI";
import { MarvelCharacter } from "../interfaces/HeroData";
import ErrorPage from "./ErrorPage";

const EventsPage = () => {
 // State to handle the search term, character data, loading, and errors
 const [searchTerm, setSearchTerm] = useState('');
 const [character, setCharacter] = useState<MarvelCharacter | null>(null);
 const [events, setEvents] = useState<string[]>([]);
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
     const data = await retrieveEvents(searchTerm);
   
     if (data.events && data.events.length > 0) {
       let characterData = data; // Assuming the first character is the desired one
       setCharacter(characterData);
       characterData = characterData.events.map((character: { name: object; resourceURI: object}) => {
         return character.name + "%" + character.resourceURI;
       })
       setEvents(characterData);
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
     <h1>Marvel Events Search</h1>
     
     {/* Search bar */}
     <input
       type="text"
       placeholder="Search for a Marvel char..."
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

         <h3>Events:</h3>
         <ul>
           {events.length > 0 ? (
             events.map((events, index) => {
               return <li key={index}>{events.split("%")[0]}</li>
             })
           ) : (
             <p>No events available for this character.</p>
           )}
         </ul>
       </div>
     )}
     {/* Add temp image to the Aside part of the page */}
     <aside>
       <div className="containerImage">
         <img src="./src/assets/images/deadpool.png" alt="Deadpool Image"/>
       </div>
     </aside>
   </div>
 );
};

export default EventsPage;

