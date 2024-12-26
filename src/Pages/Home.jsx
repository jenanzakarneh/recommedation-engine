import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/bars/Sidebar';
import Navbar from '../components/bars/Navbar';
import axios from 'axios'; // Make sure axios is installed
 
const Home = () => {
    const [productsList, setProductsList] = useState([]);
 
    // Function to fetch recommendations
    const fetchRecommendations = async () => {
        const userId = localStorage.getItem('user_id'); // Retrieve user_id from localStorage
        if (!userId) {
            console.error('User ID not found in localStorage');
            return;
        }
 
        try {
            const response = await axios.get(`http://127.0.0.1:8000/recommendations/${userId}`);
            const recommendations = response.data.recommendations;
 
            // Map API response to expected structure for ProductCard
            const formattedProducts = recommendations.map(product => ({
                price: product.Price,
                image: product.ImageURL,
                title: `Product ${product.product_id}`, // You can replace this with the actual product title if available
            }));
 
            setProductsList(formattedProducts);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };
 
    // Fetch recommendations when the component mounts
    useEffect(() => {
        fetchRecommendations();
    }, []);
 
    return (
<Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
<Navbar />
<Flex>
<Flex wrap={'wrap'} w={'80%'} align={'center'} justify={'start'} gap={6} px={20}>
                    {productsList.map((product, index) => (
<ProductCard 
                            key={index}
                            title={product.title} 
                            imageSrc={product.image} 
                            price={product.price} 
                        />
                    ))}
</Flex>
<Sidebar />
</Flex>
</Flex>
    );
};
 
export default Home;