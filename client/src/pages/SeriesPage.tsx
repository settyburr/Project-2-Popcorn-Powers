import React, { useEffect, useState, useRef } from "react";
import sound from "../assets/backgroundSound/theme.ogg";

const SeriesPage = () => {
    const userIds = ['Spiderman', 'Iron Man', 'Deadpool', 'Captain Marvel']; // Example list of hero names

    const [series, setSeries] = useState([]);
    const [title, setTitle] = useState('Marvel Universe');
    const [isPlaying, setIsPlaying] = useState(false); // To track audio play state
    const audioRef = useRef(null); // Ref to the audio element

    // Function to fetch series data
    const fetchUsers = async () => {
        try {
            const response = await fetch('/hero/series');  // Adjusted endpoint
            const data = await response.json();
            setSeries(data);
        } catch (error) {
            console.error("Error fetching series:", error);
        }
    };

    // Handles button click event to update title
    const handleClick = () => {
        console.log('Button was clicked!');
        setTitle('Hero movies recommended: ' + userIds.join(', ')); // Update title with selected heroes
    };

    // Toggle audio play/pause when the "Play Sound" button is clicked
    const toggleAudioPlayback = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying); 
        }
    };

    // Fetch data once on component mount
    useEffect(() => {
        fetchUsers();
        console.log(series)
    }, [series]); 

    // Log the series whenever it changes
    useEffect(() => {
        console.log(series); // Logs when series changes
    }, [series]);

    return (
        <div>
            <h1>{title}</h1>

            {/* "Search" button to update title only, without playing audio */}
            <button onClick={handleClick}>Series</button>
                {/* Render the list of users */}
                <h2>The Avengers</h2>
                <h2>Spider-Man</h2>
                <h2>Captain Marvel</h2>
                <h2>Iron Man</h2>
                <h2>Deadpool</h2>

                <div>
                
                </div>

            {/* Audio controls */}
            <div>
                <button onClick={toggleAudioPlayback}>
                    {isPlaying ? 'Pause Sound' : 'Avengers Assemble'}
                </button>
                <audio ref={audioRef} preload="auto" loop>
                    <source src={sound} type="audio/ogg" />
                </audio>
            </div>

            {/* Render the list of series */}
            <div>
                <ul>
                    {series.map((hero) => (
                        <li key={hero.id}>{hero.name}</li>
                    ))}
                </ul>
            </div>
            {/* Add temp image to the Aside part of the page */}
             <aside>
                <div className="containerImage">
                    <img src="./src/assets/images/spiderman4k.jpg" alt="Spiderman Image"/>
                </div>
             </aside>
            {/*Add footer for title page */}
            <footer>
            <h1 className="PageTitle">SERIES</h1>
            </footer>
        </div>
    );
};

export default SeriesPage;
