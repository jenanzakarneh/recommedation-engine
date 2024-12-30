import { Box, Flex, Button, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LikedItem from '../components/LikedItem';

const WelcomePage = () => {
    const [data, setData] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const toast = useToast();

    // Fetch data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'http://127.0.0.1:8000/auth/products/random_by_category'
                );
                const products = response.data.products.map((product) => ({
                    id: product.product_id.toString(),
                    select: false,
                    imageSrc: product.ImageURL,
                }));
                setData(products);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast({
                    title: 'Error loading products.',
                    description: 'Unable to fetch products. Please try again later.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        };

        fetchProducts();
    }, [toast]);

    // Toggle item selection
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
                return prevSelectedIds.filter((id) => id !== item.id); // Deselect
            } else {
                return [...prevSelectedIds, item.id]; // Select
            }
        });
    };

    // Handle "Continue" button click
    const handleContinue = async () => {
        if (selectedIds.length === 0) {
            toast({
                title: 'No products selected.',
                description: 'Please select at least one product before continuing.',
                status: 'warning',
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            const userId = 1; // Replace with actual user ID (e.g., from context or local storage)

            // Log each selection
            for (const productId of selectedIds) {
                const formData = new FormData();
                formData.append('userID', userId);
                formData.append('productID', productId);
                formData.append('actionType', 'selected');
                formData.append('actionDetails', `User selected product ${productId}`);

                await axios.post('http://127.0.0.1:8000/auth/log_user_action', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }

            toast({
                title: 'Success!',
                description: 'Your selections have been logged.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });



            // Redirect to home page after successful logging
            window.location.href = 'http://localhost:3000/home';
        } catch (error) {
            console.error('Error logging selections:', error.response?.data || error.message);
            toast({
                title: 'Error logging selections.',
                description: 'There was an issue logging your selections. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box bg={'white'} h={'100vh'} p={5}>
            <Box fontSize={'2xl'} mb={5}>
                Select Categories you are interested in
            </Box>
            <Flex gap={5} wrap={'wrap'} mb={10}>
                {data.map((item) => (
                    <LikedItem
                        key={item.id}
                        imageSrc={item.imageSrc}
                        selected={item.select}
                        onClick={() => toggleSelection(item)}
                    />
                ))}
            </Flex>
            <Button
                bg={'#9B9B75'}
                color={'white'}
                _hover={{ bg: '#7E7E55' }}
                onClick={handleContinue}
            >
                Continue
            </Button>
        </Box>
    );
};

export default WelcomePage;
