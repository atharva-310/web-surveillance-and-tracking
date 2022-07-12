import React,{useEffect, useRef, useState} from 'react'
import WebCam from './components/WebCam';
import { Button, Box, Heading, Center, List, ListItem, ListIcon} from '@chakra-ui/react';
import ConnectionStatus from "./components/ConnectionStatus"
import { TbFaceId } from 'react-icons/tb';
import {GiBodyBalance, GiCctvCamera} from "react-icons/gi"
import {IoHandRight} from "react-icons/io5"

const App = () => {
  const camBoxRef = useRef(null);
  
  
  const [webCamActive, setWebCam] = useState(false);
  useEffect(()=>{
    console.log()
  },[])
  return (
    <div>
      <ConnectionStatus />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        <Box
          width={["90vw","90vw","90vw", "60vw", "60vw", "60vw"]}
          maxWidth="1024px"
          height={["300px", "400px","500px","570px"]}
          borderRadius="20px"
          mt="40px"
          mx={["auto","auto","40px"]}
          bg="#141414"
          ref={camBoxRef}
        >
          {webCamActive && <WebCam width={camBoxRef.current.offsetWidth} height={camBoxRef.current.offsetHeight} />}
        </Box>
        <Box width={["90vw","90vw","90vw", "30vw", "30vw", "30vw"]}
          height="500px"
          borderRadius="20px"
          mt="40px"
          mx={["auto","auto","10px"]}
        >
          <Center
           
          //  width={["90vw","90vw","90vw","60vw", "60vw"]}
          //  mt="20px"
          //  mx={["auto","auto","40px"]}
          >
           
           <Button 
             
             height="80px"
            
             variant="solid"
             width="100%"
             colorScheme="green"
             onClick={() => {setWebCam(prevState=> !prevState)}}
           > <Heading fontSize="40px" p="10px">{webCamActive ? "Stop" : "Start"} Detection</Heading></Button>
           <br />
           
           
          </Center>
          <List spacing={3}  fontSize="30px" mx="auto" width="100%" textAlign="center" mt="20px">
          <ListItem>
            <Button size="50px" p="10px"  width="100%" {...(true ? {isActive: true}  : {isDisabled: true} )}>
            <ListIcon as={TbFaceId} color='red.500' />
            Face Tracking
            </Button>
          </ListItem>
          <ListItem>
            <Button size="50px" p="10px" {...(true ? {isActive: true}  : {isDisabled: true} )} width="100%">
            <ListIcon as={GiBodyBalance} color='blue.500' />
            Pose Detection
            </Button>
          </ListItem>
          <ListItem >
              <Button size="50px" p="10px" {...(true ? {isActive: true}  : {isDisabled: true} )} width="100%">
              <ListIcon as={IoHandRight} color='green.500' />
              Hand Tracking
              </Button>
          </ListItem>
          <ListItem >
            <Button size="50px" p="10px" {...(true ? {isActive: true}  : {isDisabled: true} )} width="100%">
            <ListIcon as={GiCctvCamera} color='yellow.500' />
            Surveillance
            </Button>
          </ListItem>
          
          </List>
          
        </Box>
      
      </Box>
     
      
      
      
    </div>
  )
}

export default App;