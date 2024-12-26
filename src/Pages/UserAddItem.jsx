import React, { useState, useEffect } from 'react';
import Navbar from '../components/bars/Navbar';
import { Flex, HStack, Input, Text, Textarea, VStack, Select, Button, Image, Box } from '@chakra-ui/react';

const UserAddItem = () => {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [color, setColor] = useState('');
  const [masterCategory, setMasterCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [articleType, setArticleType] = useState('');
  const [usage, setUsage] = useState('');
  const [quantity, setQuantity] = useState(1);

  // State to hold the options for dropdowns
  const [genderListOptions, setGenderListOptions] = useState([]);
  const [colorListOptions, setColorListOptions] = useState([]);
  const [seasonListOptions, setSeasonListOptions] = useState([]);
  const [masterCatListOptions, setMasterCatListOptions] = useState([]);
  const [subCatListOptions, setSubCatListOptions] = useState([]);
  const [articleTypeListOptions, setArticleTypeListOptions] = useState([]);
  const [usageListOptions, setUsageListOptions] = useState([]);

  // Fetch options from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/products/unique-values');
        const data = await response.json();
        // Update state with the data received from the API
        setGenderListOptions(data.gender.map((item) => ({ label: item, value: item })));
        setColorListOptions(data.color.map((item) => ({ label: item, value: item })));
        setSeasonListOptions(data.Season.map((item) => ({ label: item, value: item })));
        setMasterCatListOptions(data.masterCategory.map((item) => ({ label: item, value: item })));
        setSubCatListOptions(data.SubCategory.map((item) => ({ label: item, value: item })));
        setArticleTypeListOptions(data.ArticleType.map((item) => ({ label: item, value: item })));
        setUsageListOptions(data.Usage1.map((item) => ({ label: item, value: item })));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle submit
  const handleAddItem = async () => {
    // Validate the inputs
    if (!description || !price || !quantity || !gender || !masterCategory || !season || !color || !subCategory || !articleType || !usage) {
      alert('Please fill all the required fields.');
      return;
    }

    const userId = localStorage.getItem('user_id'); // Get user_id from localStorage

    const formData = new FormData();
    formData.append('description', description);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('user_id', userId);
    formData.append('gender', gender);
    formData.append('master_category', masterCategory);
    formData.append('season', season);
    formData.append('color', color);
    formData.append('sub_category', subCategory);
    formData.append('article_type', articleType);
    formData.append('usage', usage);

    try {
      const response = await fetch('http://127.0.0.1:8000/auth/requests', {
        method: 'POST',
        body: formData, // Send form data, not JSON
      });

      const data = await response.json();

      if (response.ok) {
        alert('Item added successfully');
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error adding item:', error);
      alert('An error occurred while adding the item.');
    }
  };

  return (
    <Flex bg="white" h="100vh" w="100%" color="black" direction="column">
      <Navbar />
      <HStack align="center" justify="center">
        <Box w="full" p="4">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Product Image"
          />
        </Box>
        <Flex w="full" p={5} direction="column" gap={3}>
          <VStack w="full" align="flex-start">
            <Text>Product description</Text>
            <Textarea
              border="1px"
              borderColor="lightgray"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </VStack>
          <HStack w="full">
            <VStack w="full" align="flex-start">
              <Text>Price</Text>
              <Input
                border="1px"
                borderColor="lightgray"
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </VStack>
            <VStack w="full" align="flex-start">
              <Text>Gender</Text>
              <Select
                placeholder="Gender"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setGender(e.target.value)}
              >
                {genderListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
          </HStack>
          <HStack w="full">
            <VStack w="full" align="flex-start">
              <Text>Season</Text>
              <Select
                placeholder="Season"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setSeason(e.target.value)}
              >
                {seasonListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="full" align="flex-start">
              <Text>Color</Text>
              <Select
                placeholder="Color"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setColor(e.target.value)}
              >
                {colorListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
          </HStack>

          <HStack w="full">
            <VStack w="full" align="flex-start">
              <Text>Master Category</Text>
              <Select
                placeholder="Master Category"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setMasterCategory(e.target.value)}
              >
                {masterCatListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="full" align="flex-start">
              <Text>Sub Category</Text>
              <Select
                placeholder="Sub Category"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setSubCategory(e.target.value)}
              >
                {subCatListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
          </HStack>

          <HStack w="full">
            <VStack w="full" align="flex-start">
              <Text>Article Type</Text>
              <Select
                placeholder="Article Type"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setArticleType(e.target.value)}
              >
                {articleTypeListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
            <VStack w="full" align="flex-start">
              <Text>Usage</Text>
              <Select
                placeholder="Usage"
                border="1px"
                borderColor="lightgray"
                w="full"
                onChange={(e) => setUsage(e.target.value)}
              >
                {usageListOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </VStack>
          </HStack>
          <HStack w="full" align="flex-end">
            <VStack align="flex-start" w="full">
              <Text>Quantity</Text>
              <Input
                border="1px"
                borderColor="lightgray"
                value={quantity}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </VStack>
            <Button w="full" bg="#9B9B75" _hover={{}} onClick={handleAddItem}>
              Add Item
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default UserAddItem;
