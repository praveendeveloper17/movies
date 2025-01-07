import { useEffect, useState } from "react";

const Usefetch = (apipath, queryterm = "") => {
  const [data, setdata] = useState([]);
  const key = process.env.REACT_APP_API_KEY;

  console.log("API Key from .env:", key);

  const url = key
    ? `https://api.themoviedb.org/3/${apipath}?api_key=${key}&query=${queryterm}`
    : null;

  useEffect(() => {
    if (!key) {
      console.error("API Key is missing. Ensure REACT_APP_API_KEY is set in the .env file.");
      return;
    }

    if (!url) {
      console.error("Invalid URL.");
      return;
    }

    async function fetchmovie() {
      try {
        const response = await fetch(url);
        const jsondata = await response.json();
        setdata(jsondata.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchmovie();
  }, [url, key]);

  return { data };
};

export default Usefetch;
