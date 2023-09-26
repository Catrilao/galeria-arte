import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Button, Typography } from "@mui/material";
import ListarSuperHeroes from "./components/ListarSuperHeroes";

function Home() {
  return (
    <PageContainer title="Galeria de arte online" description="">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2013/07/30/03/14/istanbul-168774_1280.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "18%",
        }}
        minHeight={600}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textShadow: "2px 2px 4px #000000",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            Galeria de arte
          </Typography>
        
          <br></br>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "white",
              textShadow: "1px 1px 1px #000000",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

            }}
          >
            "Arte que inspira, creatividad que cautiva."
          </Typography>
        </Box>
      </Box>
      <Box
        padding={10}
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="center"
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Listado de super heroes
        </Typography>
        <ListarSuperHeroes />
      </Box>
    </PageContainer>
  );
}

export default Home;