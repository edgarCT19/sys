import {
  Button,
  TextField,
  Grid,
  Typography,
  Box
} from "@mui/material";

const Add_Users = () => {
  return (
    <div className="right-content">
      <div className="card">
        <Typography variant="h5" gutterBottom className="p-3 text-center">
          Agregar nuevo usuario
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            maxWidth: 900,
            margin: "0 auto",
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
            {/* Fila 1 - 2 inputs */}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="text"
                label="Nombres"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="text"
                label="Apellido Paterno"
                variant="outlined"
                fullWidth
              />
            </Grid>

            {/* Fila 2 - 3 inputs */}
            <Grid item xs={12} sm={4}>
              <TextField
                required
                type="text"
                label="Apellido Materno"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                type="email"
                label="Correo electrónico"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                type="text"
                label="Número de telefónos"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Botón de enviar centrado */}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "50%",
                backgroundColor: "var(--color-primary)",
                "&:hover": {
                  backgroundColor: "var(--color-primary)"
                }
              }}
            >
              GUARDAR USUARIO
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add_Users;
