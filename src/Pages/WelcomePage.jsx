import { Box, Flex,Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import LikedItem from '../components/LikedItem';

const WelcomePage = () => {
    const [data, setData] = useState([
        {
            id: '1234',
            select: true,
            imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
        {
            id: '5678',
            select: false,
            imageSrc: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        },
    ]);

    const [selectedIds, setSelectedIds] = useState(data.filter(item => item.select).map(item => item.id));
    useEffect(() => console.log('selected ids ', selectedIds), [selectedIds])
    const toggleSelection = (item) => {
        setData((prevData) =>
            prevData.map((currentItem) =>
                currentItem.id === item.id
                    ? { ...currentItem, select: !currentItem.select }
                    : currentItem
            )
        );

        setSelectedIds((prevSelectedIds) => {
            if (prevSelectedIds.includes(item.id)) {
                // Remove item ID from selectedIds if already selected
                return prevSelectedIds.filter(id => id !== item.id);
            } else {
                // Add item ID to selectedIds if not already selected
                return [...prevSelectedIds, item.id];
            }
        });
    };

    return (
        <Box bg={'white'} h={'100vh'}>
            This is the welcome page
            <Flex gap={'10'} wrap={'wrap'} mb={10}>
                {data.map((item) => (
                    <LikedItem
                        key={item.id}
                        imageSrc={item.imageSrc}
                        selected={item.select}
                        onClick={() => toggleSelection(item)}
                    />
                ))}
            </Flex>
            <Button  bg={'#9B9B75'} _hover={{}} onClick={() => {
         
            }}>Continue</Button>


        </Box>
    );
};

export default WelcomePage;
