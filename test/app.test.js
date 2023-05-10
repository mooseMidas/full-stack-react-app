const request = require("supertest");
const app = require("../app");

describe("Status", () => {
  describe("API response", () => {
    it("should return search results", async () => {
      const response = await request(app).get(
        "/search?term=Batman&limit=10&entity=all"
      );
      expect(response.status).toBe(200);
      console.log(response.body);
      expect(Array.isArray(response.body.results)).toBe(true);
    });
  });
});
