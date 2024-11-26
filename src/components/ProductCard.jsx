import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react'
const ProductCard = ({ imageSrc, title, price }) => {
    return (
        <Card maxW='300px'h={'fit-content'} bg={'white'} color={'gray'}>
            <CardBody>
                <Image
                    src={imageSrc}
                    alt='image is not found'
                    borderRadius='lg'
                />
                <HStack align={'center'} justify={'space-between'}>
                    <Text mt={7} textAlign='center' fontSize={'3xl'}>{title}</Text>
                    <Text mt={7} textAlign='center' fontSize={'2xl'} borderColor={'#9B9B75'} borderWidth={1} p={1} borderRadius={6}>{price} USD</Text>
                </HStack>
            </CardBody>

        </Card>
    )
}

export default ProductCard
