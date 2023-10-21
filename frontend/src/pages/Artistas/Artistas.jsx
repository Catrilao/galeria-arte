import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Artistas = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const [artistasData, setArtistasData] = useState([]);

  useEffect(() => {
    fetch("https://galeria-arte-api.onrender.com/Artistas")
      .then((response) => response.json())
      .then((data) => {
        setArtistasData(data);
      })
      .catch((error) => {
        console.error(
          "Se produjo un error al recuperar los datos de los artistas:",
          error,
        );
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const styles = {
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontFamily: "Monserrat",
    },
    artistContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    artistCard: {
      position: "relative",
      width: "280px",
      height: "180px",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      border: "3px solid #ddd",
      padding: "20px",
      margin: "10px",
      minWidth: "250px",
      transition: "filter 0.3s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#FFF", // Change text color
    },
  };

  return (
    <div>
      <Typography variant="h4" style={styles.title}>
        Artistas
      </Typography>
      <div style={styles.artistContainer}>
        {artistasData.map((artista) => (
          <div
            key={artista.id_artista}
            className="card"
            style={{
              ...styles.artistCard,
              backgroundImage: `url('${artista.imagen}')`,
              filter:
                artista.id_artista === hoveredId ? "brightness(40%)" : "none",
            }}
            onMouseOver={() => setHoveredId(artista.id_artista)}
            onMouseOut={() => setHoveredId(null)}
          >
            <div
              className="card__content"
              style={{
                visibility:
                  artista.id_artista === hoveredId ? "visible" : "hidden",
                transition: "visibility 0s, opacity 0.5s linear",
              }}
            >
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                {artista.nombre_artista}
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "500" }}>
                {artista.biografia}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          bottom: 20,
          right: "5%",
          transform: "translateX(-50%)",
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{ p: 1, backgroundColor: "#f2f2f2" }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Artistas;
