/**
 * @jest-environment node
 */
const request = require("supertest");
const { app } = require("../../server");
const conectarDb = require("../../config/db");
const mongoose = require("mongoose");
describe("Test about starwars api list", () => {
  beforeAll(async () => {
    await conectarDb();
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });
  describe("GET /api/interstellar-ships", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/interstellar-ships").send();
    });
    it("check if route it's ok", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
    });
    it("response an array of Ships", async () => {
      console.log(response.body);
      expect(response.body).toBeInstanceOf(Array);
    });
  });
});
