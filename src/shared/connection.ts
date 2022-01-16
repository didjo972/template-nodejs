import { createConnection, getConnection, getRepository } from "typeorm";
import {ormconfig} from "./../../ormconfig";
import { User } from "./../entity/User";

const connection = {
    async create() {
        await createConnection(ormconfig);
    },

    async close() {
        // tslint:disable-next-line:no-console
        console.log("close connection");
        await getConnection().close();
    },

    async clear() {
        const dbConnection = getConnection();
        const entities = dbConnection.entityMetadatas;

        entities.forEach(async (entity) => {
            const repository = dbConnection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName};`);
        });
    },

    async createTestUsers() {
        await getConnection();
        // Create a test user too
        const user = new User();
        user.email = "test@test.com";
        user.password = "secret";
        user.username = "stan";
        user.role = "USER";
        user.hashPassword();

        await getRepository(User).save(user);

        const admin = new User();
        admin.email = "admin@admin.com";
        admin.password = "secretadmin";
        admin.username = "jerry";
        admin.role = "ADMIN";
        admin.hashPassword();
        await getRepository(User).save(admin);
      },
};

export { connection };
