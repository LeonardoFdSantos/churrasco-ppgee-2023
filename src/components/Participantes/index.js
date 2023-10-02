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
export default function Page() {  
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
                    <Text>Participações Totais</Text>
                </CardBody>
            </Card>
            <TableContainer>
                <Table variant='striped' colorScheme='blackAlpha'>
                    <TableCaption placement='top'>Tabela sobre participação dos Professores</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Professores</Th>
                        <Th>Acompanhantes de Professores</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{data[0].professores}</Td>
                        <Td>{data[0].acompanhantes_professores}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table variant='striped' colorScheme='orange'>
                    <TableCaption placement='top'>Tabela sobre participação dos Alunos</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Alunos Totais</Th>
                        <Th>Alunos de Graduação</Th>
                        <Th>Alunos de Pós-Graduação</Th>
                        <Th>Alunos Vegetarianos</Th>
                        <Th>Alunos que Bebem Chopp</Th>
                        <Th>Alunos que não Bebem Chopp</Th>
                        <Th>Auxiliares para o Dia</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{data[0].alunos}</Td>
                        <Td>{data[0].alunos_graduacao}</Td>
                        <Td>{data[0].alunos_pos_graduacao}</Td>
                        <Td>{data[0].alunos_vegetarianos}</Td>
                        <Td>{data[0].alunos_com_chopp}</Td>
                        <Td>{data[0].alunos_sem_chopp}</Td>
                        <Td>{data[0].auxiliares_dia}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Divider />
            <TableContainer>
                <Table variant='striped' colorScheme='green'>
                    <TableCaption placement='top'>Tabela sobre participação dos acompanhantes dos Alunos</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Acompanhantes Alunos Totais</Th>
                        <Th>Acompanhantes que Bebem Chopp</Th>
                        <Th>Acompanhantes que não Bebem Chopp</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{data[0].acompanhantes_alunos_totais}</Td>
                        <Td>{data[0].acompanhantes_alunos_com_chopp}</Td>
                        <Td>{data[0].acompanhantes_alunos_sem_chopp}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table variant='striped' colorScheme='red'>
                    <TableCaption placement='top'>Tabela sobre pagamentos</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>Pagamentos dos Acompanhantes</Th>
                        <Th>Pagamentos do Transporte</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{data[0].pagamentos_acompanhantes}</Td>
                        <Td>{data[0].pagamentos_transporte}</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </main>
    </ChakraProvider>
  )
}