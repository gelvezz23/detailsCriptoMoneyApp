import { useState, useEffect } from "react";

export const useFetch = (
  url: string,
  start: number = 0,
  limit: number = 100
) => {
  const urlBase = process.env.REACT_APP_API_URL;
  const endpointGlobal = `${urlBase}/${url}/?start=${start}&limit=${limit}`;

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState({ data: [] });
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetch(endpointGlobal);
        const data = await resp.json();

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpointGlobal, start]);

  return { isLoading, apiData, serverError };
};
