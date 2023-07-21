// In this unit test, we mock the app module 
//and assert that the listen function is called with the correct port. 

const app = require("../app");

jest.mock("../app", () => ({
  listen: jest.fn((port, callback) => callback()),
}));

describe("Server", () => {
  it("starts the server on the specified port", () => {
    require("../server");
    expect(app.listen).toHaveBeenCalledWith(8080, expect.any(Function));

  });
});


// How to Test Your Apps using Jest, Testing Library, Cypress, and Supertest, freeCodeCamp.org, Retrieved on 19 July 2023 from https://www.freecodecamp.org/news/test-a-react-app-with-jest-testing-library-and-cypress/


