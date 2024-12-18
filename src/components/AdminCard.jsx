import React from 'react'
import { Box,Button,HStack,Image ,Text} from '@chakra-ui/react'

const AdminCard = ({ imageSrc, productName, id, userName }) => {
  const onAccept = () => { }
  const onReject=()=>{}
  return (
    <Box w={'20%'} boxShadow={'md'} borderRadius={'lg'} p={5} display={'inline'}>
      <HStack justify={'space-between'} pb={3}>
        <Button bg={'white'} color={'green'}onClick={onAccept} borderColor={'green'} borderWidth={'1px'}> Accept </Button>
        <Button bg={'white'} color={'red'} onClick={onReject} borderColor={'red'} borderWidth={'1px'}> Reject </Button>
      </HStack>
      <Image
        src={imageSrc}
        alt='image is not found'
        borderRadius='lg'
        w={300} h={300}
      />
      <HStack justify={'space-between'}>
      <Text fontSize={'large'}>  {productName}
      </Text>
        <Text fontSize={'large'}>  {id}
        </Text>
      </HStack>
      <Text fontSize={'2xl'} color={'red'}>  {userName}
      </Text>
    </Box>
  )
}

export default AdminCard

