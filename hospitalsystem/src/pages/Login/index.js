import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Box,
  Typography,
  Link,
  Container,
  Alert
} from "@mui/material";
import { Visibility, VisibilityOff, Lock, AccountCircle } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (email.trim() === "admin@example.com" && password === "password") {
      login(email);
      navigate("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" style={{ backgroundSize: "cover" }}>
      <Box p={4} bgcolor="white" borderRadius={2} textAlign="center" maxWidth={400} width="100%" boxShadow={3}>
        <Typography variant="h5" gutterBottom>
          <img src={Logo} alt="Logo" style={{ width: 200, marginBottom: 16 }} />
        </Typography>
        <Typography variant="h5" gutterBottom>Acceder</Typography>
        {error && <Alert severity="error" color="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Ingresa tu correo"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--color-primary)", // color de borde normal
                },
                "&:hover fieldset": {
                  borderColor: "var(--color-secondary)", // color de borde al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-secondary)", // color de borde cuando el input está enfocado
                },
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Ingresa tu contraseña"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "var(--color-primary)", // color de borde normal
                },
                "&:hover fieldset": {
                  borderColor: "var(--color-secondary)", // color de borde al pasar el mouse
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--color-secondary)", // color de borde cuando el input está enfocado
                },
              },
            }}
          />
          <Box display="flex" justifyContent="flex-start" mt={1} mb={2}>
            <Link 
              href="/reset-password" 
              style={{ color: "var(--color-primary)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--color-secondary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--color-primary)")}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </Box>
          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2, backgroundColor: "var(--color-primary)" }}>
            Ingresar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;