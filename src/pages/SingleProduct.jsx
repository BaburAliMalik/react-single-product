import { Typography,Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const {id} = useParams
  return (
    <Box sx={
      {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
    }>
    <Typography variant='h2'>Single Product {id}</Typography>
    </Box>
  )
}

export default SingleProduct