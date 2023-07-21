/* App.js renders the main UI of the application that allows users to search for tracks and add/remove them to a favourites list */

import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Favourites from "./components/Favourites";
import SearchResults from "./components/SearchResults";
import { Routes, Route } from "react-router-dom";

function App() {
  // two state variables that are used to store the results and favourites
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <div className="app">
        {/* used React Router to define two diffrent routes for an attractive display*/}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {/* passed props to child components */}
                <SearchForm setSearchResults={setSearchResults} />
                <SearchResults
                  searchResults={searchResults}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              </>
            }
          />
          <Route
            exact
            path="favourites"
            element={
              <Favourites
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
