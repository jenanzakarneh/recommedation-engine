import { Flex, HStack, Image, VStack, Text, Box } from '@chakra-ui/react'
import React from 'react'

const ChartItem = ({ imageSrc, description, stock, price, status, id }) => {
    return (
        <Flex w={'full'} boxShadow={'md'} py={2} px={10}>

            <HStack w={'50%'}>
                <Image
                    src={imageSrc}
                    alt='image is not found'
                    borderRadius='lg'
                    w={150} h={150}
                />
                <VStack align={'flex-start'} justify={'space-between'}>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Product</Text>
                    <Text textAlign='center' fontSize={'xl'}>{description}</Text>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Product ID</Text>
                    <Text textAlign='center' fontSize={'xl'}>{id}</Text>
                    {/* <Text textAlign='center' fontSize={'m'} borderColor={'#9B9B75'} borderWidth={1} p={1} borderRadius={6}>{price} USD</Text> */}
                </VStack>

            </HStack>
            <HStack w={'50%'} align={'center' } justify={'space-evenly'}>
                <VStack>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Stock</Text>
                    <Box bg='#9B9B75' p={2} color={'white'} borderRadius={'lg'}>
                        <Text textAlign='center' fontSize={'xl'}>{stock}</Text>
                    </Box>
                </VStack>
                <VStack>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Price</Text>
                    <Box bg='#9B9B75' p={2} color={'white'} borderRadius={'lg'}>
                        <Text textAlign='center' fontSize={'xl'}>${price}</Text>
                    </Box>
                </VStack>
                <VStack>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Status</Text>
                    <Box bg='#9B9B75' p={2} color={'white'} borderRadius={'lg'}>
                        <Text textAlign='center' fontSize={'xl'}>{status}</Text>
                    </Box>
                </VStack>
                <VStack>
                    <Text textAlign='center' fontSize={'s'} color={'#6a6767c3'} lineHeight={'.5'}>Price</Text>
                    <Box bg='red' p={2} color={'white'} borderRadius={'lg'}>
                        <Text textAlign='center' fontSize={'xl'}>delete</Text>
                    </Box>
                </VStack>
            </HStack>
        </Flex >
    )
}

export default ChartItem
