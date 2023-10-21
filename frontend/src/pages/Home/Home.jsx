import React from 'react'
import { Box, Typography } from '@mui/material'
import PageContainer from '../../components/container/PageContainer'
import MostrarCuadros from './components/MostrarCuadros'

function Home() {
  return (
    <PageContainer title='Pagina inicio' description=''>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundImage: 'url(https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '10%'
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
              textShadow: '10px 2px 4px #000000',
              fontFamily: 'monospace',
              fontWeight: 1000,
              letterSpacing: '.4rem'
            }}
          >
            Galeria de arte
          </Typography>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              color: 'white',
              textShadow: '20px 2px 4px #000000',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem'
            }}
          >
            "Arte que inspira, creatividad que cautiva."
          </Typography>

        </Box>
      </Box>

      <Box
        padding={1}
        display='flex'
        flexDirection='column'
        gap={5}
        alignItems='center'
      >

        <MostrarCuadros />
      </Box>

    </PageContainer>
  )
}

export default Home
