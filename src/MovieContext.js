import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Fast and Furious ",
      price: "$1000",
      id: 254521,
    },
    {
      name: "BodyGuard  ",
      price: "$120",
      id: 254521,
    },
    {
      name: "Inception ",
      price: "$100",
      id: 254521,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
