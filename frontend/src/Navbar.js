import { Flex, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoAdd, IoLogOut, IoMoon, IoSearch, IoSunny } from "react-icons/io5";
export const Navbar = ({ user }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setsearchTerm] = useState()
  const bg = useColorModeValue("#fff", "#fff");
  const bgl = useColorModeValue("dark", "dark");
  const navigate = useNavigate();
  return (

    <Flex justifyContent={"space-between"} alignItems="center" width={"100vw"}
      position={'relative'} zIndex={"100"} className="nav_style" minWidth={"200px"}

      p={2} borderColor={"black"} bg={colorMode == "dark" ? "#aaaaaa" : "#aaaaaa"} borderBottomRadiusRadius={"5px"}
    >
      <Flex position={'absolute'} width={"100%"} height={"100%"} bg={colorMode === "dark" ? "blackAlpha.500" : "blackAlpha.500"} top={0} left={0} justifyContent={"Center"} alignItems={"Center"} zIndex={-2}></Flex>
      <Link to={'/'}>
        <Image width={"150px"} minWidth={"75px"} />
      </Link>
      <InputGroup mx={6} width={{ base: '80vw', md: '70vw', lg: '65vw' }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<IoSearch fontSize={25} color="#fff" />}
        />
        <Input type="text" placeholder="Search..." fontSize={18} fontWeight="medium"
          borderColor={colorMode === "light" ? "dark" : "white"} borderWidth={"2px"}
          className='nav'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
      </InputGroup>
      <Flex justifyContent={"center"} alignItems="center">
        <Flex width={"40px"} height="40px" justifyContent={"center"} alignItems="center" cursor={"pointer"} borderRadius="5px"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? (
            <IoMoon fontSize={25} color={"#fff"} />
          ) : (
            <IoSunny fontSize={25} />
          )}
        </Flex>
        <Link to={"/"}>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            bg={bg}
            borderRadius="10%"
            mx={{ base: '0px', md: '2px', lg: '56px' }}
            cursor="pointer"
            _hover={{ shadow: "md" }}
            transition="ease-in-out"
            transitionDuration={"0.3s"}
            height={{ lg: '45px' }}
            width={{ lg: '45px' }}
          // hight={{ base: '20px', md: '30px', lg: '50%' }}
          >

          </Flex>
        </Link>
        <Menu>
          <MenuButton>
            <Image

              referrerPolicy="no-referrer"
              width="40px"
              height="40px"
              minWidth={"40px"}
              marginLeft={"10px"}
              rounded="full"
            />
          </MenuButton>
          <MenuList shadow={"lg"} zIndex={4}>
            <Link to={`/userDetail/${user ? user[0].uid : 1}`}>
              <MenuItem>My Account</MenuItem>
            </Link>
            <MenuItem
              flexDirection={"row"}
              alignItems="center"
              gap={4}
              onClick={() => {
                localStorage.clear();
                navigate("/login", { replace: true });
              }}
            >
              Logout <IoLogOut fontSize={20} />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}
export default Navbar
