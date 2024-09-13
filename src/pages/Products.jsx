// import { Typography,Box } from '@mui/material'


// import axios from 'axios'
// import React, { useEffect } from 'react'
// import MediaCard from '../components/Card'

// function Products() {

//   useEffect(() =>{
//     axios('https://fakestoreapi.com/products')
//     .then((res) =>{
//       console.log(res.data)
//     }).catch((err) =>{
//       console.log(err);
      

//     })

//   },[])
//   return (
//     <Box>
//     <Typography variant='h2'>Product</Typography>
//     <MediaCard/>
//     </Box>
//   )
// }

// export default Products


// gpt code
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import MediaCard from '../components/Card'; 

function Products() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   <Box>
      <Typography className='h4 m-5 text-center text-xl'>Products</Typography>
     <Box className='container d-flex justify-content-center gap-5 flex-wrap'>
      {products.map((product) => (
        <MediaCard
          key={product.id}
          title={product.title}
          image={product.image}
          // id={product.id}
        />
      ))}
    </Box>
   </Box>
  );
}

export default Products;
