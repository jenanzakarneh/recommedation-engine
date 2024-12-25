import React, { useState } from 'react'
import { useSearchParams } from 'react-router';
import { Flex, HStack, Image, Text, VStack, Button } from '@chakra-ui/react';
import Navbar from '../components/bars/Navbar'
import ProductCard from '../components/ProductCard'

const ViewProduct = () => {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('id');
    const [productData, setProductData] = useState({
        price: 300,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        id: "1234",
        describsion: "test"
    })
    const [relatedProducts, setRelatedProducts] = useState([{
        price: 100,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P1'
    },
    {
        price: 300,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        title: 'P2'
        }, {
            price: 300,
            image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'P2'
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
    const onAccept = () => { }
    return (
        <Flex bg='white'  w={'100%'} color={'black'} direction={'column'}>
            <Navbar />
            <Flex justify={'center'}>
                <HStack color={'black'} gap={20} p={10}>
                    <Image
                        src={productData.image}
                        alt='image is not found'
                        borderRadius='lg'
                        w={'250px'}
                        h={'300px'}
                    />
                    <VStack align={'flex-start'}>
                        <Text fontSize={'3xl'}>{productData.describsion}</Text>
                        <Text fontSize={'xl'}>Product ID : {productData.id}</Text>
                        <Text>{productData.price}$</Text>
                        <Button bg={'green'} color={'white'} mt={10} _hover={{}} onClick={onAccept}> Accept </Button>
                    </VStack>
                </HStack>
            </Flex>
            <Flex wrap={'wrap'} gap={10} justify={'flex-start'} mx={20}>
                {relatedProducts.map((product) => <ProductCard title={product.title} imageSrc={product.image} price={product.price} />)}
            </Flex>
        </Flex>
    )
}

export default ViewProduct
