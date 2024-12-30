import React, { useState } from 'react';
import { Box, HStack, Text, Input, VStack, Button, Image, Alert, AlertIcon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage('');
    try {
      const payload = {
        username_or_email: emailOrUsername,
        password: password,
      };

      const response = await axios.post('http://127.0.0.1:8000/auth/login', payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      localStorage.setItem('user_id', response.data.user_id);
      localStorage.setItem('user_type', response.data.user_type);
      localStorage.setItem('user_Name', response.data.user_Name);
      localStorage.setItem('user_email', response.data.user_email);

      if (response.data.user_type) {
        navigate('/home'); // Redirect to home on successful login
      }
    } catch (error) {
      console.error('Login Error:', error.response);
      setErrorMessage(error.response?.data?.detail || 'An error occurred while logging in.');
    }
  };

  return (
    <HStack align="center" justify="space-between" h="100vh" bg="white" color="black">
      <Box w="50%">
        <Image
          w="100%"
          h="3xl"
          src='./login.png'
          alt="Image not found"
        />
      </Box>
      <VStack w="50%" px={10} gap={7}>
        <Text fontSize="3xl">Login</Text>
        {errorMessage && (
          <Alert status="error" w="full">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
        <Input
          bg="#F2EBEBC2"
          placeholder="Email or Username"
          py={6}
          w="full"
          value={emailOrUsername}
          _placeholder={{ color: 'gray' }}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />
        <Input
          bg="#F2EBEBC2"
          placeholder="Password"
          type="password"
          py={6}
          w="full"
          value={password}
          _placeholder={{ color: 'gray' }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <HStack w="full" gap={8} justify="space-between">
          <Button w="50%" bg="#9B9B75" _hover={{}} onClick={() => navigate('/signup')}>
            Sign Up
          </Button>
          <Button w="50%" bg="#9B9B75" _hover={{}} onClick={handleLogin}>
            Sign In
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Login;
