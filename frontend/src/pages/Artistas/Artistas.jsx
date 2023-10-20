import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Artistas = () => {
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
      border: "5px solid #ddd",
      padding: "20px",
      margin: "10px",
      minWidth: "250px",
      transition: "filter 0.3s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    artistName: {
      fontSize: "30px",
      fontFamily: "Monserrat",
      textAlign: "center",
      fontWeight: "bold",
      zIndex: 1,
      position: "relative",
      color: "#000",
    },
    artistBio: {
      marginTop: "20px",
      fontFamily: "Monserrat",
      fontSize: "18px",
      textAlign: "center",
      color: "#000",
    },
  };

  return (
    <div>
      <h1 style={styles.title}>Artistas</h1>
      <div style={styles.artistContainer}>
        {artistasData.map((artista) => (
          <div
            key={artista.id_artista}
            className="card"
            style={styles.artistCard}
            onMouseOver={(e) => {
              e.currentTarget.style.filter = "blur(3px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.filter = "none";
            }}
          >
            <div className="card__content">
              <p className="card__title" style={styles.artistName}>
                {artista.nombre_artista}
              </p>
              <p className="card__description" style={styles.artistBio}>
                {artista.biografia}
              </p>
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
