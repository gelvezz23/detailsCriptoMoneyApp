import React from "react";
import { useFetch } from "./../../hooks/fetchingData";
import Card from "./../../components/card";
import { Wrapper } from "./styles";
function Home() {
  const { isLoading, serverError, apiData } = useFetch("tickers/", 10, 10);

  return (
    <>
      <h2>Bienvenido</h2>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <Wrapper>
          {apiData?.data.map((items) => {
            return <Card {...items} />;
          })}
        </Wrapper>
      )}
    </>
  );
}

export default Home;
