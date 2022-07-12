import React from 'react'
import { Button, Box, Heading, Center} from '@chakra-ui/react';
import { Icon} from '@chakra-ui/react'
const ConnectionStatus = () => {
  return (
    <Box display="flex" alignItems="center" overflowX={["scroll", "scroll", "hidden"]} >
      <Heading size="lg" ml="50px" >
        Status:
      </Heading>
      <Box
        w="100vw"
        h="80px"
        padding="12px"
        display="flex"
        justifyContent="around"
      >
        <Center
          bg="#141414"
          border="4px solid black"
          p="10px"
          px="20px"
          borderRadius="5px"
          minWidth="150px"
          mx="20px"
        >
        
        <Icon display="inline" viewBox='0 0 200 200' color='#4DDC37' m="2px" mb="5px">
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
         <Heading display="inline" size="md" ml="4px">WebCam</Heading>
        </Center>
        <Center
           bg="#141414"
           border="4px solid black"
           p="10px"
           px="20px"
           borderRadius="5px"
           minWidth="150px"
        >
        <Icon display="inline" viewBox='0 0 200 200' color='#f12222' m="2px" mb="5px">
          <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
          />
        </Icon>
        
         <Heading display="inline" size="md" ml="4px">Backend-Server</Heading>
        </Center>

      </Box>
      </Box>
  )
}


export default ConnectionStatus;
