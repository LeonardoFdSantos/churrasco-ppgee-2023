import axios from 'axios';

import { useEffect, useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import {
    Table,
    Thead,
    Tbody,
    Divider,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';

import { Card, Text, CardBody } from '@chakra-ui/react'

const baseURL = "https://api.steinhq.com/v1/storages/651605b561eb47055da02529/DashBoard";
export default function Home() {  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    };
    
    fetchData();

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 2 minutes
    }, 600000);

    return () => clearInterval(intervalId);

  }, []);

  if (!data) return null;

  return (
    <ChakraProvider>
        <main>
            <Card>
                <CardBody>
                    <Text>Informações sobre o Churrasco do PPGEE</Text>
                    <Text>Use o Menu acima para navegação no sistema</Text>
                </CardBody>
            </Card>
        </main>
    </ChakraProvider>
  )
}