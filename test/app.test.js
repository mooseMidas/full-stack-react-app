/* Test to check if API response of the endpoint /search is correct */

// supertest library
const request = require("supertest");
const app = require("../app");

describe("API response", () => {
  // to check if the endpoint returns results when given query parameters
  it("should return search results", async () => {
    const response = await request(app).get(
      "/search?term=Batman&limit=10&entity=all"
    );
    // response 200 indicates that the request was successful
    expect(response.status).toBe(200);
    console.log(response.body);
    // checks if the body contains an array of search reuslts
    expect(Array.isArray(response.body.results)).toBe(true);
  });
});
