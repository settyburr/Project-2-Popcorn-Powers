import { useEffect, useState } from "react";

const SeriesPage = () => {
    const userIds = ['Spiderman', 'Iron Man', 'Deadpool', 'Captain Marvel']; // Example list of hero names

    const [users, setUsers] = useState([]);
    const [title, setTitle] = useState('Marvel Universe'); 

    // Creates the audio object outside the handleClick function
    const clickSound = new Audio('file:///Users/ak/Downloads/The%20Avengers%20Theme%20Song.ogg'); // audio file

    // Function to fetch users (or heroes)
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/series');
            const data = await response.json();
            setUsers(data); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Handles button click event
    const handleClick = () => {
        console.log('Button was clicked!');
        setTitle('Hero movies recommended: ' + userIds.join(', ')); // Update title with selected heroes
        clickSound.play(); // Play sound when button is clicked
        clickSound.volume = 1;  // sound volume when you hit logo 
    };

    
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        
        <div>
            <h1>{title}</h1> 
            <main> <img src="" alt="" /></main>
            
            <button onClick={handleClick}>search</button>
            <button onClick={handleClick} >play sound</button>
            
            {/* Render the list of users */}
            <body> The Avengers</body>
            <body> Spider-man</body>
            <body> Captain Marvel</body>
            <body> X-men</body>
            <body>Deadpool</body>

            <div> 
            <img src="" alt="" />
            </div>
            

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>

                ))}
            </ul>
        </div>
    );
};

export default SeriesPage;
