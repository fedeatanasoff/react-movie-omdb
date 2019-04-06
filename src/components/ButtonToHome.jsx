import React from "react";
import { Link } from "react-router-dom";

const ButtonToHome = () => {
  return (
    <Link to="/" className="button">
      Volver al Inicio
    </Link>
  );
};

export default ButtonToHome;
