export const movies = [
  {
    name: "Resevoir Dogs",
    year: 1992,
    imageTag:
      "https://posters.movieposterdb.com/05_08/1992/0105236/l_45963_0105236_0ec9c9c4.jpg",
    director: "Quentin Tarantino",
    slug: "resevoir-dogs",
  },
  {
    name: "Pulp Fiction",
    year: 1994,
    imageTag:
      "https://posters.movieposterdb.com/07_10/1994/110912/l_110912_55345443.jpg",
    director: "Quentin Tarantino",
    slug: "pulp-fiction",
  },
  {
    name: "Interstellar",
    year: 2014,
    imageTag:
      "https://xl.movieposterdb.com/14_09/2014/816692/xl_816692_6fbec03a.jpg",
    director: "Christopher Nolan",
    slug: "interstellar",
  },
  {
    name: "Fight Club",
    year: 1999,
    imageTag:
      "https://posters.movieposterdb.com/13_06/1999/137523/l_137523_1d292ea3.jpg",
    director: "David Fincher",
    slug: "fight-club",
  },
  {
    name: "Warrior",
    year: 2011,
    imageTag:
      "https://xl.movieposterdb.com/11_10/2011/1291584/xl_1291584_0e794af2.jpg?v=2022-08-09%2014:46:18",
    director: "Gavin O'Connor",
    slug: "warrior",
  },
];

//find movie by slug
export function findMovieBySlug(slug) {
  return movies.find((movie) => movie.slug === slug);
}
