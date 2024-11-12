const FavoritesPage = () => {
    return (
    <div>
      
      {/* Add temp image to the Aside part of the page */}
      <aside>
        <div className="containerFAV">
          <img src="./src/assets/images/IronMan.jpg" alt="Iron Man Image"/>
        </div>
      </aside>
      <section>
      <table>
      <thead>
            <tr>
                <th>Character Name</th>
                <th>Description</th>
                <th>Comic - Name, Link</th>
                <th>Series - Name, Link</th>
                <th>Events - Name, Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Captain America</td>
              <td>Vowing to serve his country any way he could, young Steve Rogers...</td>
              <td>A+X (2012) #1, http://gateway.marvel.com/v1/public/comics/43488</td>
              <td>A+X (2012 - 2014), http://gateway.marvel.com/v1/public/series/16450</td>
              <td>Acts of Vengeance!, http://gateway.marvel.com/v1/public/events/116</td>
            </tr>
            <tr>
            <td>Iron Man</td>
              <td>Tony Stark is a genius inventor, businessman, and philanthropist...</td>
              <td>Iron Man (1968) #1, http://gateway.marvel.com/v1/public/comics/43489</td>
              <td>Iron Man (1968 - 1996), http://gateway.marvel.com/v1/public/series/16451</td>
              <td>Infinity War, http://gateway.marvel.com/v1/public/events/117</td>
            </tr>
        </tbody>
      </table>  
      </section>
      {/* Add title of page to the footer */}
      <footer>
      <h1 className="PageTitle">FAVORITES</h1>
      </footer>
    </div>
    );
  };
  
  export default FavoritesPage;