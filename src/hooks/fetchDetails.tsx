import { useState, useEffect } from "react";

export const useFetchDetails = (url: string, id: number) => {
  const urlBase = process.env.REACT_APP_API_URL;
  const endpointGlobal = `${urlBase}/${url}/?id=${id}`;

  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
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
  }, [endpointGlobal]);

  return { isLoading, apiData, serverError };
};
