import { useState } from "react"
import { Flex, Image} from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import Login from "../Login";
import Panel from "../Panel";
import MactekLogo from "../../assets/logo-mactek.png"



export default function SecurityPanel(){

    const [isLogged, setIsLogged] = useState<boolean>(false)

    return (

        <>
         <Flex w="100%" h="100%" >
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
        
            <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />

                <Flex zIndex={900} w="100%" justifyContent={"center"} position={"relative"} alignItems={"center"} flexDir={"column"}>
                <Flex as={"a"} href="/" w={"200px"} h="41px" position={"absolute"} top="30" zIndex={900}>
                    <Image   w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                </Flex>
                    {!isLogged ? <Login setIsLogged={setIsLogged}/> : <Panel/>}
                </Flex>
            </Flex> 
        </>
    )
}