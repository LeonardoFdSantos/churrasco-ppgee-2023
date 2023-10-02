import { ChakraProvider } from '@chakra-ui/react';
import { Card, Text, CardBody } from '@chakra-ui/react'

export default function Home() {  
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