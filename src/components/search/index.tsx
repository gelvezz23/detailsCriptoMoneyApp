import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../../container/Home/styles";
import { useFetch } from "../../hooks/fetchingData";
import Card from "../card";
import "./styles.css";

function Search(): React.ReactElement {
  const { isLoading, serverError, apiData } = useFetch("tickers/");
  const [state, setState] = useState([]);
  const [stateFiltered, setFilter] = useState([]);
  useEffect(() => {
    setState(apiData.data);
  }, [apiData]);

  if (isLoading && state.length > 0) {
    return <h1>Loading ...</h1>;
  }
  if (serverError) {
    return <span>Error in fetching data ...</span>;
  }

  const handleChange = (event: any) => {
    const { value } = event.target;

    if (value && state.length > 0) {
      const listSearch: any = [...state];
      console.log(listSearch);
      const filtered = listSearch.filter((items: any) =>
        items.name.toLowerCase().includes(value.toLocaleLowerCase())
      );
      setFilter(filtered);
      console.log(stateFiltered);
    } else {
    }
  };

  return (
    <section className="main">
      <h1 className="main__title">¿ Que quieres ver hoy ?</h1>
      <input
        name="inputSearch"
        onChange={handleChange}
        className="input"
        type="text"
        placeholder="buscar ..."
      />
      <Container>
        <Wrapper>
          {stateFiltered.map((items: any, index: number) => {
            return <Card {...items} key={index} />;
          })}
        </Wrapper>
      </Container>
    </section>
  );
}

export default Search;
