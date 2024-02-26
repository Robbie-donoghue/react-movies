import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });
console.log(dbConnectionString);

//db queries
db.query(`CREATE TABLE IF NOT EXISTS movies( 
    id SERIAL PRIMARY KEY,
    title TEXT,
    year INT,
    image_tag TEXT,
    director_id INT,
    FOREIGN KEY (director_id) REFERENCES directors (director_id))`);

db.query(`INSERT INTO movies(title, year, image_tag, director_id)
    VALUES
    ('Reservoir Dogs',
    1992,
    'https://posters.movieposterdb.com/05_08/1992/0105236/l_45963_0105236_0ec9c9c4.jpg',
    1)`);

//create directors table
db.query(`CREATE TABLE IF NOT EXISTS directors(
        director_id SERIAL PRIMARY KEY,
        name TEXT,
         birth_place TEXT,
        total_movies INT
    )`);

//seed information into directors
db.query(`INSERT INTO directors(name, birth_place, total_movies)
    VALUES
    ('Quentin Tarantino',
        'Tennesse', 
        9)`);
