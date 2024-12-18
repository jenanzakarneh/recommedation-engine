import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Navbar from '../components/bars/Navbar'
import AdminCard from '../components/AdminCard'
const AdminRequestList = () => {
    const [cardItems, setCardItems] = useState([{
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        productName: "Product 1",
        userName: "user 1"
    }, {
        id: '1234',
        imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        productName: "Product 2",
        userName: "user 2"
    }
    ])
    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
            <Navbar />
            <Flex p={3}  gap={3}>
                {cardItems.map((item) => <AdminCard productName={item.productName} id={item.id} imageSrc={item.imageSrc} userName={item.userName} />)}
            </Flex>
        </Flex>
    )
}

export default AdminRequestList
