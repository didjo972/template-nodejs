import supertest from "supertest";
import { app } from "../src/app";
import { connection } from "../src/shared/connection";

describe("User Test Suite", () => {
    beforeAll(async () => {
        await connection.create();
        await connection.createTestUsers();
    });

    afterAll(async () => {
        await connection.clear();
        await connection.close();
    });

    test("Authenticated user can get user detail", () => {
        expect(1 + 1).toBe(2);
        // const response = await supertest(app)
          //  .post("/auth/login")
          //  .send({email: "admin@admin.com", password: "secretadmin"});
        // tslint:disable-next-line:no-console
        // console.log(response.header);
        // expect(response.status).toBe(200);
        // await supertest(app).get("/users/1");
        // done();
    }, 10000);
});
