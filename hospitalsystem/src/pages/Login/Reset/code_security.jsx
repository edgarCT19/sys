import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Box,
  Typography,
  Alert
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";

const CodeSecurity = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!code.trim()) {
      setError("El código de seguridad es obligatorio");
      return;
    }

    // Aquí se validaría el código con el backend
    console.log("Código ingresado:", code);

    navigate("/new_password");
  };

  const handleResendCode = () => {
    console.log("Reenviar código de seguridad");
    // Aquí se enviaría una nueva solicitud al backend para reenviar el código
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" style={{ backgroundSize: "cover" }}>
      <Box p={4} bgcolor="white" borderRadius={2} textAlign="center" maxWidth={400} width="100%" boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          <img src={Logo} alt="Logo" style={{ width: 200, marginBottom: 16 }} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ingresa tu código de seguridad que te enviamos al correo electrónico.
        </Typography>
        {error && <Alert severity="error" color="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Ingresa el código de seguridad"
            fullWidth
            margin="normal"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
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
            Confirmar
          </Button>
          <Button variant="contained" fullWidth onClick={handleResendCode} sx={{ mt: 2, backgroundColor: "var(--color-primary)" }}>
            Reenviar código
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default CodeSecurity;