import { Box, HStack, Text, Input, VStack, Button, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(password)
    console.log(emailOrUsername)
  }, [password])
  const navigate = useNavigate()
  return (
    < HStack align={'center'} justify={'space-between'} h={'100vh'} bg={'white'} color={'black'}>
      <Box w={'50%'}>
        <Image w={'100%'} h={'3xl'} src='https://s3-alpha-sig.figma.com/img/98ea/d307/9f8c9b50d96de1a05cf1251c433cdc5a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ba7EfJZtrRugjY2K~u75aJR8hTBsnnXDM-Zcqv5UkLJ3C367jnn-y14tWoOVgD7c3mIeJ109zZEvyN7DKHYhMM8Gn36jik4l8l7yePxyiBQezhbzaN8nKywoY-ZY0IiH53O~5sq5rhm0tp~TsZrnnuJWVSrUYJ921dwotZGdIR99dzhxWfMfyhdhXU1id331GE27qvNsj10Lgv5-7ZmjVX37afuFj7Xsa7cIURD7l6ih~mHvb1qY9SmQcx8GehmOEDQx3jqqWr7SUs1~oU2PwhV3OqmenpZl-lJhMn8~P4MlfIyceGAahLbPNO60FEYTlNfPm6LMoQvAtIvgWauXkw__' alt='Image not found' />
      </Box>
      <VStack w={'50%'} px={10} gap={7}>
        <Text fontSize={'3xl'} >Login</Text>
        <Input bg='#F2EBEBC2' placeholder='Email or Username' py={6} w={'full'}
          value={emailOrUsername}
          _placeholder={{ color: 'gray' }} onChange={(e) => setEmailOrUsername(e.target.value)}
        />
        <Input bg='#F2EBEBC2' placeholder='Password' type='password' py={6} w={'full'}
          value={password}
          _placeholder={{ color: 'gray' }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <HStack w={'full'} gap={8} justify={'space-between'}>
          <Button w={"50%"} bg={'#9B9B75'}
            _hover={{}}
            onClick={() => {
              navigate('/signup')
            }}>Sign Up</Button>
          <Button w={"50%"} bg={'#9B9B75'} _hover={{}} onClick={() => {
            navigate('/home')
          }}>Sign In</Button>
        </HStack>

      </VStack>
    </HStack>
  )
}

export default Login
