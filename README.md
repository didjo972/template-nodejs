API Rest NodeJS Template
=============================
This Project is a NodeJS template based on TypeScript, Express and TypeORM
-----------------------------

Here is the lib list used to build this API Rest endpoint App :
-----------------------------

* **[helmet](https://github.com/helmetjs/helmet)**\
Help us to secure our application by setting various HTTP headers\
* **[cors](https://github.com/expressjs/cors)**\
Enable cross-origin Requests\
* **[body-parser](github.com/expressjs/body-parser)**\
Parses the client’s request from json into javascript objects\
* **[jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)**\
Will handle the jwt operations for us\
* **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**\
Help us to hash user passwords\
* **[typeorm](https://github.com/typeorm/typeorm)**\
The ORM we are going to use to manipulate database\
* **[reflect-metadata](https://github.com/rbuckton/reflect-metadata)**\
allow some annotations features used with TypeORM\
* **[class-validator](https://github.com/typestack/class-validator)**\
A validation package that works really well with TypeORM

Pre-require
-----------
* nodejs
* docker

Install
-------
```
npm install
```

Developer config
------
You can setup the **ormconfig.json** file to configure your database connexion.\ If you don't have one, you can use the docker-compose and adapt it for your use.\
If you use the docker-compose, you need to create a .env file at the root project and fill it as follow :
```
# The MaridaDB root password (useful to connect to the database)
MYSQL_ROOT_PASSWORD: 'password'
# The MaridaDB default database (automatically created at first launch)
MYSQL_DATABASE: 'yourschema'
# The MaridaDB user (useful to connect to the database)
MYSQL_USER: 'username'
# The MaridaDB password (useful to connect to the database)
MYSQL_PASSWORD: 'somepassword'
jwtSecret = 'your jwtSecret token'
```
Then run this command
```
docker-compose up
```

Mail Server config
-----------------
[Mailhog](https://github.com/mailhog/MailHog)\
To use all the functionnalities of this template, you need to use a mail server.\ If you don't have one, like the DB, you can use the docker-compose and uncomment the mailhog lines. It will provide you a mail server that you can access on port 1025 for the SMTP server and on port 8025 for the HTTP server.
Try it on `http://localhost:8025/`

Start
-----
To start, the app need to connect to the DB. It will failed if the db is not up or if the credentials are not correct.
```
npm run start
```
Open your local browser and verify the sample node api sample is working by accessing :
`http://localhost:3000/public`
`http://localhost:3000/api-docs/#/`

Production
----------
```
npm run prod
```


**TypeORM Migrations**\
node ./node_modules/typeorm/cli.js migration:create -n "YourMigrationFile"