import { ConnectionOptions } from "typeorm";
import { entities } from "./src/entity";

export const ormconfig: ConnectionOptions = {
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "username",
  password: "somepassword",
  database: "myschema",
  synchronize: true,
  logging: false,
  entities,
  migrations: [
    "src/migration/**/.{ts,js}"
  ],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration"
  }
};
