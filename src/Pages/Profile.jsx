import React, { useState } from 'react';
import { Center, Flex, Image, Text, VStack } from '@chakra-ui/react';
import Navbar from '../components/bars/Navbar';

const Profile = () => {
    const [data, setDate] = useState({ email: "Revera.shawabkeh@gmail.com", name: 'Revera Alshawabkeh', role: 'Admin', image: "" });

    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
            <Navbar />
            <VStack position="relative" justify={'center'} mt={50}>
                <Image
                    src='/images/profile.jpg'
                    alt='image not found'
                    w={'100px'}
                    borderRadius={'50%'}
                    position='absolute'
                    top="-2px"
                    zIndex="1"
                />
                <VStack
                    bg={'#ABAB8E'}
                    py={'100'}
                    px={'150'}
                    borderRadius={10}
                    color={'white'}
                    position="relative"
                    top="50px" // Moves the stack down to align with the baseline
                >
                    <Text lineHeight={'81px'} fontWeight={'500'} fontSize={'4xl'}>
                        {data.name}
                    </Text>
                    <Text fontWeight={'300'} fontSize={'2xl'}>
                        {data.email}
                    </Text>
                    <Text fontWeight={'300'} fontSize={'xl'}>
                        {data.role}
                    </Text>
                </VStack>
            </VStack>
        </Flex>
    );
};

export default Profile;
