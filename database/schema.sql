
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
    description VARCHAR(500),
    photo_src VARCHAR(255),
    photo_alt VARCHAR(255),
    collection_id INTEGER
);

INSERT INTO collection (id, name, photo_src, photo_alt)
VALUES
(1, 'Women dresses', 'collections/16.png', 'Women dresses'),
(2, 'Women casual', 'collections/17.png', 'Women casual'),
(3, 'Winter Clothing', 'collections/18.png', 'Winter Clothing'),
(4, 'Girl dresses', 'collections/19.png', 'Girl dresses');

INSERT INTO product (id, name, description, photo_src, photo_alt, collection_id)
VALUES
(0, 'TAHEREH', 'For over 12 years, Tahereh Najafi has been a noteworthy sewing teacher in private institutions. You may know her work as the sewing teacher and dressmaker but she’s also credited with Ministry of Culture organization. Tahereh has been honored with many prizes at the Fashion Festival in Iran. She holds bachelor degree in fashion design.', 'img/02.jpg', 'Tahereh', 0);

INSERT INTO product (name, description, photo_src, photo_alt, collection_id)
VALUES
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2 );