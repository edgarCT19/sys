import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Button, Tooltip, Stack } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon, AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";
import Search from "../../components/Search";
import Paginacion from "../../components/Pagination";

// Datos iniciales de departamentos
const departamentosData = [
  { id: 1, nombre: "Recursos Humanos", encargado: "Ana López", fechaAlta: "2024-03-27 09:30 AM" },
  { id: 2, nombre: "TI", encargado: "Carlos Gómez", fechaAlta: "2024-03-26 03:45 PM" },
  { id: 3, nombre: "Finanzas", encargado: "María Pérez", fechaAlta: "2024-03-25 11:15 AM" },
];

const Departamento = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const handleSearch = (searchText) => setSearchTerm(searchText);

  // Filtrar los datos según el término de búsqueda
  const filteredData = departamentosData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => setCurrentPage(value);

  return (
    <div className="right-content">
      <div className="card mt-2">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Search onSearch={handleSearch} />
          <Link to="/agregar_departamento">
            <Button variant="contained" className="mx-2" color="success" endIcon={<AddCircleOutlineIcon />}>
              Agregar
            </Button>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="table-container">
            <table className="styled-table text-center">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Nombre del Departamento</th>
                  <th>Encargado</th>
                  <th>Fecha y Hora de Alta</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.encargado}</td>
                      <td>{item.fechaAlta}</td>
                      <td>
                        <Stack direction="row" spacing={1} justifyContent="center">
                          <Link to={`/editar_departamento/${item.id}`}>
                            <Tooltip title="Editar">
                              <IconButton size="small" color="primary">
                                <EditIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Link>
                          <Tooltip title="Eliminar">
                            <IconButton size="small" color="error">
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Stack>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No se encontraron resultados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Paginacion totalItems={filteredData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default Departamento;