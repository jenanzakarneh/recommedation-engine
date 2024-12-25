import React from 'react'
import { Box, Image } from '@chakra-ui/react'
const LikedItem = ({ imageSrc, selected, onClick }) => {
    return (
        <Box w={'20%'} borderRadius={'lg'} p={5} display={'inline'} borderColor={selected ? "blue.300" : undefined} borderWidth={2} onClick={onClick}>
            <Image
                src={imageSrc}
                alt='image is not found'
                borderRadius='lg'
                w={300} h={300}
            />
        </Box>
    )
}
//0791510209

export default LikedItem
