import { useState, useEffect } from "react";

export const useFetch = (url: string, start: number, limit: number) => {
  const urlBase = process.env.REACT_APP_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch(
          `${urlBase}/${url}/?start=${start}&limit=${start}`
        );
        const data = await resp.json();

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};
