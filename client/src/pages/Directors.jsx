import { useSate, useEffect } from "react";

export default function Directors() {
  //use state variables
  const [directors, setDirectors] = useSate([]);
  const [form, setForm] = useSate([]);
  //useEffect callback function
  useEffect(() => {
    getDirectors();
  }, []);
  //directors table jsx
  let directorsJSX = directors.map((director) => (
    <div>
      <h2>{director.name}</h2>
      <p>total films: {director.total_movies}</p>
      <p>Born in: {director.birth_place}</p>
    </div>
  ));

  //fetch data from directors table
  async function getDirectors() {
    let data = await fetch(`http://localhost:7070/directors`);
    //turn back into obj
    let toObject = await data.json(setDirectors(toObject));
  }
  //handle change func
  function handleChange(e) {
    setForm({
      //spread prev values of form
      ...form,
      [e.target.name]: e.target.value,
    });
    //check form
    console.log(form);
  }

  ///handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await fetch(`http://localhost:7070/directors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    if (result.ok) {
      getDirectors();
    }
  }
  //return jsx
  return (
    <div>
      <h2>Add a director!</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Director Name"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="place of birth"
          name="birth_place"
          onChange={handleChange}
        />
        <input
          placeholder="Total number of movies"
          name="total_movies"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      {directorsJSX ? directorsJSX : <h1>No director found</h1>}
    </div>
  );
}
