import { useEffect, useState } from "react";

const Usefetch = (apipath, queryterm = "") => {
  const [data, setdata] = useState([]);
  const key = process.env.REACT_APP_API_KEY;

  // Sanitize the API key to remove any extra characters
  const sanitizedKey = key ? key.replace(/"/g, "") : null;
  console.log("Sanitized API Key:", sanitizedKey);


  const url = sanitizedKey
    ? `https://api.themoviedb.org/3/${apipath}?api_key=${sanitizedKey}&query=${queryterm}`
    : null;

  useEffect(() => {
    if (!sanitizedKey) {
      console.error("API Key is missing. Ensure REACT_APP_API_KEY is set in the .env file.");
      return;
    }

    if (!url) {
      console.error("Invalid URL.");
      return;
    }

    async function fetchmovie() {
      try {
        console.log("Fetching URL:", url); // Debug the URL
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const jsondata = await response.json();
        setdata(jsondata.results || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchmovie();
  }, [url, sanitizedKey]);

  return { data };
};

export default Usefetch;
