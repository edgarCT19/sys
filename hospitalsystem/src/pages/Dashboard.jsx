import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import Search from "../components/Search";
import PieChartIcon from "@mui/icons-material/PieChart";
import Paginacion from "../components/Pagination";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null); // Estado para almacenar el ID del item a eliminar
  const itemsPerPage = 5;

  const data = [
    {
      id: 1,
      descripcion: "Servidor Dell PowerEdge R740",
      departamento: "TI",
      area: "Centro de Datos",
      fabricante: "Dell",
      modelo: "R740",
      numeroSerie: "SN123456",
      frecuencia: 4,
      fechaRegistro: "12-09-2024",
    },
    {
      id: 2,
      descripcion: "Router Cisco 2901",
      departamento: "Redes",
      area: "Sala de Comunicaciones",
      fabricante: "Cisco",
      modelo: "2901",
      numeroSerie: "SN654321",
      frecuencia: 2,
      fechaRegistro: "15-08-2024",
    },
    {
      id: 3,
      descripcion: "Laptop HP EliteBook 840 G5",
      departamento: "Desarrollo",
      area: "Oficina Principal",
      fabricante: "HP",
      modelo: "EliteBook 840 G5",
      numeroSerie: "SN789456",
      frecuencia: 6,
      fechaRegistro: "20-07-2024",
    },
    {
        id: 4,
        descripcion: "Servidor Dell PowerEdge R740",
        departamento: "TI",
        area: "Centro de Datos",
        fabricante: "Dell",
        modelo: "R740",
        numeroSerie: "SN123456",
        frecuencia: 4,
        fechaRegistro: "12-09-2024",
      },
      {
        id: 5,
        descripcion: "Router Cisco 2901",
        departamento: "Redes",
        area: "Sala de Comunicaciones",
        fabricante: "Cisco",
        modelo: "2901",
        numeroSerie: "SN654321",
        frecuencia: 2,
        fechaRegistro: "15-08-2024",
      },
      {
        id: 6,
        descripcion: "Laptop HP EliteBook 840 G5",
        departamento: "Desarrollo",
        area: "Oficina Principal",
        fabricante: "HP",
        modelo: "EliteBook 840 G5",
        numeroSerie: "SN789456",
        frecuencia: 6,
        fechaRegistro: "20-07-2024",
      }
  ];

  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };

  const filteredData = data.filter((item) => {
    return (
      item.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.departamento.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fabricante.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.numeroSerie.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.frecuencia.toString().includes(searchTerm) ||
      item.fechaRegistro.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Función para abrir el diálogo de eliminación
  const handleOpenDeleteDialog = (itemId) => {
    setDeleteItemId(itemId);
    setOpenDeleteDialog(true);
  };

  // Función para cerrar el diálogo de eliminación
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setDeleteItemId(null);
  };

  // Función de confirmación de eliminación
  const handleDelete = () => {
    // Aquí puedes implementar la lógica para eliminar el elemento
    console.log(`Elemento con ID: ${deleteItemId} eliminado.`);
    handleCloseDeleteDialog(); // Cerrar el diálogo después de eliminar
  };

  return (
    <div className="w-100 right-content">
      <div className="card">
        <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
          <Search onSearch={handleSearch} className="search-bar" />
          <Link to="/grafica_pastel">
            <Button color="secondary" className="mx-2" endIcon={<PieChartIcon />}>
              Ver gráficas
            </Button>
          </Link>
          <Link to="/agregar_registro">
            <Button variant="contained" color="success" endIcon={<AddCircleOutlineIcon />}>
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
                  <th>Descripción del equipo</th>
                  <th>Departamento</th>
                  <th>Área específica</th>
                  <th>Fabricante</th>
                  <th>Modelo</th>
                  <th>Número de Serie</th>
                  <th>Frecuencia (# de veces al año)</th>
                  <th>Fecha de registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.descripcion}</td>
                      <td>{item.departamento}</td>
                      <td>{item.area}</td>
                      <td>{item.fabricante}</td>
                      <td>{item.modelo}</td>
                      <td>{item.numeroSerie}</td>
                      <td>{item.frecuencia}</td>
                      <td>{item.fechaRegistro}</td>
                      <td>
                        <div className="d-flex actions justify-content-around">
                          <Stack direction="row" spacing={1}>
                            <Link to="/editar_registro">
                              <Tooltip title="Editar" placement="top">
                                <IconButton aria-label="edit" size="small" color="primary">
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                            <Link to="#" onClick={() => handleOpenDeleteDialog(item.id)}>
                              <Tooltip title="Eliminar" placement="top">
                                <IconButton aria-label="delete" size="small" color="error">
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Link>
                          </Stack>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10">No se encontraron resultados.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <Paginacion
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>

      {/* Diálogo de confirmación de eliminación */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Eliminar Registro</DialogTitle>
        <DialogContent>
          <p>¿Estás seguro de que deseas eliminar este registro?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;