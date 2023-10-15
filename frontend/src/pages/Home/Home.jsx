import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import PageContainer from '../../components/container/PageContainer'
import MostrarCuadros from './components/MostrarCuadros'

function Home () {
  return (
    <PageContainer title='Pagina inicio' description='aaaaaaaaaaaaaaaaa'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundImage: 'url(https://images6.alphacoders.com/705/705204.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '18%'
        }}
        minHeight={600}
      >
        <Box
          display='flex'
          flexDirection='column'
          gap={2}
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px #000000',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            Galeria de arte
          </Typography>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              color: 'white',
              textShadow: '2px 2px 4px #000000',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            "Arte que inspira, creatividad que cautiva."
          </Typography>
          <Button
            variant='contained'
            color='primary'
            size='large'
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            Galería de Arte de temporada
          </Button>
        </Box>
      </Box>
      <Box
        padding={10}
        display='flex'
        flexDirection='column'
        gap={5}
        alignItems='center'
      >
        <Typography
          variant='h4'
          component='h2'
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textShadow: '2px 2px 4px #000000'
          }}
        >
          Cuadros destacados
        </Typography>
        <MostrarCuadros/>
      </Box>
    </PageContainer>
  )
}

export default Home
