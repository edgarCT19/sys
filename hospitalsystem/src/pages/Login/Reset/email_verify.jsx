import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  Box,
  Typography,
  Alert
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";

const Email_Verify = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("El correo electrónico es obligatorio");
      return;
    }

    // Aquí se enviaría el correo al backend para recibir el código
    console.log("Correo enviado:", email);

    navigate("/code-security");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" style={{ backgroundSize: "cover" }}>
      <Box p={4} bgcolor="white" borderRadius={2} textAlign="center" maxWidth={400} width="100%" boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          <img src={Logo} alt="Logo" style={{ width: 200, marginBottom: 16 }} />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ingresa tu correo electrónico para recibir un código de verificación.
        </Typography>
        {error && <Alert severity="error" color="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Ingresa tu correo electrónico"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
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
        </form>
      </Box>
    </Box>
  );
};

export default Email_Verify;