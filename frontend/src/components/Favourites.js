/*
This Favourites component will display the favourited items, it will also remove a specified item on a button click.
*/

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// receives two props from App.js -> to display and update the list
function Favourites({ favourites, setFavourites }) {
  // removes item from the list using filter() and the selected ID -> creates a shallow copy and sets the new setFavourites list
  const handleRemove = (trackId) => {
    setFavourites(
      favourites.filter((favourite) => favourite.trackId !== trackId)
    );
  };

  return (
    <div>
      {/* Link to the Home page */}
      <h1>Favourites</h1>
      <p>
        <Link to="/" style={{ color: "black" }}>
          Search Page
        </Link>
      </p>

      <div className="result-display">
        {/* rendered using map() and the passed prop "favourites" array */}
        {favourites.map((favourite) => (
          <Card
            // inline styling as * in App.css would change only part of the card color
            className="display-card"
            style={{
              width: "25rem",
              height: "15rem",
              backgroundColor: "#feada6",
            }}
            key={favourite.trackId}
          >
            <Card.Body
              style={{
                backgroundColor: "#feada6",
              }}
            >
              <Card.Title
                style={{
                  backgroundColor: "#feada6",
                }}
              >
                {favourite.artistName}
              </Card.Title>
              <Card.Text
                style={{
                  backgroundColor: "#feada6",
                }}
              >
                {favourite.trackName}
              </Card.Text>
              <Card.Text
                style={{
                  backgroundColor: "#feada6",
                }}
              >
                {favourite.primaryGenreName}
              </Card.Text>
              <Button
                style={{
                  backgroundColor: "#a1c4fd",
                  borderColor: "black",
                  color: "black",
                }}
                onClick={() => handleRemove(favourite.trackId)}
              >
                Remove
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Favourites;
