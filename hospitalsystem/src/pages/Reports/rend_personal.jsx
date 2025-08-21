import React from "react";
import { Card, CardContent, Typography, Grid, Box, Divider } from "@mui/material";
import { CheckCircle, Error, Pending, ThumbUp, ThumbDown } from "@mui/icons-material";

const Rendimiento_Personal = () => {
  const user = {
    nombres: "Carlos Enrique",
    apellidos: "López Ek",
    mantenimientos: 10,
    rendimiento_general: "90%",
    atrasos: 2,
    correctivos: 3,
    preventivos: 7,
  };

  // Convertir rendimiento a número para comparación
  const rendimientoNumero = parseFloat(user.rendimiento_general);

  // Función para determinar el color de la barra de progreso
  const getProgressBarColor = (rendimiento) => {
    if (rendimiento >= 85) return "#4caf50"; // Verde
    if (rendimiento >= 70) return "#ff9800"; // Naranja
    return "#f44336"; // Rojo
  };

  return (
    <div className="right-content">
      <Card sx={{ borderRadius: 4, boxShadow: 5, overflow: "hidden" }}>
        <CardContent sx={{ padding: "2rem" }}>
          <Typography variant="h4" component="div" color="secondary" sx={{ mb: 3, fontWeight: 'bold' }}>
            {user.nombres} {user.apellidos}
          </Typography>

          <Grid container spacing={3} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">Mantenimientos Realizados</Typography>
                <Typography variant="h5" color="secondary">{user.mantenimientos}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">Rendimiento General</Typography>
                <Typography variant="h5" color={rendimientoNumero >= 85 ? "green" : rendimientoNumero >= 70 ? "orange" : "red"}>
                  {user.rendimiento_general}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 3 }} />

          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Box display="flex" alignItems="center">
              <CheckCircle color="success" sx={{ mr: 1 }} />
              <Typography variant="body1" color="text.secondary">Correctivos: {user.correctivos}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Pending color="warning" sx={{ mr: 1 }} />
              <Typography variant="body1" color="text.secondary">Atrasos: {user.atrasos}</Typography>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box display="flex" justifyContent="center" alignItems="center" sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">Estado: </Typography>
            {rendimientoNumero >= 85 ? (
              <ThumbUp color="success" sx={{ ml: 1 }} />
            ) : rendimientoNumero >= 70 ? (
              <ThumbDown color="warning" sx={{ ml: 1 }} />
            ) : (
              <Error color="error" sx={{ ml: 1 }} />
            )}
            <Typography variant="body2" color={rendimientoNumero >= 85 ? "green" : rendimientoNumero >= 70 ? "orange" : "red"} sx={{ ml: 1 }}>
              {rendimientoNumero >= 85 ? "Excelente" : rendimientoNumero >= 70 ? "Bueno" : "Mejorar"}
            </Typography>
          </Box>

          {/* Barra de Progreso animada */}
          <Box sx={{ mt: 3, width: "100%" }}>
            <Box
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#e0e0e0",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${user.rendimiento_general}`,
                  backgroundColor: getProgressBarColor(rendimientoNumero),
                  transition: "width 0.5s ease-in-out",
                  borderRadius: 5,
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rendimiento_Personal;