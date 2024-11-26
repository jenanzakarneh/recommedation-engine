import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/bars/Sidebar'
const Home = () => {
    const [productsList, setProductsList] = useState([{
        price: 100,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P1'
    },
    {
        price: 300,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P2'
    },
    {
        price: 300,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P2'
    }, {
        price: 300,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P2'
    }])
    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'}>
            <Flex wrap={'wrap'} w={'80%'}>
                {productsList.map((product) => <ProductCard title={product.title} imageSrc={product.image} price={product.price} />)}
            </Flex>
            <Sidebar />

        </Flex>
    )
}

export default Home
