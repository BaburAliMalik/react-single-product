import { Typography,Box } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <Box sx={
      {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
    }>
    <Typography variant='h2'>Home</Typography>
    </Box>
  )
}

export default Home