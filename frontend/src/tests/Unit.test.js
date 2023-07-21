/* Jest test to check the behaviour of the SearchResults component when the "Add to Favourites" button is clicked */
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

// had to mock alert function as it is not supported by Node
window.alert = jest.fn();


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

    const { getByTestId  } = render(
      <SearchResults
        searchResults={[mockResult]}
        favourites={mockFavourites}
        setFavourites={mockSetFavourites}
      />
    );

    // finds the button and simulates a click using fireEvent
    const addToFavouritesButton = getByTestId("add-to-favourites-button");
    fireEvent.click(addToFavouritesButton);

    // asserts that the dunction was called with the expected array
    expect(mockSetFavourites).toHaveBeenCalledWith([mockResult]);
    expect(window.alert).toHaveBeenCalledWith("This item has been added to your favourites!");

  });
});



