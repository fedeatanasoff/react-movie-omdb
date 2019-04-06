import React from "react";
import ButtonToHome from "../components/ButtonToHome";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="title is-1">404</h1>
      <h4 className="subtitle is-4">Pagina no encontrada</h4>
      <ButtonToHome />
    </div>
  );
};

export default NotFound;
