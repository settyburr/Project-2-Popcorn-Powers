import { useEffect, useState } from "react";

const EventsPage = () => {
  //default searchTerm
  const searchTerm = ['Wolverine'];
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState('WELCOME TO POPCORN POWERS');


  //fetch users for events
  const fetchUsers = async () => {
    try {
       // Join user IDs for the fetch call 
       const promises = searchTerm.map(searchTerm =>
        fetch(`/api/marvel/hero/${searchTerm}/events`)
          .then(response => response.json())
      );
      const eventsData = await Promise.all(promises);

      // Flatten the array of events data if it returns an array of arrays
      // const flattenedEvents = eventsData.flat();
      // setEvents(flattenedEvents);
      // setTitle('Hero events recommended for ' + searchTerm.join(', '));
    } catch (error){
      console.error("Error fetching users:", error);
    }
  };




  useEffect(() => {
    fetchUsers();
    console.log(events);
  }, []);


  //HTML
  
  return (
    <div className='form-container'>
      <section>
        <h1> {title} </h1>
        {/* Add Search Prompt */}
        <div class="input-group rounded">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search">Search</i>
          </span>
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
      </section>
      {/* Add temp image to the Aside part of the page */}
      <aside>
        <div className="containerImage">
          <img src="./src/assets/images/CaptainMarvel.jpg" alt="Captain Marvel Image"/>
        </div>
      </aside>
      <section className="APIDetails">
        
      </section>
      {/* Add title of page to the footer */}
      <footer>
      <h1 className="PageTitle">EVENTS</h1>
      </footer>
     </div>
  );
};

export default EventsPage;

