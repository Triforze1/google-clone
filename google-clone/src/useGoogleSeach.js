import { useState, useEffect } from "react";
import API_KEY from "./components/Keys";

const CONTEXT_KEY = "610d585d967580bb7";

const useGoogleSeach = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]); // Term -> Data layer variable
  return { data };
};

export default useGoogleSeach;
