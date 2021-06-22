import { useState } from "react";

import API from "../api";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const result = await API.get(url);
      setResponse(result.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { fetchData, response, loading, error };
};

export default useFetch;
