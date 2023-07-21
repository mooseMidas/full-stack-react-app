import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResults"

// Mock the setFavourites function
const mockSetFavourites = jest.fn();

// Sample search results for testing
const searchResults = [
  {
    trackId: 1,
    collectionName: "Album 1",
    shortDescription: "Short description 1",
    previewUrl: "https://example.com/video1.mp4",
  },
  {
    trackId: 2,
    collectionName: "Album 2",
    shortDescription: "Short description 2",
    previewUrl: "https://example.com/video2.mp4",
  },
];

// Sample favourites list for testing
const favourites = [
  {
    trackId: 3,
    collectionName: "Album 3",
    shortDescription: "Short description 3",
  },
];

test("SearchResults component renders correctly", () => {
  const component = renderer.create(
    <SearchResults
      searchResults={searchResults}
      favourites={favourites}
      setFavourites={mockSetFavourites}
    />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
