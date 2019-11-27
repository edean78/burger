-- Drops the burger_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Created the DB "burger_db" (only works on local connections)
CREATE DATABASE burger_db;

-- Use the DB burger_db for all the rest of the script
USE burger_db;

-- Created the table "burgers"
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  isDevoured boolean NOT NULL,
  PRIMARY KEY(id)
);