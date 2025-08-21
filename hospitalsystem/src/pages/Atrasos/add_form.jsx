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

const Add_Atraso = () => {
    return(
        <div className="right-content">
            <div className="card">
              <Typography variant="h5" gutterBottom className="p-3 text-center">
                Agregar información de mantenimiento atrasado
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
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      Información de equipo atrasado
                    </Typography>
                    <Divider sx={{ marginBottom: 2 }} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel>Equipo en atraso</InputLabel>
                      <Select label="Equipo atrasado" defaultValue="">
                        <MenuItem value="00">Equipo A</MenuItem>
                        <MenuItem value="01">Equipo B</MenuItem>
                        <MenuItem value="02">Equipo C</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                      <InputLabel>Priodidad</InputLabel>
                      <Select label="Priodidad" defaultValue="">
                        <MenuItem value="Alta">Alta</MenuItem>
                        <MenuItem value="Media">Media</MenuItem>
                        <MenuItem value="Baja">Baja</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                 <Grid item xs={12}>
                    <TextField
                      required
                      type="text"
                      label="Motivo o justificación del atraso"
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

export default Add_Atraso;