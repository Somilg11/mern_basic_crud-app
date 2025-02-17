import React, { useEffect } from 'react'
import {Container, SimpleGrid, Text, VStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();
  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]);
  console.log(products);
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign={"center"}>
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{
          base: 1,
          md: 2,
          lg: 3,
        }} spacing={10} w={"full"}>
          {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text color='gray.500' fontSize='xl' textAlign={"center"} fontWeight='bold'>
          No product found 😿{' '}
          <Link to={"/create"}>
          <Text as='span' _hover={{textDecoration: "underline"}}>
            Create a product
          </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage