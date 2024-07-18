import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect } from "react";





export default function IndividualModule() {

    const params = useParams()
    
    useEffect(() => {
        console.log(params.id)
    }, [])

    return (
        <>
            <Flex w="100%" minH="80vh" justifyContent={"center"}>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
                <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                <Flex w="50%" zIndex={900} p="120px 0 0 0" >
                    <Flex flexDir={"column"} gap="40px">
                        <Heading color={"#fbc431"} w="100%" textAlign={"center"}>Modulo x</Heading>
                        <Text color={"rgba(255,255,255,0.8)"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )

}