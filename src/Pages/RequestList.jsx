import { Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import ChartItem from '../components/ChartItem'
import Navbar from '../components/bars/Navbar'

const RequestList = () => {
    const [userRequestList, setUserRequestList] = useState([]) // Initialize an empty array
    const [loading, setLoading] = useState(true) // To track the loading state
    const [error, setError] = useState(null) // To track errors

    // Replace with the actual user_id or retrieve it from session/local storage
    const user_id = 4;

    useEffect(() => {
        const fetchUserRequests = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/auth/requests/${user_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch requests');
                }
                const data = await response.json();
                // Assuming the response structure is as mentioned in the API response
                setUserRequestList(data.requests);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Set loading to false once the request is done
            }
        }

        fetchUserRequests();
    }, [user_id]); // Effect will run when the component mounts or user_id changes

    if (loading) {
        return (
            <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'} justifyContent="center" alignItems="center">
                <Navbar />
                <p>Loading...</p> {/* You can replace this with a loading spinner */}
            </Flex>
        );
    }

    if (error) {
        return (
            <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'} justifyContent="center" alignItems="center">
                <Navbar />
                <p>Error: {error}</p>
            </Flex>
        );
    }

    return (
        <Flex bg='white' h={'100vh'} w={'100%'} color={'black'} direction={'column'}>
            <Navbar />
            <Flex p={3} direction={'column'} gap={3}>
                {userRequestList.map((userRequest) => (
                    <ChartItem
                        key={userRequest.requestID}
                        id={userRequest.requestID}
                        imageSrc={userRequest.ImageURL}
                        description={userRequest.Descryption}
                        stock={userRequest.Quantity} // Assuming stock = Quantity
                        price={userRequest.Price}
                        status={userRequest.State}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default RequestList;

