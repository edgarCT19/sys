import {
    Button,
    TextField,
    Grid,
    Typography,
    Box,
  } from "@mui/material";

const Edit_Departamento = () => {
    return(
        <div className="right-content">
            <div className="card">
              <Typography variant="h5" gutterBottom className="p-3 text-center">
                Actualizar información del departamento
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      type="text"
                      label="Nombre del departamento"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      type="text"
                      label="Dato extra si es requerido"
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

export default Edit_Departamento;