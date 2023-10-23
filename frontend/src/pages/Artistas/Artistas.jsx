import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Artistas = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [artistasData, setArtistasData] = useState([]);

  useEffect(() => {
    // fetch("https://galeria-arte-api.onrender.com/Artistas")
    fetch("https://localhost:5000/Artistas")
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
      justifyContent: "center",
    },
    artistCardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "10px",
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
      minWidth: "250px",
      transition: "filter 0.3s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    artistName: {
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Monserrat",
      color: "#ffffff",
      position: "relative",
      zIndex: 1,
    },
    artistDescription: {
      marginTop: "20px",
      textAlign: "center",
      maxWidth: "250px",
      wordWrap: "break-word",
      color: "#000000",
      fontFamily: "Monserrat",
    },
    blurredBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transition: "background-color 0.3s ease-in-out",
      backdropFilter: "blur(5px)",
    },
  };

  return (
    <div>
      <Typography variant="h4" style={styles.title}>
        Artistas
      </Typography>
      <Box style={styles.artistContainer}>
        {artistasData.map((artista) => (
          <div key={artista.id_artista} style={styles.artistCardContainer}>
            <div
              className="card"
              style={{
                ...styles.artistCard,
                backgroundImage: `url('${artista.imagen}')`,
              }}
              onMouseOver={() => setHoveredId(artista.id_artista)}
              onMouseOut={() => setHoveredId(null)}
            >
              {artista.id_artista === hoveredId && (
                <div
                  style={{
                    ...styles.blurredBackground,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                />
              )}
              <Typography
                variant="h3"
                style={{
                  ...styles.artistName,
                  visibility:
                    artista.id_artista === hoveredId ? "visible" : "hidden",
                }}
              >
                {artista.nombre_artista}
              </Typography>
            </div>
            <div style={styles.artistDescription}>
              <Typography variant="body1" style={{ color: "#000000" }}>
                {artista.biografia}
              </Typography>
            </div>
          </div>
        ))}
      </Box>
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
