import React, { Fragment, useState } from "react";
import { useFetch } from "./../../hooks/fetchingData";
import Card from "./../../components/card";
import { Container, Wrapper } from "./styles";
function Home() {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    setPage(page + 10);
  };

  const handleBackPage = () => {
    setPage(page - 10);
  };

  const { isLoading, serverError, apiData } = useFetch("tickers/", page, 10);
  return (
    <Fragment>
      <h2>Bienvenido</h2>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <Container>
          <Wrapper>
            {apiData?.data.map((items: any, index: number) => {
              return <Card {...items} key={index} />;
            })}
          </Wrapper>
          {page > 1 ? <button onClick={handleBackPage}>Anterior</button> : null}
          <button onClick={handleNextPage}>Siguiente</button>
        </Container>
      )}
    </Fragment>
  );
}

export default Home;
