/*
Favourites component will render the favourited items and a "Remove" button to remove a specified item.
User is also able to "Clear All" items and checkbox items individually before removing
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// receives two props from App.js to display and update Favourite list
function Favourites({ favourites, setFavourites }) {
  //keeps state of marked items
  const [markedItems, setMarkedItems] = useState([]);

  // removes item from the list using filter() and the selected ID then sets new setFavourites list
  const handleRemove = (trackId, collectionId) => {
    setFavourites(
      favourites.filter(
        (favourite) =>
          favourite.trackId !== trackId ||
          favourite.collectionId !== collectionId
      )
    );
  };

  //Allows user to clear favourites list
  const handleClearAll = () => {
    let userInput = prompt(
      `Are you sure you want to clear this list?\nType "No" to cancel or click on "ok" to proceed`
    ).toLowerCase();
    if (userInput === "no") {
      return;
    } else {
      setFavourites([]);
    }
  };

  //toggles marked state of an item when radio is clicked. function adds or removes IDs when check box is clicked
  const handleToggleMarked = (trackId, collectionId) => {
    const updatedMarkedItems = [...markedItems];
    const itemKey = trackId || collectionId;
    const isItemMarked = updatedMarkedItems.includes(itemKey);

    if (isItemMarked) {
      updatedMarkedItems.splice(updatedMarkedItems.indexOf(itemKey), 1);
    } else {
      updatedMarkedItems.push(itemKey);
    }

    setMarkedItems(updatedMarkedItems);
  };

  //removes all the marked items from the favourites list based on IDs.
  //checks if IDs are present in the markedItems state then resets markedItems state
  const handleRemoveMarked = () => {
    setFavourites((prevFavourites) => {
      return prevFavourites.filter(
        (favourite) =>
          !markedItems.includes(favourite.trackId || favourite.collectionId)
      );
    });
    setMarkedItems([]);
  };

  return (
    <div>
      <h1 className="header">Favourites</h1>
      {/* Link to the Home page */}
      <Link to="/" className="link">
        <span>Search Page</span>
      </Link>
      <div className="sub-heading">
        <span className="sub-heading-count">
          Number of saved items: {favourites.length}
        </span>
        <div className="clear-button-container">
          <button className="clear-button" onClick={handleClearAll}>
            Clear All
          </button>
          {markedItems.length > 0 && (
            <button className="clear-button" onClick={handleRemoveMarked}>
              Remove Marked
            </button>
          )}
        </div>
      </div>
      <Container fluid="md">
        <Row>
          {favourites.map((favourite) => (
            <div
              className={`favourite ${
                // items are assigned the marked class if their IDs are present in the markedItems state.
                markedItems.includes(
                  favourite.trackId || favourite.collectionId
                )
                  ? "marked"
                  : ""
              }`}
              key={favourite.trackId || favourite.collectionId}
            >
              <div className="favourite--image-container">
                <img
                  src={favourite.artworkUrl100}
                  className="favourite--image"
                  alt={favourite.trackName}
                ></img>
                <div className="favourite--button-container">
                  <button
                    className="favourite--button"
                    onClick={() =>
                      handleRemove(favourite.trackId, favourite.collectionId)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
              <h3 className="favourite--title">
                {favourite.artistName} -{" "}
                {favourite.collectionName || favourite.trackName}
              </h3>
              <div className="favourite-description-container">
                <span className="favourite--description">
                  {favourite.longDescription || favourite.description}
                </span>
              </div>
              <div className="favourite--checkbox-container">
                {/* checkbox input will trigger handleToggleMarked */}
                <input
                  type="checkbox"
                  checked={markedItems.includes(
                    favourite.trackId || favourite.collectionId
                  )}
                  onChange={() =>
                    handleToggleMarked(
                      favourite.trackId,
                      favourite.collectionId
                    )
                  }
                />
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Favourites;
