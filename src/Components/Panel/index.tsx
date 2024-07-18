import { Flex, Image } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"


export default function Panel(){

    return (
        <>
            <Flex w="100%" h="100%" >
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
            <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                <Flex zIndex={900} w="100%" justifyContent={"center"} alignItems={"center"}>
                    <Flex border="1px solid red" w="50%" minH={"100vh"}>
                        <Flex border="1px solid blue" h="100%">

                        </Flex>
                    </Flex>
                </Flex>
            </Flex> 
        </>
    )
}