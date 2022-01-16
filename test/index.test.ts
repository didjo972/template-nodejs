// test demo
test("demo", () => {
   expect(1 + 1).toEqual(2);
});

import request from "supertest";
import { app } from "../src/app";

test("GET /", (done) => {
    request(app)
        .get("/public/")
        .expect(200, {
            message: "Hello World !"
        })
        .end(done);
});
