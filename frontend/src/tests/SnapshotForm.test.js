import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Form from "../components/SearchForm";

describe("Search", () => {
  test("renders correctly", () => {
    const setSearchResults = jest.fn();
    const component = renderer.create(
      <BrowserRouter>
        <Form setSearchResults={setSearchResults} />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
