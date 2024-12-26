import React, { useState, useEffect } from 'react';
import { Flex, Text, HStack, Button, Stack } from '@chakra-ui/react';
import Navbar from '../components/bars/Navbar';
import ChartItem from '../components/ChartItem';
import axios from 'axios';

const Chart = () => {
    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState(0);

    // Fetch cart data
    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/auth/cart/4'); // Replace with dynamic user_id if needed
                const cartItems = response.data.cart_items;

                // Calculate total price
                const calculatedTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

                // Map API response to productList format
                const updatedProductList = cartItems.map(item => ({
                    id: item.cartid,
                    imageSrc: item.imageURL || 'https://via.placeholder.com/150', // Fallback for null imageURL
                    description: `Product ID: ${item.productid}`,
                    stock: item.quantity, // Assuming stock is represented by quantity
                    price: item.price,
                    status: 'Active', // Example status
                }));

                setProductList(updatedProductList);
                setTotal(calculatedTotal);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, []);

    const handleCheckout = () => {
        console.log('Checkout clicked');
        // Add checkout logic here
    };

    return (
        <Flex bg="white" h="100vh" w="100%" color="black" direction="column">
            <Navbar />
            <HStack>
                <Flex p={3} direction="column" gap={3} w="70%">
                    {productList.map(product => (
                        <ChartItem
                            key={product.id}
                            id={product.id}
                            imageSrc={product.imageSrc}
                            description={product.description}
                            stock={product.stock}
                            price={product.price}
                            status={product.status}
                        />
                    ))}
                </Flex>
                <Stack
                    px={10}
                    py={5}
                    w="20%"
                    gap={8}
                    borderRadius="lg"
                    boxShadow="md"
                    position="fixed"
                    bottom={10}
                    right={10}
                >
                    <Flex align="center" justify="space-between">
                        <Text fontSize="3xl" fontWeight="bold" color="#6a6767c3">
                            Total
                        </Text>
                        <Text fontSize="2xl">{total} $</Text>
                    </Flex>
                    <Button bg="#9B9B75" _hover={{}} onClick={handleCheckout}>
                        Checkout
                    </Button>
                </Stack>
            </HStack>
        </Flex>
    );
};

export default Chart;
