
import { Box, HStack, Text, Input, VStack, Button, Image, Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');
    const [day, setDay] = useState()
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [city, setCity] = useState()
    useEffect(() => {
        console.log(password);
    }, [password]);

    const navigate = useNavigate();

    return (
        < HStack align={'center'} justify={'space-between'} h={'100vh'} bg={'white'} color={'black'}>
            <Box w={'50%'}>
                <Image w={'100%'} h={'3xl'} src='https://s3-alpha-sig.figma.com/img/98ea/d307/9f8c9b50d96de1a05cf1251c433cdc5a?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ba7EfJZtrRugjY2K~u75aJR8hTBsnnXDM-Zcqv5UkLJ3C367jnn-y14tWoOVgD7c3mIeJ109zZEvyN7DKHYhMM8Gn36jik4l8l7yePxyiBQezhbzaN8nKywoY-ZY0IiH53O~5sq5rhm0tp~TsZrnnuJWVSrUYJ921dwotZGdIR99dzhxWfMfyhdhXU1id331GE27qvNsj10Lgv5-7ZmjVX37afuFj7Xsa7cIURD7l6ih~mHvb1qY9SmQcx8GehmOEDQx3jqqWr7SUs1~oU2PwhV3OqmenpZl-lJhMn8~P4MlfIyceGAahLbPNO60FEYTlNfPm6LMoQvAtIvgWauXkw__' alt='Image not found' />
            </Box>
            <VStack w={'50%'} px={10} gap={7}>
                <Text fontSize={'3xl'} >Sign Up</Text>
                <Input bg='#F2EBEBC2' placeholder='Email ' py={6} w={'full'}
                    value={email}
                    _placeholder={{ color: 'gray' }} onChange={(e) => setEmail(e.target.value)}
                />
                <Input bg='#F2EBEBC2' placeholder='Username' py={6} w={'full'}
                    value={userName}
                    _placeholder={{ color: 'gray' }} onChange={(e) => setUserName(e.target.value)}
                />
                <Input bg='#F2EBEBC2' placeholder='Password' type='password' py={6} w={'full'}
                    value={password}
                    _placeholder={{ color: 'gray' }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Select color={'gray'} placeholder='Gender' bg='#F2EBEBC2' type='password' w={'full'} onChange={(e) => {
                    setGender(e.target.value)
                }}
                >
                    <option value='female'>Female</option>
                    <option value='mail'>Mail</option>
                </Select>
                <HStack align={'space-between'}>
                    <Input bg='#F2EBEBC2' placeholder='DD' py={6} type='number'

                        value={day}
                        _placeholder={{ color: 'gray' }} onChange={(e) => setDay(e.target.value)}
                    />
                    <Input bg='#F2EBEBC2' placeholder='MM' py={6} type='number'
                        value={month}
                        _placeholder={{ color: 'gray' }} onChange={(e) => setMonth(e.target.value)}
                    />
                    <Input bg='#F2EBEBC2' placeholder='YYYY' py={6} type='number'
                        value={year}
                        _placeholder={{ color: 'gray' }} onChange={(e) => setYear(e.target.value)}
                    />
                </HStack>
                <Input bg='#F2EBEBC2' placeholder='City' py={6} w={'full'}
                    value={city}
                    _placeholder={{ color: 'gray' }}
                    onChange={(e) => setCity(e.target.value)}
                />
                <Button w={"100%"} bg={'#9B9B75'} _hover={{}} onClick={() => {
                    //sign up function call
                }}>Sign Up</Button>


            </VStack>
        </HStack>
    );
};

export default Signup;
