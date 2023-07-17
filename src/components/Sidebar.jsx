import React, { useContext, useState } from 'react'
import { Image, Box, Text,Circle, Button } from '@chakra-ui/react'
import TopNav from './TopNav'
import {data} from "./data"

import Context, { Data } from './Context';



const Sidebar = () => {
  const [side, setSide] = useState(true)
  const {SetText,text}=useContext(Data)
    // console.log(text);
// const data.SetText = () => {

// }


  const handleSide = () => {
    setSide((prev)=> !prev)

  }

const handleOpenSide = () => {
  setSide((prev)=> !prev)
}

  return (
    
    <Box display={"flex"}>
    {
      side && <Box  width={"20%"}  border={"1px solid gray"}> 
      <Box  width={"100%"} borderBottom={"1px solid gray"} 
       alignItems={"center"} justifyContent={"space-between"} display={"flex"} padding={7}>
  
        <Box className='logo' display={"flex"}  width={"100px"} alignItems={"center"} gap={2}>
            <Image
              boxSize='21px'
              objectFit='cover'
              src='https://kanban-19hrlu0a9-chintansheth2001.vercel.app/assets/logo-e9f0ffae.svg'
              alt='logo' />
            <Text fontSize='15px' fontWeight={600}>Project M.</Text>
          
        </Box>
        <Box>
          <Image onClick={handleSide}
              boxSize='25px'
              objectFit='cover'
              src='https://kanban-19hrlu0a9-chintansheth2001.vercel.app/assets/arrowLeft-1d17ed92.svg'
              alt='arrow' />
          </Box>
  
      </Box>
  
  
  <Box borderBottom={"1px solid gray"} p={5}  alignItems={"center"}>
  {
    data.map((e,i)=><Box key={i} display={"flex"}   width={"100%"} alignItems={"center"} gap={5} >
      <i style={{fontSize:"20px", opacity:"0.6", marginBottom:"10px", cursor:"pointer"}} className={e.icon}></i>
      <Text fontSize={"18px"} opacity={"0.6"} fontWeight={600} cursor={"pointer"}>{e.text}</Text>
    </Box>)
  }
  </Box>
  
  
  <Box marginBottom={5}>
  
  
  <Box  mt={4}
  // border={"1px solid red"}
   width={"90%"}  display={"flex"} p={ "0px 20px"}  justifyContent={"space-between"}>
  <Text fontSize={"15px"} fontWeight={500} opacity={"0.8"} >MY PROJECTS</Text>
  <i className="bi bi-plus-circle"></i>
  </Box>
  
  <Box display={"flex"}  alignItems={"center"} _hover={{cursor:"pointer"}}>
  <i style={{fontSize:"40px",color:"green"}} className="bi bi-dot"></i>
  <Text fontWeight={500} opacity={"0.7"} _hover={{opacity:"1"}}  onClick={(e)=>SetText("Mobile App")}>Mobile App</Text>
  </Box>
  <Box display={"flex"}  alignItems={"center"} _hover={{cursor:"pointer"}}>
  <i style={{fontSize:"40px",color:"orange"}} className="bi bi-dot"></i>
  <Text fontWeight={500} opacity={"0.7"} _hover={{opacity:"1"}}  onClick={(e)=>SetText('Website Redesign')}>Website Redesign</Text>
  </Box>
  <Box display={"flex"}  alignItems={"center"} _hover={{cursor:"pointer"}}>
  <i style={{fontSize:"40px",color:"blue"}} className="bi bi-dot"></i>
  <Text fontWeight={500} opacity={"0.7"} _hover={{opacity:"1"}}  onClick={(e)=>SetText("Design Sysytem")}>Design Sysytem</Text>
  </Box>
  <Box display={"flex"}  alignItems={"center"} _hover={{cursor:"pointer"}}>
  <i style={{fontSize:"40px",color:"teal"}} className="bi bi-dot"></i>
  <Text fontWeight={500} opacity={"0.7"} _hover={{opacity:"1"}} value={"Wirefrmaes"} onClick={(e)=>SetText("Wirefrmaes")}>Wirefrmaes</Text>
  </Box>
  </Box>
  
  
  <Box  p={3} >
  
  
  <Box bg={"#f5f5f5"} border={"#e7e7e7"} borderRadius={10} textAlign={"center"} gap={2} p={1} display="flex" flexDirection={"column"} alignItems="center" justifyContent="center" height={"auto"}>
  <Circle size="60px" bg="#f6f1e0" marginTop={"-46px"} display="flex" alignItems="center" justifyContent="center">
  <i style={{color:"yellow",boxSizing:"30px", fontSize:"20px"}} className="bi bi-lightbulb-fill"></i>
    </Circle>
    <Text>Thoughts Time</Text>
    <Text fontSize={"14px"}>We don’t have any notice for you, till then you can share your thoughts with your peers.</Text>
  
  <Button borderRadius={"5px"} bg={"white"} _hover={{bg:"#e7e7e7"}} color={"black"}>Write a message</Button>
  
  
  </Box>
  
  
  </Box>
  
  
   </Box>
    }
  <Box width={"100%"}>
    <TopNav handleOpenSide={handleOpenSide} />
  </Box>
    </Box>
    
    
    
  )
}

export default Sidebar

 