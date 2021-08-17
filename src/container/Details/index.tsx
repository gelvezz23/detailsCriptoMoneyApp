import React, { Fragment } from "react";
import { Button } from "../../components/header/styles";
import NotFound from "../NotFound";
import { useFetchDetails } from "./../../hooks/fetchDetails";
import { CardDetails } from "./styles";
interface detailsProps {
  match: any;
}

const Details: React.FC<detailsProps> = (props) => {
  const { id } = props.match.params;
  const { isLoading, serverError, apiData } = useFetchDetails("ticker/", id);

  if (!isLoading && serverError) {
    return <NotFound />;
  }

  if (isLoading) {
    return <span>Loading.....</span>;
  }

  return (
    <Fragment>
      <h2>Detalles</h2>
      <CardDetails>
        {apiData.map((items: any, index: number) => {
          return (
            <div key={index}>
              <h5>nombre: {items.name}</h5>
              <h5>precio: {items.price_usd} USD</h5>
              <h5>simbolo: {items.symbol}</h5>
              <h5>% cambio : {items.percent_change_1h} en 1Hora</h5>
              <h5>% cambio : {items.percent_change_24h} en 24Horas</h5>
              <Button to="/" primary={true}>
                volver
              </Button>
            </div>
          );
        })}
      </CardDetails>
    </Fragment>
  );
};

export default Details;
