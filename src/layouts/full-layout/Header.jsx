import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

function Header() {
  const [pages, setPages] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Nuevo estado para la autenticación del usuario
  const [userImage, setUserImage] = useState(""); // Estado para la imagen del usuario

  useEffect(() => {
    const storedUserImage = window.localStorage.getItem("userImage");
    if (storedUserImage) {
      setUserImage(storedUserImage);
    }
  }, []);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const storedUsername = window.localStorage.getItem("username");
    setIsLoggedIn(!!token);
    setUserName(storedUsername || "");
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isPersonLogin = window.localStorage.getItem("token") ? true : false;
    setPages(
      isPersonLogin
        ? [
            { title: "Inicio", link: `/` },
            { title: "Mis obras", link: `/MisObras` },
            { title: "Artistas", link: `/Artistas` },
            { title: "Subir obra", link: `/SubirObra` },
          ]
        : [
            { title: "Inicio", link: `/` },
            { title: "Artistas", link: `/Artistas` },
            { title: "Ingresar", link: `/Login` },
          ]
    );
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "whitesmoke" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "whitesmoke" }}>
        <Toolbar disableGutters sx={{ backgroundColor: "whitesmoke" }}>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Monserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            GALERIA DE ARTE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link to={page.link} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Monserrat",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            GALERIA DE ARTE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.title}
                to={page.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              <Typography sx={{ mr: 2, color: "black" }}>
                ¡HOLA! {userName} {/* Aquí se muestra el nombre del usuario */}
              </Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
                  <Avatar
                    alt={userName || "Usuario"}
                    src={userImage || "https://via.placeholder.com/150"} // Usa la imagen del usuario o una por defecto
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => {}}>
                  <Typography textAlign="center">Editar Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Cerrar sesión</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
