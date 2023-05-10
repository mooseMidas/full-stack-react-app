/*
This SearchResults component will display the results, it will also add a specified item to the Favourites component on a button click.
*/

import React from "react";
import { Card, Button } from "react-bootstrap";

// receives three props from App.js -> to display and update the list and to set the favourites list
function SearchResults({ searchResults, favourites, setFavourites }) {
  //
  const handleAddToFavourites = (result) => {
    // checks if the item has been added already using find() and the favourite prop array
    if (favourites.find((favourite) => favourite.trackId === result.trackId)) {
      // Alert the user that the track is already in favourites
      alert("This track is already in your favourites!");
    } else {
      // if not the item is added to the favourites array using setFavourites prop
      setFavourites([...favourites, result]);
    }
  };

  return (
    <div className="result-display">
      {/* rendered using map() and the passed prop "searchResults" array */}
      {searchResults.map((result) => (
        <Card
          // inline styling as * in App.css would change only part of the card color
          className="display-card"
          style={{
            width: "25rem",
            height: "15rem",
            backgroundColor: "#a1c4fd",
          }}
          key={result.trackId}
        >
          <Card.Body
            style={{
              backgroundColor: "#a1c4fd",
            }}
          >
            <Card.Title
              style={{
                backgroundColor: "#a1c4fd",
              }}
            >
              {result.artistName}
            </Card.Title>
            <Card.Text
              style={{
                backgroundColor: "#a1c4fd",
              }}
            >
              {result.trackName}
            </Card.Text>
            <Card.Text
              style={{
                backgroundColor: "#a1c4fd",
              }}
            >
              {result.primaryGenreName}
            </Card.Text>
            <Button
              style={{
                backgroundColor: "#feada6",
                borderColor: "black",
                color: "black",
              }}
              onClick={() => handleAddToFavourites(result)}
            >
              Add to Favourites
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default SearchResults;
