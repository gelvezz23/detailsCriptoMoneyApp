import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div>
      <h1>La pagina que busca no esta disponible</h1>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;
