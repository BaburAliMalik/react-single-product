import { Typography,Box } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box sx={
      {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
    }>
    <Typography variant='h2'>About</Typography>
    </Box>
  )
}

export default About