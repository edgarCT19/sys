import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaEraser } from "react-icons/fa";
import  Tooltip  from "@mui/material/Tooltip";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Llamamos la función onSearch que se pasará como prop desde el componente principal
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); // Limpia también los resultados
  };

  return (
    <div className="searchBox position-relative d-flex align-items-center">
      <IoSearch />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
      />
      {searchTerm && (
       <Tooltip title="Borrar" placement="top">
        <button className="clear-btn" onClick={clearSearch}>
          <FaEraser />
        </button>
       </Tooltip> 
      )}
    </div>
  );
};

export default Search;