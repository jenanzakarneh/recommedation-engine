import React, { useState } from 'react'
import Navbar from '../components/bars/Navbar'
import { Flex, HStack, Input, Text, Textarea, VStack, Select, Button, Image, Box } from '@chakra-ui/react'
const UserAddItem = () => {
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [gender, setGender] = useState()
  const [season, setSeason] = useState()
  const [color, setColor] = useState()
  const [masterCategory, setMasterCategory] = useState()
  const [subCategory, setSubCategory] = useState()
  const [articleType, setArticleType] = useState()
  const [usage, setUsage] = useState()
  const [quantity, setQuantity] = useState(1)
  const [genderListOptions, setGenderListOptions] = useState([{ label: "Female", value: "female" }, { label: "Mail", value: "mail" }])
  const [colorListOptions, setColorlistOptions] = useState([{ label: "Red", value: "red" }, { label: "Green", value: "green" }])
  const [seasonListOptions, setSeasonListOptions] = useState([{ label: "Winter", value: "winter" }])
  const [masterCatlistOptions, setMasterCatListOptions] = useState([{ label: "Master cat 1", value: "v1" }])
  const [subCatListOptions, setSubCatListOptions] = useState([{ label: "Sub category 1", value: "sub 1" }])
  const [articleTypeListOptions, setArticalTypeListOptions] = useState([{ label: "article type", value: 'at' }])
  const [usageListOptions, setUsageListOptions] = useState([{ label: "use case 1", value: "uc1" }])
  return (
    <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
      <Navbar />
      <HStack align={'center'} justify={'center'}> 
        <Box w={"full"} p={'4'}>
          <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
        </Box>
        <Flex w={'full'} p={5} direction={'column'} gap={3}>
          <VStack w={'full'} align={'flex-start'}>
            <Text>Product description</Text>
            <Textarea border={'1px'} borderColor={'lightgray'} value={description} onChange={(e) => setDescription(e.target.value)} />
          </VStack>
          <HStack w={'full'}>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Price</Text>
              <Input border={'1px'} borderColor={'lightgray'} value={price} type={'number'} onChange={(e) => setPrice(e.target.value)} />
            </VStack>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Gender</Text>
              <Select placeholder='Gender' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setGender(e.target.value)
              }}
              >{genderListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
          </HStack>
          <HStack w={'full'}>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Season</Text>
              <Select placeholder='Season' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setSeason(e.target.value)
              }}
              >{seasonListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Color</Text>
              <Select placeholder='Color' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setColor(e.target.value)
              }}
              >{colorListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
          </HStack>

          <HStack w={'full'}>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Master Category </Text>
              <Select placeholder='Master Category' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setMasterCategory(e.target.value)
              }}
              >{masterCatlistOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Sub Category</Text>
              <Select placeholder='Sub Category' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setSubCategory(e.target.value)
              }}
              >{subCatListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
          </HStack>

          <HStack w={'full'}>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Article Type</Text>
              <Select placeholder='Article Type' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setArticleType(e.target.value)
              }}
              >{articleTypeListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
            <VStack w={'full'} align={'flex-start'}>
              <Text>Usage</Text>
              <Select placeholder='Usage' border={'1px'} borderColor={'lightgray'} w={'full'} onChange={(e) => {
                setUsage(e.target.value)
              }}
              >{usageListOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </Select>
            </VStack>
          </HStack>
          <HStack w={'full'} align={'flex-end'}>
            <VStack align={'flex-start'} w={'full'}>
              <Text>Quantity</Text>
              <Input border={'1px'} borderColor={'lightgray'} value={quantity} type={'number'} onChange={(e) => setQuantity(e.target.value)} />
            </VStack>
            <Button w={'full'} bg={'#9B9B75'} _hover={{}} onClick={() => { }}>Add Item</Button>
          </HStack>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default UserAddItem
