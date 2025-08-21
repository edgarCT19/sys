import React from "react";
import Pagination from "@mui/material/Pagination";

const Paginacion = ({ totalItems, itemsPerPage, currentPage, handlePageChange }) => {
  // Calculamos el total de páginas
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "var(--color-primary)",
            "&:hover": {
              backgroundColor: "transparent", // Evita el cambio de fondo al hacer hover
            },
            "&.Mui-selected": {
              backgroundColor: "var(--color-secondary)",
              color: "#000",
              "&:hover": {
                backgroundColor: "var(--color-secondary)", // Mantén el fondo para el elemento seleccionado
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Paginacion;