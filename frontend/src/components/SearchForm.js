/*
This SearchForm component renders a form to get input from the user, and fetch it from the api with the help of the backend.
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// receives props from App.js to display and update the list and to set the results list
function SearchForm({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  // default limit
  const [limit, setLimit] = useState(10);
  // default media type
  const [entity, setEntity] = useState("all");

  // sends a GET request to API using async/await fetch function
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `/search?term=${searchTerm}&limit=${limit}&entity=${entity}`
      );
      const data = await response.json();
      setSearchResults(data.results);
      setSearchTerm(""); // clears input field
      if (data.results.length === 0) {
        window.alert("No results found.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-page">
      <h1 className="header">iTunes Search</h1>
      {/* renders a link to the Favourites page. */}
      <Link
        className="link"
        to="/favourites"
      >
        <span>Favourites List</span>
      </Link>
      <Container fluid="md">
        <div className="form-container">
          <div className="form-input">
          <div className="form-row">
            <input
              className="search-input"
              placeholder="Search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              className="number-input"
              type="number"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
          </div>
          <div className="form-row">
            <select value={entity} onChange={(e) => setEntity(e.target.value)}>
              <option value="all">All</option>
              <option value="movie">Movie</option>
              <option value="podcast">Podcast</option>
              <option value="song">Song</option>
              <option value="audiobook">Audiobook</option>
              <option value="shortFilm">Short Film</option>
              <option value="tvSeason">TV Show</option>
              <option value="software">Software</option>
              <option value="ebook">Ebook</option>
            </select>
          </div>
          </div>
            <button className="buttonSearch" data-testid="search-form" onClick={handleSearch}>
              Explore
            </button>
        </div>
      </Container>
    </div>
  );
}

export default SearchForm;
