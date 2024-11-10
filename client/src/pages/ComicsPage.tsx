import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveComics } from "../api/marvelAPI";
import type { HeroData } from "../interfaces/HeroData";
import ErrorPage from "./ErrorPage";



const ComicsPage = () => {
    return (
      <div>
        <section>
        
        </section>
        {/* Add temp image to the Aside part of the page */}
        <aside>
        <div className="containerImage">
          <img src="./src/assets/images/deadpool.png" alt="Deadpool Image"/>
        </div>
      </aside>
        {/* Add title of page to the footer */}
        <footer>
        <h1 className="PageTitle">COMICS</h1>
        </footer>
      </div>
    );
  };
  
  export default ComicsPage;
