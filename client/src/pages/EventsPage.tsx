import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // import the UUID function to store to favorites

const EventsPage = () => {
  //default searchTerm
  const [searchTerm, setSearchTerm]= useState(''); //initialize search button
  const [events, setEvents] = useState([]); //Set events once available
  const [title, setTitle] = useState('WELCOME TO POPCORN POWERS'); //Set new Message
  const [favorites, setFavorites] = useState([]); //Store favorites

  //fetch users for events
  const fetchUsers = async (term: string) => {
    if (!term) return; //ensure to return when there's no search term
    try {
      const response = await fetch(`/api/marvel/hero/${term}/events`);
      const eventsData = await response.json();
      setEvents(eventsData);
      setTitle('Hero events recommended for ' + term);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearchClick = () => {
    fetchUsers(searchTerm);
  };

  // const handleFavoritesClick = async () => {
  //   if (events.length === 0) {
  //     alert("No events to add to favorites! Please search for events first.");
  //     return;
  //   }

  //   const eventToFavorite = events[0]; // Modify as needed
  //   const newFavorite = {
  //     character_name: eventToFavorite.character_name || '',
  //     series: eventToFavorite.series || '',
  //     comic: eventToFavorite.comic || '',
  //     bio: eventToFavorite.description || '',
  //     popcornpowers_id: uuidv4(), // Use UUID for the popcornpowers_id
  //   };

  //   try {
  //     const response = await fetch('/api/favorites', { // Adjust endpoint as needed
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newFavorite),
  //     });

  //     if (response.ok) {
  //       const savedFavorite = await response.json();
  //       setFavorites([...favorites, savedFavorite]); // Update favorites state
  //       alert("Added to favorites!");
  //     } else {
  //       throw new Error("Failed to add to favorites");
  //     }
  //   } catch (error) {
  //     console.error("Error adding to favorites:", error);
  //   }
  // };



  useEffect(() => {
    console.log(events);
  }, [events]);


  //HTML
  
  return (
    <div className='form-container'>
      <section className="EventSection">
      <h2> {title} </h2>
        {/* Add Search Prompt */}
        <div className="input-group rounded">
          <input 
            type="search" 
            className="form-control rounded" 
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="search-addon" 
            onChange={(e)=>setSearchTerm(e.target.value)} //When input change, update search term
          />
          <span className="input-group-text border-0" id="search-addon" onClick={handleSearchClick}>
            <i className="search">Search</i>
          </span>
        </div>
        <div>
          <a href="https://www.marvel.com/characters">Marvel Characters Link</a>
        </div>
        {/* <ul>
          {events.map(event => (
            <li key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Resource URI:</strong> {event.resourceURI}</p>
              {event.urls && event.urls.length > 0 && (
                <div>
                  <h4>Links:</h4>
                  <ul>
                    {event.urls.map((url, index) => (
                      <li key={index}><a href={url.url}>{url.type}</a></li>
                    ))}
                  </ul>
                </div>
              )}
              <p><strong>Modified:</strong> {new Date(event.modified).toLocaleDateString()}</p>
              <p><strong>Start:</strong> {new Date(event.start).toLocaleDateString()}</p>
              <p><strong>End:</strong> {new Date(event.end).toLocaleDateString()}</p>
            </li>
          ))}
        </ul> */}
        {/* <button onClick={handleFavoritesClick}>Favorites</button> */}
      </section>
      {/* Add temp image to the Aside part of the page */}
        <div className="containerEventImage">
          <img src="./src/assets/images/CaptainMarvel.jpg" alt="Captain Marvel Image"/>
        </div>
      
      {/* Add title of page to the footer */}
      <footer>
      <h1 className="PageTitle">EVENTS</h1>
      </footer>
     </div>
  );
};

export default EventsPage;

