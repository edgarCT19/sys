import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Button, Tooltip, Stack } from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon, AddCircleOutline as AddCircleOutlineIcon } from "@mui/icons-material";
import Search from "../../components/Search";
import Paginacion from "../../components/Pagination";
import bcrypt from "bcryptjs";

// Definir los datos fuera del componente para evitar re-hashing en cada render
const usuariosData = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    email: "juan.perez@email.com",
    rol: "Administrador",
    cargo: "Gerente de TI",
    telefono: "981 878 2345",
    contraseña: bcrypt.hashSync("123456", 10),
  },
  {
    id: 2,
    nombre: "María",
    apellido: "López",
    email: "maria.lopez@email.com",
    rol: "Usuario",
    cargo: "Analista de Redes",
    telefono: "981 878 2345",
    contraseña: bcrypt.hashSync("abcdef", 10),
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Gómez",
    email: "carlos.gomez@email.com",
    rol: "Usuario",
    cargo: "Soporte Técnico",
    telefono: "981 878 2345",
    contraseña: bcrypt.hashSync("password", 10),
  },
];

const Usuarios = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const handleSearch = (searchText) => setSearchTerm(searchText);

  // Filtrar solo cuando cambia searchTerm
  const filteredData = usuariosData.filter((item) =>
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
          <Link to="/agregar_usuario">
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
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Cargo</th>
                  <th>Teléfono</th>
                  <th>Contraseña Hasheada</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.apellido}</td>
                      <td>{item.email}</td>
                      <td>{item.rol}</td>
                      <td>{item.cargo}</td>
                      <td>{item.telefono}</td>
                      <td style={{ fontSize: "0.8em", wordBreak: "break-word" }}>{item.contraseña}</td>
                      <td>
                        <Stack direction="row" spacing={1}>
                          <Link to="/editar_usuario">
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
                    <td colSpan="8">No se encontraron resultados.</td>
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

export default Usuarios;