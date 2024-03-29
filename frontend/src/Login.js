import { React, useState, useContext } from 'react'
import {
FormControl,FormLabel,FormErrorMessage,Input,InputGroup,Button,InputRightElement,Image,Flex,useColorMode,useColorModeValue,
} from '@chakra-ui/react'
import "./App.css"
import { GoogleLoginButton } from "react-social-login-buttons";
import imgBg from "./login.jpeg"
import { auth, provider } from "./firebaseApp"
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
  const [Error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Password, setPassword] = useState('')
  const [User, setUser] = useState(null)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleFnameChange = (e) => setFname(e.target.value)
  const handleLnameChange = (e) => setLname(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("#E6FFFA", "#E6FFFA");

  const isError = email === ''
  const GoogleClickHandle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user);
      console.log(data.user);
    }).catch(() => {
      setError(true);
    })
  }
  return (
    <div className='OuterContanier'>
      <Image src={imgBg} position={'absolute'} objectFit={'cover'} width={"full"} height={"full"} zIndex={-10} />
      <Flex position={'absolute'} width={"100vw"} height={"100vh"} bg={colorMode === "dark" ? "blackAlpha.700" : "blackAlpha.500"} top={0} left={0} justifyContent={"Center"} alignItems={"Center"}></Flex>
      <div className="form" >
        <Flex position={'absolute'} width={"100%"} height={"100%"} bg={colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.600"} top={0} left={0} justifyContent={"Center"} alignItems={"Center"}
          borderRadius={"6%"}></Flex>
        <FormControl >
          <FormLabel textColor={bg}>First name</FormLabel>
          <Input placeholder='First name' value={Fname} onChange={handleFnameChange} textColor={bg} />
          <FormLabel textColor={bg}>Last name</FormLabel>
          <Input placeholder='Last name' value={Lname} onChange={handleLnameChange} textColor={bg} />
          <FormLabel textColor={bg}>Email address</FormLabel>
          <Input type='email' value={email} onChange={handleEmailChange} placeholder='Enter Email' textColor={bg} />
          {isError && <FormErrorMessage>Valid Email Required</FormErrorMessage>}
          <FormLabel textColor={bg}>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              value={Password}
              onChange={handlePasswordChange}
              textColor={bg}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button className="submit" colorScheme='green'>Register</Button>
      </div>
      <div  className='google'>
      <GoogleLoginButton onClick={GoogleClickHandle}>
         <span>Google Login</span>
      </GoogleLoginButton>
      </div>
    </div>
  )
}

export default Login
