import React, { useState } from "react";
import Search from "./../../components/search";

const Filter = () => {
  const [data, setData] = useState([]);
  console.log(data);
  return <Search setData={setData} />;
};

export default Filter;
