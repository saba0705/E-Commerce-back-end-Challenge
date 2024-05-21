# E-Commerce-back-end-Challenge

# Description

The Challenge is to build the back end for an e-commerce site by adding a working Express.js API and configure it to use Sequelize to interact with a PostgreSQL database.

# Table of Contents 
 
 * Challenge Elements
 * Installation
 * Usage 
 * Licence
 * Contributions

# Challenge Elements

User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

# Installation 

* Enter git clone https://github.com/saba0705/E-Commerce-back-end-Challenge to clone the repository.
* Run npm install to install the necessary dependencies.

# Usage 

* Use psql -U postgres to log in and run the schema.sql file.
* Run npm run seed to seed the database with test data.
* Run npm start to start the server and test the routes.

* Link to the walkthrough video : https://app.screencastify.com/v3/watch/EkF17NSd2xGmSAF5Fe5q 

# Licence 

Copyright (c) Saba Pervez. All rights reserved.

Licensed under the MIT license.

# Contributions

We'd love for you to contribute! In order to do so, fork this repository. Your pull request will need approval in order to merge to main.
