import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModule, ModuleProps } from "../../Utils/ModulesDB";





export default function IndividualModule() {
    const [module, setModule] = useState<ModuleProps | undefined>()
    const params = useParams()

    useEffect(() => {
        const moduleInDB = getModule(params.tag ? params.tag : "")[0]
        setModule(moduleInDB)
    }, [])

    return (
        <>
            <Flex w="100%" minH="80vh" justifyContent={"center"}>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
                <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                {module ? <>
                    <Flex w="50%" zIndex={900} p="120px 0 0 0" >
                    <Flex flexDir={"column"} gap="40px">
                        <Heading color={"#fbc431"} w="100%" textAlign={"center"}>{module.name}</Heading>
                        <Text color={"rgba(255,255,255,0.8)"}>{module.description}</Text>
                    </Flex>
                </Flex>
                </> :   <Flex w="40%" zIndex={900} p="120px 0 0 0" ><Text fontSize={25} color="white" textAlign={"center"}>Módulo nao encontrado, tente novamente mais tarde</Text></Flex>} 
               

            </Flex>
        </>
    )

}