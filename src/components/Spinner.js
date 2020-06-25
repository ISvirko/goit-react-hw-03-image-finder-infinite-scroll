import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = () => (
  <div className="Loader">
    <Loader
      type="Rings"
      color="#20b2aa"
      height={200}
      width={200}
      timeout={3000}
    />
  </div>
);

export default Spinner;
