/* Jest test to check the behaviour of the SearchResults component when the "Add to Favourites" button is clicked */

import { render, fireEvent } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("should add item to favourites when 'Add to Favourites' button is clicked", () => {
    const mockResult = {
      trackId: 123,
      artistName: "Test Artist",
      trackName: "Test Track",
      primaryGenreName: "Test Genre",
    };
    // empty favourites array
    const mockFavourites = [];
    // mock function as a prop
    const mockSetFavourites = jest.fn();

    const { getByText } = render(
      <SearchResults
        searchResults={[mockResult]}
        favourites={mockFavourites}
        setFavourites={mockSetFavourites}
      />
    );

    // finds the button and simulates a click using fireEvent
    const addToFavouritesButton = getByText("Add to Favourites");
    fireEvent.click(addToFavouritesButton);

    // asserts that the dunction was called with the expected array
    expect(mockSetFavourites).toHaveBeenCalledWith([mockResult]);
  });
});
