import React, { useState } from 'react'
import { Flex, Box, Text, Divider, HStack, Button, Stack } from '@chakra-ui/react'
import Navbar from '../components/bars/Navbar'
import ChartItem from '../components/ChartItem'

const Chart = () => {
    const [productList, setProductList] = useState([{
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', description: "Product 1", stock: 20, price: 100, status: 'Rejected'
    }, {
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', description: "Product 1", stock: 20, price: 100, status: 'Rejected'
    }])
    const [total, setTotal] = useState(1000)
    const handleCheckout = () => { }
    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'} >
            <Navbar />
            <HStack>

                <Flex p={3} direction={'column'} gap={3} w={'70%'} >
                    {productList.map((product) => <ChartItem id={product.id} imageSrc={product.imageSrc} description={product.description} stock={product.stock} price={product.price} status={product.status} />)
                    }
                </Flex>
                <Stack px={10} py={5} w={'20%'}gap={8} borderRadius={'lg'} boxShadow={'md'} position={'fixed'} bottom={10} right={10}>
                    <Flex align={'center'} justify={'space-between'} >
                        <Text fontSize={'3xl'} fontWeight={'bold'} color={'#6a6767c3'} > Total</Text>
                        <Text fontSize={'2xl'}>{total} $</Text>
                    </Flex>
                    <Button bg='#9B9B75' _hover={{}} onClick={handleCheckout}>Checkout</Button>
                </Stack>
            </HStack>
        </Flex>
    )
}

export default Chart
