
DROP DATABASE IF EXISTS popcornpowers_db;

-- CREATE DATABASE
CREATE DATABASE popcornpowers_db;


\c popcornpowers_db

-- CREATE TABLE for popcornpowers 
CREATE TABLE popcornpowers (
    id SERIAL PRIMARY KEY,
    popcornpowers_name VARCHAR(30) UNIQUE NOT NULL
);

-- CREATE TABLE for favorites
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    series VARCHAR(100) NULL,
    characters VARCHAR (30)
    comic VARCHAR(30) NULL, 
    description VARCHAR(200) UNIQUE NOT NULL,
    popcornpowers_id INTEGER NOT NULL,
    FOREIGN KEY (popcornpowers_id) REFERENCES popcornpowers(id) ON DELETE SET NULL

);


-- CREATE TABLE for series/comics
CREATE TABLE series (
    id SERIAL PRIMARY KEY,
    series_title VARCHAR(100) NOT NULL,
    comic_name VARCHAR(100) NOT NULL,
    comic_issue DECIMAL NOT NULL,
    series_id INTEGER NOT NULL,
    comic_id INTEGER, 
    FOREIGN KEY (series_id) REFERENCES favorites(id) ON DELETE SET NULL,
    FOREIGN KEY (comic_id) REFERENCES series(id) ON DELETE SET NULL
);

-- CREATE TABLE characters (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     character_name VARCHAR(255),
--     description TEXT,
--     comic_name VARCHAR(255),
--     comic_link VARCHAR(255),
--     series_name VARCHAR(255),
--     series_link VARCHAR(255),
--     events_name VARCHAR(255),
--     events_link VARCHAR(255)
-- );


