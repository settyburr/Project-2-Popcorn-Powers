import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveComics } from "../api/marvelAPI";
import type { HeroData } from "../interfaces/HeroData";
import ErrorPage from "./ErrorPage";



const FavoritesPage = () => {
    return (
    <div>
      <section>
        
      </section>
      {/* Add temp image to the Aside part of the page */}
      <aside>
        <div className="container">
          <img src="./src/assets/images/IronMan.jpg" alt="Iron Man Image"/>
        </div>
      </aside>
      {/* Add title of page to the footer */}
      <footer>
      <h1 className="PageTitle">FAVORITES</h1>
      </footer>
    </div>
    );
  };
  
  export default FavoritesPage;