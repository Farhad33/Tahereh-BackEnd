
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

DROP TABLE IF EXISTS collection;
CREATE TABLE collection (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo_src VARCHAR(255),
    photo_alt VARCHAR(255)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    photo_src VARCHAR(255),
    photo_alt VARCHAR(255)
);

INSERT INTO collection (name, photo_src, photo_alt)
VALUES
('Women dresses', 'http://localhost:3000/large/16.png', ''),
('Women casual', 'http://localhost:3000/large/17.png', ''),
('Winter Clothing', 'http://localhost:3000/large/18.png', ''),
('Girl dresses', 'http://localhost:3000/large/19.png', '');