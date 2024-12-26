import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/bars/Navbar';
import AdminCard from '../components/AdminCard';

const AdminRequestList = () => {
    const [cardItems, setCardItems] = useState([]);

    useEffect(() => {
        // Retrieve the user_id from localStorage
        const userId = localStorage.getItem('user_id');

        // Ensure user_id is available
        if (!userId) {
            console.error('User ID is not available in localStorage');
            return;
        }

        // Fetch the requests using the user_id from localStorage
        const fetchRequests = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/auth/all_requests/${userId}`);
                const data = await response.json();

                if (response.ok) {
                    // Format the requests to match the AdminCard component
                    const formattedRequests = data.requests.map(request => ({
                        id: request.requestID,
                        imageSrc: request.ImageURL,
                        productName: request.Descryption,
                        userName: `User ${request.userID}`, // Assuming userID is the username for now
                    }));

                    setCardItems(formattedRequests);
                } else {
                    console.error('Error fetching requests:', data.detail);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchRequests();
    }, []); // Empty dependency array ensures this effect runs only once after the component mounts

    return (
        <Flex bg="white" h="100vh" w="100%" color="black" direction="column">
            <Navbar />
            <Flex p={3} gap={3}>
                {cardItems.map((item) => (
                    <AdminCard
                        key={item.id}
                        productName={item.productName}
                        id={item.id}
                        imageSrc={item.imageSrc}
                        userName={item.userName}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default AdminRequestList;
