/* Snapshot test -> to check if the <Form> component renders correctly when it is passed the setSearchResults prop */

import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Form from "../components/SearchForm";

describe("Search", () => {
  test("renders correctly", () => {
    // mock function to be passed as a prop -> simulates the behaviour
    const setSearchResults = jest.fn();
    // renderer.create() used to create an instance of the component
    const component = renderer.create(
      // Form is wrapped in a BrowserRouter so that useHistory hook can be used
      <BrowserRouter>
        <Form setSearchResults={setSearchResults} />
      </BrowserRouter>
    );
    // compares the rendered component to a previously stored snapshot
    expect(component).toMatchSnapshot();
  });
});
