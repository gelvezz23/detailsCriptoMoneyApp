import React, { useState } from "react";
import { useFetch } from "../../hooks/fetchingData";
import "./styles.css";
function Search(): React.ReactElement {
  const [state, setState] = useState({});

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (value) {
      console.log(event.target.value);
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
    </section>
  );
}

export default Search;
