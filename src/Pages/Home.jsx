import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/bars/Sidebar';
import Navbar from '../components/bars/Navbar';
import axios from 'axios'; // Make sure axios is installed
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [productsList, setProductsList] = useState([]);
    const navigate = useNavigate();

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
                id:product.product_id,
                price: product.Price,
                image: product.ImageURL,
                title: `Product ${product.product_id}`, // You can replace this with the actual product title if available
            }));

            setProductsList(formattedProducts);
        } catch (error) {
            console.error('Error fetching recommendations:', error);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);
    const handleProductClick=(id)=>{
        navigate(`/view-product?id=${id}`)
    }

    return (
        <Flex bg="white" h="100vh" w="100%" color="black" direction="column" overflow="hidden">
            <Navbar />
            <Flex flex="1" overflow="hidden">
              
                
                {/* Card container */}
                <Flex 
                    wrap="wrap" 
                    w="80%" 
                    align="start" 
                    justify="start" 
                    gap={6} 
                    px={20} 
                    overflowY="scroll" 
                    h="calc(100vh - <NavbarHeight>)"
                >
                    {productsList.map((product, index) => (
                        <Box onClick={()=>handleProductClick(product.id)}>
                            <ProductCard 
                                key={index}
                                title={product.title} 
                                imageSrc={product.image} 
                                price={product.price} 
                                isRandom={product.isRandom}
                            />
                        </Box>
                    ))}

                </Flex>
                    
{/* Sidebar */}
<Sidebar />
            </Flex>
        </Flex>
    );
};

export default Home;
