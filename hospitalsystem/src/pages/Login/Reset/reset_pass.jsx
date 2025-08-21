import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import Logo from "../../../assets/img/logo.png";

const Reset_Pass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    console.log("Contraseña restablecida correctamente");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" style={{ backgroundSize: "cover" }}>
      <Box p={4} bgcolor="white" borderRadius={2} textAlign="center" maxWidth={400} width="100%" boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          <img src={Logo} alt="Logo" style={{ width: 200, marginBottom: 16 }} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Escribe tu nueva contraseña y usa caracteres especiales, números y letras para mayor seguridad.
        </Typography>
        {error && <Alert severity="error" color="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Nueva contraseña"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "var(--color-primary)" },
                "&:hover fieldset": { borderColor: "var(--color-secondary)" },
                "&.Mui-focused fieldset": { borderColor: "var(--color-secondary)" },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Confirmar contraseña"
            fullWidth
            margin="normal"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowConfirmPassword} edge="end">
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "var(--color-primary)" },
                "&:hover fieldset": { borderColor: "var(--color-secondary)" },
                "&.Mui-focused fieldset": { borderColor: "var(--color-secondary)" },
              },
            }}
          />
          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2, backgroundColor: "var(--color-primary)" }}>
            Restablecer Contraseña
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Reset_Pass;
