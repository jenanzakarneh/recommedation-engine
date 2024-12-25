import React,{useState} from 'react'
import { Flex, HStack, Text ,Button, VStack} from '@chakra-ui/react'
import Sidebar from '../components/bars/Sidebar'
import Navbar from '../components/bars/Navbar'
const ConfirmAdmin = () => {
  const [data, setData] = useState({
    des:"test",price:"3 USD" ,gender:"Female",season:"Winter",color:"red",masterCategory:"Clothing",subCategory:"Topwear",articleType:"Tshirts",usage:"Casual",quantity:"1"
  })
  const onAccept = () => { }
  const onReject=()=>{}
  return (
    <Flex bg='white' h={'100vh'}  color={'black'} direction={'column'}>
      <Navbar />
      <HStack>

      <Flex p={10} bg={'white'} w={'50%'} borderRadius={'2xl'} boxShadow={'2xl'} direction={'column'} gap={8} ml={20} mt={20}>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}>Product Description</Text>
          <Text>{data.des}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}> Price</Text>
          <Text>{data.price}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}> Gender</Text>
          <Text>{data.gender}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}> Season</Text>
          <Text>{data.season}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}>Color</Text>
          <Text>{data.color}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}>Master Category</Text>
          <Text>{data.masterCategory}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}>Sub Category</Text>
          <Text>{data.subCategory}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}> Article Type</Text>
          <Text>{data.articleType}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}>Useage</Text>
          <Text>{data.usage}</Text>
        </HStack>
        <HStack
          w={'100%'}
          justify={'space-between'}
        >
          <Text fontWeight={'bold'} color={'gray'}> Quantity</Text>
          <Text>{data.quantity}</Text>
        </HStack>
      </Flex>
      <VStack justify={'space-between'}  w={'50%'} px={50} gap={6}>
        <Button bg={'white'} color={'green'} w={'full'} onClick={onAccept} borderColor={'green'} borderWidth={'1px'}> Accept </Button>
        <Button bg={'white'} color={'red'} w={'full'} onClick={onReject} borderColor={'red'} borderWidth={'1px'}> Reject </Button>
      </VStack>
      </HStack>
    </Flex>
  )
}

export default ConfirmAdmin
