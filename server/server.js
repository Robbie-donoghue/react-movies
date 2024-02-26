import express, { json } from "express";
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());

import dotenv from "dotenv";
dotenv.config();

import pg from "pg";

const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });
console.log(dbConnectionString);

const PORT = 7070;
//listen port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}  ⊂(◉‿◉)つ`);
});

//root Route
app.get(`/`, (req, res) => {
  res.send(`working  away c[]`);
});

//get request
app.get(`/movies`, async (req, res) => {
  try {
    const result = (await db.query(`SELECT * FROM movies`)).rows;
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

//post request
app.post(`/movies`, async (req, res) => {
  try {
    const title = req.body.title;
    const year = req.body.year;
    const image_tag = req.body.image_tag;
    const result = await db.query(
      `INSERT INTO movies (title, year, image_tag) VALUES ($1,$2, $3)`,
      [title, year, image_tag]
    );
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

//get request
app.get(`/directors`, async (req, res) => {
  try {
    const result = (await db.query(`SELECT * FROM directors`)).rows;
    res.json(result);
  } catch (err) {
    res.json({ error: err });
  }
});

//post request
app.post(`/directors`, async (req, res) => {
  try {
    console.log("endpoint hit");
    console.log(req.body);
    const name = req.body.name;
    const birth_place = req.body.birth_place;
    const total_movies = req.body.total_movies;
    const result = await db.query(
      `INSERT INTO directors (name, birth_place, total_movies) VALUES ($1,$2,$3)`,
      [name, birth_place, total_movies]
    );
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
