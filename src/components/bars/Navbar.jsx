import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { nav } from 'framer-motion/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex bg={'#9B9B75'} h={'7vh'} w={'100%'} borderBottom={'1px'} borderColor={'#f3f3f3'} color={'white'} px={5} justify={'space-between'} align={'center'}>
      <Box onClick={()=>{
        navigate('/home')
      }} >
        <svg width="30" height="30" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2 39V25.2353H25.8V39H36.55V20.6471H43L21.5 0L0 20.6471H6.45V39H17.2Z" fill="white" />
        </svg>
      </Box>
      <Text fontSize={'2xl'} fontWeight={700}>R & M</Text>
      <HStack gap={4}>
       
        <Box onClick={()=>{
          const userRole=localStorage.getItem('user_type')
          if (userRole==='admin') navigate('/admin-add-item')
          if (userRole ==='regular') navigate('/user-add-item')
        }}> 
          <svg width="30" height="30" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7558 15.8555V0H22.341V15.8555H39.0968V21.1407H22.341V36.9962H16.7558V21.1407H0V15.8555H16.7558Z" fill="white" />
          </svg>

        </Box>
        <Box onClick={()=>{
          navigate('/cart')
        }}>
          <svg width="30" height="30" viewBox="0 0 42 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4365 35.0807H32.0221C33.2802 35.0807 34.3094 36.5158 34.3094 38.2698C34.3094 40.0239 33.2802 41.459 32.0221 41.459H9.14918C7.89117 41.459 6.86189 40.0239 6.86189 38.2698V6.37831H2.2873C1.02928 6.37831 0 4.94319 0 3.18915C0 1.43512 1.02928 0 2.2873 0H9.14918C10.4072 0 11.4365 1.43512 11.4365 3.18915V9.56746H41.1713L32.0221 31.8915H11.4365V35.0807ZM10.2928 44.6481C12.1913 44.6481 13.7238 46.7849 13.7238 49.4319C13.7238 52.0789 12.1913 54.2156 10.2928 54.2156C8.39438 54.2156 6.86189 52.0789 6.86189 49.4319C6.86189 46.7849 8.39438 44.6481 10.2928 44.6481ZM30.8785 44.6481C32.777 44.6481 34.3094 46.7849 34.3094 49.4319C34.3094 52.0789 32.777 54.2156 30.8785 54.2156C28.98 54.2156 27.4475 52.0789 27.4475 49.4319C27.4475 46.7849 28.98 44.6481 30.8785 44.6481Z" fill="white" />
          </svg>

        </Box>
      </HStack>
    </Flex>
  )
}

export default Navbar
