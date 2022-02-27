
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255)UNIQUE,
    password VARCHAR(255)
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    photo_src VARCHAR(255),
    photo_alt VARCHAR(255),
    is_collection BOOLEAN,
    collection_id INTEGER,
    description VARCHAR(500)
);

INSERT INTO product (id, name, description, photo_src, photo_alt, is_collection)
VALUES
(0, 'TAHEREH', 'For over 12 years, Tahereh Najafi has been a noteworthy sewing teacher in private institutions. You may know her work as the sewing teacher and dressmaker but she’s also credited with Ministry of Culture organization. Tahereh has been honored with many prizes at the Fashion Festival in Iran. She holds bachelor degree in fashion design.', 'aboutme/tahereh.jpg', 'Tahereh', false),
(-1, 'TAHEREH', 'For over 12 years, Tahereh Najafi has been a noteworthy sewing teacher in private institutions. You may know her work as the sewing teacher and dressmaker but she’s also credited with Ministry of Culture organization. Tahereh has been honored with many prizes at the Fashion Festival in Iran. She holds bachelor degree in fashion design.', 'aboutme/tahereh.jpg', 'Tahereh', false);

INSERT INTO product (name, photo_src, photo_alt, is_collection)
VALUES
('Women dresses', 'collections/16.png', 'Women dresses', true),
('Women casual', 'collections/17.png', 'Women casual', true),
('Winter Clothing', 'collections/18.png', 'Winter Clothing', true),
('Girl dresses', 'collections/19.png', 'Girl dresses', true);


INSERT INTO product (name, description, photo_src, photo_alt, collection_id, is_collection)
VALUES
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 1, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false ),
('white chiffon dress', 'some description', 'product/11.png', 'white chiffon dress', 2, false );