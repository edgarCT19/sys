import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Typography,
  Box,
  Divider
} from "@mui/material";

const Edit_Dashboard = () => {
  // Valores predeterminados para la simulación de edición
  const [formData, setFormData] = useState({
    descripcionEquipo: "Luminaria LED",
    departamento: "A",
    area: "oficina",
    fabricante: "001",
    modelo: "LED-1234",
    numeroSerie: "ABC12345",
    ingeniero: "Juan Pérez"
  });

  // Función para actualizar el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Simulación del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con los datos: ", formData);
  };

  return (
    <div className="right-content">
      <div className="card">
        <Typography variant="h5" gutterBottom className="p-3 text-center">
          Editar información de mantenimiento.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            "& .MuiFormControl-root": { width: "100%" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "var(--color-primary)"
              },
              "&:hover fieldset": {
                borderColor: "var(--color-primary)"
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--color-primary)"
              }
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--color-primary)"
            }
          }}
        >
          <Grid container spacing={3}>
            {/* Agrupación de Ubicación */}
            <Grid item xs={12}>
              <TextField
                required
                type="text"
                label="Descripción del equipo"
                variant="outlined"
                fullWidth
                name="descripcionEquipo"
                value={formData.descripcionEquipo}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información de Ubicación
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Departamento</InputLabel>
                <Select
                  label="Departamento"
                  name="departamento"
                  value={formData.departamento}
                  onChange={handleChange}
                >
                  <MenuItem value="A">Departamento A</MenuItem>
                  <MenuItem value="B">Departamento B</MenuItem>
                  <MenuItem value="C">Departamento C</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Área</InputLabel>
                <Select
                  label="Área"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                >
                  <MenuItem value="oficina">Oficina</MenuItem>
                  <MenuItem value="sala">Sala de Espera</MenuItem>
                  <MenuItem value="aula">Aula</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Agrupación de Información de la Luminaria */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Información del equipo
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Fabricante</InputLabel>
                <Select
                  label="Fabricante"
                  name="fabricante"
                  value={formData.fabricante}
                  onChange={handleChange}
                >
                  <MenuItem value="001">12WERTY</MenuItem>
                  <MenuItem value="002">HP-compaq</MenuItem>
                  <MenuItem value="003">LG-8972g</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="text"
                label="Modelo"
                variant="outlined"
                fullWidth
                name="modelo"
                value={formData.modelo}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="text"
                label="Número de serie"
                variant="outlined"
                fullWidth
                name="numeroSerie"
                value={formData.numeroSerie}
                onChange={handleChange}
              />
            </Grid>

            {/* Agrupación de Especificaciones Técnicas */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Especificaciones extras
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                type="text"
                label="Nombre del ingeniero"
                variant="outlined"
                fullWidth
                name="ingeniero"
                value={formData.ingeniero}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Botón de enviar centrado y largo */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: "var(--color-primary)",
                "&:hover": { backgroundColor: "var(--color-primary)" }
              }}
            >
              Guardar cambios
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Edit_Dashboard;