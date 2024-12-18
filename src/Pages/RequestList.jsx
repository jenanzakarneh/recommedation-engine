import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import ChartItem from '../components/ChartItem'
import Navbar from '../components/bars/Navbar'

const RequestList = () => {
    const [userRequestList, setUserRequestList] = useState([{
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', description: "Product 1", stock: 20, price: 100, status: 'Rejected'
    }, {
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80', description: "Product 1", stock: 20, price: 100, status: 'Rejected'
    }])
    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
            <Navbar />
            <Flex p={3} direction={'column'} gap={3}>
            {userRequestList.map((userRequest) => <ChartItem id={userRequest.id} imageSrc={userRequest.imageSrc} description={userRequest.description} stock={userRequest.stock} price={userRequest.price} status={userRequest.status} />)
            }
            </Flex>
        </Flex>
    )
}

export default RequestList
