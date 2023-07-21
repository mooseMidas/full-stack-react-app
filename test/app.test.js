// Test to check if API response

// supertest library installed
const request = require("supertest");
const app = require("../app");

describe("GET /search", () => {
  //api restricted to one request every 5 sec
  jest.setTimeout(10000);
  // to check if the endpoint returns results when given query parameters
  it("returns data from the iTunes API", async () => {
    const response = await request(app).get(
      "/search?term=apple&limit=10&entity=musicTrack"
    );

    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});

/*
API Testing using Jest and SuperTest, Testing with Marie, Retrieved on 18 July 2023 from https://www.testingwithmarie.com/post/api-testing-using-jest-and-supertest
 */
