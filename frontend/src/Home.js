import { Alert, AlertIcon, Button, Flex, FormLabel, Grid, GridItem, Image, Input, Menu, MenuButton, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'
import { IoCloudUpload, IoPause, IoPlay, IoTrash } from 'react-icons/io5'
import Spinner from './Spinner.js';
import RichEditor from './RichEditor.js'
import "./Home.css"
import Navbar from "./Navbar.js"
import imgBg from "./Home.jpeg"
const Home = () => {

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("Category");
    const [imageAsset, setimageAsset] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(1);
    const [pause, setPause] = useState(true);
    const [msg, setMsg] = useState("Uploading your video");
    const [alert, setAlert] = useState(false);
    const [alertStatus, setAlertStatus] = useState("");
    const [alertMsg, setAlertMsg] = useState("");
    const [alertIcon, setAlertIcon] = useState(null);
    const [description, setDescription] = useState("");
    const [uploadPressed, setUploadPressed] = useState(false);
    const { colorMode } = useColorMode();
    const bg = useColorModeValue('gray.50', 'gray.900');
    const textColor = useColorModeValue('gray.900', 'gray.50');



    return (
        <div height={"100vh"} width="100vh" position="relative">
            <Grid
                templateRows='repeat(10, 1fr)'
                templateColumns='repeat(2, 1fr)'
                height={"100vh"}
                width={"100vw"}
                gap={2}
                backgroundColor={bg}
                zIndex={5}
            >
                <GridItem colSpan={2} ><Navbar /></GridItem>
                <GridItem colSpan={1} rowSpan={9} borderRightWidth={"2px"} borderColor={"dark"}>
                    <Flex justifyContent={"center"} alignItems='center' margin={'auto'} my={"20px"}>
                        <Flex
                            border={"1px"}
                            borderColor="gray.300"
                            borderRadius={"md"}
                            flexDirection={"column"}
                            alignItems="center"
                            justifyContent={"center"}
                        >

                            {alert && (
                                <Alert status='error'>
                                    <AlertIcon />
                                    There was an error processing your request
                                </Alert>
                            )}

                            <Input
                                variant={"flushed"}
                                placeholder="Title"
                                focusBorderColor="gray.400"
                                isRequired
                                errorBorderColor="red"
                                type={"text"}
                                _placeholder={{ color: "gray.500" }}
                                fontSize={20}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />
                            <Flex
                                border={"1px"}
                                borderColor="gray.500"
                                borderStyle="dashed"
                                width="full"
                                minHeight={"250px"}
                                borderRadius={"md"}
                                overflow="hidden"
                                position={"relative"}
                                margin={'auto'}

                            >
                                {!imageAsset ? (
                                    <FormLabel width={"full"} >
                                        <Flex direction={"coloum"}
                                            alignItems="center"
                                            justifyContent={"center"}
                                            height="full"
                                            width={"full"}
                                        >

                                            <Flex direction={"coloum"}
                                                alignItems="center"
                                                justifyContent={"center"}
                                                height="full"
                                                width={"full"}
                                                cursor="pointer"
                                            >
                                                {loading

                                                    ? (<Flex direction={"column"} alignItems="center"  >
                                                        <Spinner msg={msg} progress={progress} />
                                                        {pause === false ? <Button margin={2} colorScheme={"linkedin"}> <IoPause color={textColor} fontSize={"15"} /> Pause</Button>
                                                            : <Button margin={2} colorScheme={"linkedin"} >  <IoPlay color={textColor} fontSize={"15"} /> Resume</Button>
                                                        }
                                                        <Button >Cancel</Button></Flex>)

                                                    : (<Flex direction={"column"} justifyContent={"center"} alignItems="center" >
                                                        <div> <IoCloudUpload fontSize={28}
                                                            color={`${colorMode === "dark" ? "#f1f1f1" : "#111"}`}
                                                        /></div>
                                                        <div>
                                                            <Text mt={"5"} fontSize={20} color={textColor}
                                                            >Click here to upload</Text></div>

                                                    </Flex>
                                                    )}
                                            </Flex>

                                        </Flex>

                                        {!loading && (<input
                                            type="file"
                                            name='upload_image'

                                            style={{ width: 0, height: 0 }}
                                            accept=" image/*"
                                        />)}

                                    </FormLabel>

                                )
                                    : (<Flex alignItems="center"
                                        justifyContent={"center"}
                                        height="full"
                                        width={"full"}
                                        position={"relative"}

                                    >
                                        <Flex alignItems="center"
                                            justifyContent={"center"}
                                            height="40px"
                                            width={"40px"}
                                            rounded="full"
                                            cursor={"pointer"}
                                            zIndex={10}
                                            bg={"red"}
                                            top={5}
                                            right={5}

                                            position={"absolute"}>

                                            <IoTrash fontSize={20} color="white" />

                                        </Flex>
                                        <Image src={imageAsset} controls style={{ width: "100%", height: "100%" }} />

                                    </Flex>)}
                            </Flex>

                            {imageAsset ? <Button isLoading={uploadPressed} loadingText="Uploading" colorScheme={"linkedin"} width={"full"} fontSize={20} _hover={{ shadow: "lg" }}

                                variant={`${uploadPressed ? "outline" : "solid"}`}
                            >Upload</Button> : null}
                            <Flex direction={"column"} maxWidth="100%" minWidth={"100%"} minHeight={"250px"} alignItems={"center"} justifyContent="center" >
                                <RichEditor setDescription={setDescription} theme={colorMode} value={description} />
                            </Flex>

                        </Flex>

                    </Flex>
                </GridItem>
                <GridItem colSpan={1} rowSpan={9} />
            </Grid>

        </div>
    )
}

export default Home
