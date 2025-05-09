import React from "react";
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

const Add_Dashboard = () => {
    return(
    <div className="right-content">
        <div className="card">
          <Typography variant="h5" gutterBottom className="p-3 text-center">
            Agregar información del Equipo.
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
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
                  borderColor: "var(--color-secondary)"
                }
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "var(--color-secondary)"
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
                  <InputLabel>Despartamento</InputLabel>
                  <Select label="Departamento" defaultValue="">
                    <MenuItem value="A">Departamento A</MenuItem>
                    <MenuItem value="B">Departamento B</MenuItem>
                    <MenuItem value="C">Departamento C</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Área</InputLabel>
                  <Select label="Área" defaultValue="">
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
                  <Select label="Fabricante" defaultValue="">
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="text"
                  label="Número de serie"
                  variant="outlined"
                  fullWidth
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
                  '&:hover': { backgroundColor: "var(--color-primary)" }
                }}
              >
                Guardar datos
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    )
}

export default Add_Dashboard;