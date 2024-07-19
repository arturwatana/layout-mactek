import { Flex, Text } from "@chakra-ui/react";


export default function ManageMessages() {

    return (
        <>
                                <Flex border="1px solid black" justifyContent={"space-between"} borderRadius={"10px"} p='10px 20px 10px 10px' background="rgb(200,200,200, 1)"  maxH={"100px"} w="100%">
                                    <Flex w="60%" h="100%">
                                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry...</Text>
                                    </Flex>
                                    <Flex flexDir={"column"} alignItems={"end"} gap="5px">
                                        <Text color="green">Ativa</Text>
                                        <Text>17/05/2014 até 20/05/2024</Text>
                                    </Flex>
                                </Flex>
                                <Flex border="1px solid black" justifyContent={"space-between"} borderRadius={"10px"} p='10px 20px 10px 10px' background="rgb(200,200,200, 1)"  maxH={"100px"} w="100%">
                                    <Flex w="60%" h="100%">
                                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry...</Text>
                                    </Flex>
                                    <Flex flexDir={"column"} alignItems={"end"} gap="5px">
                                        <Text color="red">Inativa</Text>
                                        <Text>17/05/2014 até 20/05/2024</Text>
                                    </Flex>
                                </Flex>
                                <Flex border="1px solid black" justifyContent={"space-between"} borderRadius={"10px"} p='10px 20px 10px 10px' background="rgb(200,200,200, 1)"  maxH={"100px"} w="100%">
                                    <Flex w="60%" h="100%">
                                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and typesetting industry...</Text>
                                    </Flex>
                                    <Flex flexDir={"column"} alignItems={"end"} gap="5px">
                                        <Text color="green"> Ativa</Text>
                                        <Text>17/05/2014 até 20/05/2024</Text>
                                    </Flex>
                            </Flex>        
        </>
    )
}