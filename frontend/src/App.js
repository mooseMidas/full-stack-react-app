import React, { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Favourites from "./components/Favourites";
import SearchResults from "./components/SearchResults";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
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
            <Favourites favourites={favourites} setFavourites={setFavourites} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
