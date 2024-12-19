import React, { useEffect, useState } from 'react';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import Navbar from '../components/bars/Navbar';

const Profile = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        role: '',
        image: '/images/profile.jpg', // Default profile image
    });

    // Fetch user data from local storage on component mount
    useEffect(() => {
        const userName = localStorage.getItem('user_Name') || 'Guest';
        const userEmail = localStorage.getItem('user_email') || 'No Email Found';
        const userType = localStorage.getItem('user_type') || 'Regular';

        setData({
            name: userName,
            email: userEmail,
            role: userType,
            image: '/images/profile.jpg', // You can update this dynamically if user-specific images exist
        });
    }, []);

    return (
        <Flex bg="white" h="100vh" w="100%" color="black" direction="column">
            <Navbar />
            <VStack position="relative" justify="center" mt={50}>
                <Image
                    src={data.image}
                    alt="Profile Image"
                    w="100px"
                    borderRadius="50%"
                    position="absolute"
                    top="-2px"
                    zIndex="1"
                />
                <VStack
                    bg="#ABAB8E"
                    py="100"
                    px="150"
                    borderRadius={10}
                    color="white"
                    position="relative"
                    top="50px" // Align the stack with the profile image
                >
                    <Text lineHeight="81px" fontWeight="500" fontSize="4xl">
                        {data.name}
                    </Text>
                    <Text fontWeight="300" fontSize="2xl">
                        {data.email}
                    </Text>
                    <Text fontWeight="300" fontSize="xl">
                        {data.role}
                    </Text>
                </VStack>
            </VStack>
        </Flex>
    );
};

export default Profile;
