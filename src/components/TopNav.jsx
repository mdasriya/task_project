import React, { useContext, useState } from 'react'
import { Input, InputGroup, Menu, Image, Button, MenuItem, InputLeftElement, Text, Icon, Box, MenuButton, Avatar, MenuList, MenuDivider, Flex, AvatarGroup } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import '../App.css'
import Kanban from './Kanban';
import Context, { Data } from './Context';

const TopNav = ({ handleOpenSide}) => {
    //  const [inside, setInside]  = useState("Mobile App")
    const {text}=useContext(Data)
    // console.log(data);



    return (
        <Box textAlign={"end"} justifyContent={"end"}>
            <Box borderBottom={"1px solid gray"} width={"100%"} display={"flex"} p={5} justifyContent={"space-between"} alignItems={"center"} >

                <Box display={"flex"} gap={5}>
                    <i className="bi bi-chevron-double-right" onClick={handleOpenSide}></i>
                    <InputGroup width={"400px"} mt={"-10px"}>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<Icon as={FaSearch} color="gray.300" />}
                        />
                        <Input type="text" placeholder="Search for anything..." />
                    </InputGroup>
                </Box>

                <Box gap={7} display={"flex"}>
                    <Box>

                        <i style={{ cursor: "pointer", fontSize: "22px" }} className="bi bi-calendar4-event"></i>
                    </Box>
                    <Box>

                        <i style={{ cursor: "pointer", fontSize: "22px" }} className="bi bi-chat-square-dots"></i>
                    </Box>
                    <Box>

                        <i style={{ cursor: "pointer", fontSize: "22px" }} className="bi bi-bell"></i>
                    </Box>


                    <Flex gap={5}>

                        <Menu>
                            <Box cursor={"pointer"} p={"0px 8px"} textAlign={"end"} alignItems={"center"}>
                                <Text> Anima Agrawal</Text>
                                <Text opacity={"0.6"}>U.P, India</Text>
                            </Box>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>

                                <Avatar mr={3}
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                                <i className="bi bi-chevron-down"></i>
                            </MenuButton>
                            <MenuList marginTop={"13px"}>
                                <MenuItem _hover={{ bg: "none" }}>
                                    <Input placeholder='Text box' />
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem>Lorem ipsum</MenuItem>
                                <MenuDivider />
                                <MenuItem>Sed mettis</MenuItem>
                                <MenuDivider />
                                <MenuItem>Mauris Aliquet</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                </Box>
            </Box>


            {/* *********************************Red Section is start******************************* */}

            <Box 
            // border={"1px solid red"} 
            padding={5} width={"100%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>

                <Box display={"flex"} gap={5} alignItems={"center"} >
                    <Text fontSize='3xl'>{text?text:"Mobile App"}</Text>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://kanban-19hrlu0a9-chintansheth2001.vercel.app/assets/edit-5b7ca014.svg'
                        alt='Dan Abramov'
                    />
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://kanban-19hrlu0a9-chintansheth2001.vercel.app/assets/link-e1a611f4.svg'
                        alt='Dan Abramov'
                    />
                </Box>


                <Box>

                    <Menu>



                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}
                            disabled="flex"
                        >

                            <Flex gap={4}>
                                <Box>
                                    <Image
                                        boxSize='30px'
                                        objectFit='cover'
                                        src='https://kanban-19hrlu0a9-chintansheth2001.vercel.app/assets/add-square-8a945af5.svg'
                                        alt='Dan Abramov'
                                    />
                                </Box>

                                <Box>
                                    <Text fontSize='lg'>Invite</Text>
                                </Box>
                                <Box>

                          
                                <AvatarGroup size='sm' max={4}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
</Box>
                            </Flex>

                        </MenuButton>
                        <MenuList marginTop={"13px"}>
                            <MenuItem _hover={{ bg: "none" }}>
                                <Input placeholder='Text box' />
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>Lorem ipsum</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sed mettis</MenuItem>
                            <MenuDivider />
                            <MenuItem>Mauris Aliquet</MenuItem>
                        </MenuList>

                    </Menu>


                </Box>

            </Box>
            {/* *********************************Red Section is end******************************* */}





            {/* *********************************Filter Section is start******************************* */}

<Box  display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={"0px,20px"} ml={6}>


            <Box display={"flex"} gap={4}  >
                <Box>
                    <Flex alignItems={'center'} border={"1px solid gray"} borderRadius={5}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Box display={"flex"} gap={3} p={3} cursor={"pointer"}>
                                    <Box>
                                        <i className="bi bi-funnel"></i>
                                    </Box>
                                    <Box>
                                        <Text textStyle={"none"}>Filter</Text>
                                    </Box>
                                    <Box>
                                        <i className="bi bi-chevron-down"></i>
                                    </Box>

                                </Box>
                            </MenuButton>
                            <MenuList marginTop={"13px"}>
                            <MenuItem _hover={{ bg: "none" }}>
                                <Input placeholder='Text box' />
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>Lorem ipsum</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sed mettis</MenuItem>
                            <MenuDivider />
                            <MenuItem>Mauris Aliquet</MenuItem>
                        </MenuList>
                        </Menu>
                    </Flex>
                </Box>
                <Box>
                    <Flex alignItems={'center'} border={"1px solid gray"} borderRadius={5}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Box display={"flex"} gap={3} p={3} cursor={"pointer"}>
                                    <Box>
                                    <i className="bi bi-calendar-event"></i>
                                    </Box>
                                    <Box>
                                        <Text textStyle={"none"}>Today</Text>
                                    </Box>
                                    <Box>
                                        <i className="bi bi-chevron-down"></i>
                                    </Box>

                                </Box>
                            </MenuButton>
                            <MenuList marginTop={"13px"}>
                            <MenuItem _hover={{ bg: "none" }}>
                                <Input placeholder='Text box' />
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>Lorem ipsum</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sed mettis</MenuItem>
                            <MenuDivider />
                            <MenuItem>Mauris Aliquet</MenuItem>
                        </MenuList>
                        </Menu>
                    </Flex>
                </Box>

            </Box>



           
    <Box display={"flex"} gap={4} p={5}  alignItems={"center"}>
               
                <Box>
                    <Flex alignItems={'center'} border={"1px solid gray"} borderRadius={5}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Box display={"flex"} gap={3} p={3} cursor={"pointer"}>
                                    <Box>
                                    <i className="bi bi-people"></i>
                                    </Box>
                                    <Box>
                                        <Text textStyle={"none"}>Share</Text>
                                    </Box>
                                    <Box>
                                   
                                    </Box>

                                </Box>
                            </MenuButton>
                            <MenuList marginTop={"13px"}>
                            <MenuItem _hover={{ bg: "none" }}>
                                <Input placeholder='Text box' />
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem>Lorem ipsum</MenuItem>
                            <MenuDivider />
                            <MenuItem>Sed mettis</MenuItem>
                            <MenuDivider />
                            <MenuItem>Mauris Aliquet</MenuItem>
                        </MenuList>
                        </Menu>
                    </Flex>
                </Box>

                <Box>
                <i style={{border:"1px solid #5030E5",borderRadius:"5px",fontSize:"20px",rotate:"40deg", padding:"8px",backgroundColor:"#5030E5",color:"white"}} className="bi bi-pause-fill"></i>
                </Box>

                <Box>
                <i className="bi bi-grid"></i>
                </Box>

            </Box>



            </Box>

<Box>

<Kanban  />
</Box>



        </Box>
    )
}

export default TopNav
