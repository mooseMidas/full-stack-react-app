/*
SearchResults component will render results list,
"ArrowDown" button to add item to Favourites component, 
"Preview" button to autostart previews of item result
*/

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDown, XCircle } from "react-bootstrap-icons";

// receives three props from App.js -> to display and update the list and to set the favourites list
function SearchResults({ searchResults, favourites, setFavourites }) {
  const [previewUrl, setPreviewUrl] = useState("");

  // checks if the item has been added already using some(). If isDuplicate value is false, item is added to favourites
  const handleAddToFavourites = (result) => {
    const isDuplicate = favourites.some((favourite) => {
      const uniqueKey = result.trackId || result.collectionId;
      return (
        uniqueKey && uniqueKey === (favourite.trackId || favourite.collectionId)
      );
    });

    if (isDuplicate) {
      window.alert("This item is already in your favourites!");
    } else {
      setFavourites([...favourites, result]);
      window.alert("This item has been added to your favourites!");
    }
  };

  const handlePreview = (url) => {
    setPreviewUrl(url);
  };

  const handleClosePreview = () => {
    setPreviewUrl("");
  };

  return (
    <Container fluid="md">
      <Row>
        {searchResults.map((result) => (
          <Col
            md
            className="card-col"
            key={result.trackId || result.collectionId}
          >
            <div className="card-item">
              <div className="card--image-container">
                <img
                  src={result.artworkUrl100}
                  className="card--image"
                  alt={result.collectionName || result.trackName}
                ></img>
                <div className="card--button-container">
                  <ArrowDown
                    className="card--button"
                    onClick={() => handleAddToFavourites(result)}
                    data-testid="add-to-favourites-button"
                  />
                </div>
              </div>
              <h3 className="card--title">
                {result.collectionName || result.trackName}
              </h3>
              <div className="card-description-container">
                <span className="card--description">
                  {result.shortDescription ||
                    result.description ||
                    result.longDescription}
                </span>
              </div>
              <h3 className="card--title">
                {result.kind || result.wrapperType}
              </h3>
              {/* Preview btn will only be displayed if result has previewUrl key */}
              {result.previewUrl && (
                <button
                  className="card--preview-btn"
                  onClick={() => handlePreview(result.previewUrl)}
                >
                  Preview
                </button>
              )}
            </div>
          </Col>
        ))}
        {previewUrl && (
          <div className="preview-content">
            <video controls autoPlay className="preview">
              <source src={previewUrl} type="video/mp4" />
            </video>
            <XCircle className="close-preview-btn" onClick={handleClosePreview}/>
          </div>
        )}
      </Row>
    </Container>
  );
}

export default SearchResults;
