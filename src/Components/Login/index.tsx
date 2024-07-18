import { Button, Flex, Image, chakra } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect } from "react";





export default function Login() {

    const params = useParams()
    
    useEffect(() => {
        console.log(params.id)
    }, [])

    return (
        <>
            <Flex w="100%" minH="80vh" justifyContent={"center"}>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
                <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                <Flex zIndex={900} w="100%" minH="100vh" h="100%" alignItems={"center"} justifyContent={"center"}  >
                    <Flex flexDir={"column"}  border={"1px solid white"} background="rgb(192,192,192, 0.5)"  borderRadius={"20px"} h={"230px"}>
                        <chakra.form style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly", height:"100%", alignItems:"center"}} p="20px 50px">
                            <chakra.label htmlFor="username">
                                Usuário
                            </chakra.label>
                            <chakra.input id="username" borderRadius={"10px"}/>
                            <chakra.label htmlFor="pasword">
                                Senha
                            </chakra.label>
                            <chakra.input type="password" id="password" borderRadius={"10px"}/>
                            <Button w="50%">Submit</Button>
                        </chakra.form>
                    </Flex>
                </Flex>

            </Flex>
        </>
    )

}