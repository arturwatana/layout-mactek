import { Flex, Image, Text } from "@chakra-ui/react";
import MactekLogo1 from "../../assets/MACTEK_Logo.png"
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";


export default function Footer(){
    return (
        <>
                <Flex pt="80px" scrollMarginTop={"127px"} id="sixthSection" w="100%" minH="30vh" h="100%" zIndex={500} justifyContent={"center"} position={"relative"}>
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex borderTop={"1px solid #FBC431"} pb={{ sm: "40px", lg: "0px" }} minH="30vh" gap="25px" w={{ sm: "80%", xl: "100%" }} flexDir={"column"} alignItems={"center"}  >
              <Flex w="220px" mt="40px" h="46px" >
                <Image h="100%" w="100%" src={MactekLogo1} />
              </Flex>
              <Text fontSize={"12px"} textAlign={{ sm: "center", lg: "left" }}>A flexibilidade que a Mactek tem em analisar e melhorar o sistema com o feedback do cliente e que faz com que sintamos seguros em continuar a parceria</Text>
              <Flex w="100%" justifyContent={"space-between"} gap={{ sm: "25px", lg: "0px" }} alignItems={"center"} flexDir={{ sm: "column", lg: "row" }}>
                <Text fontSize={"12px"} textAlign={"center"} w={{ sm: "60%", lg: "15%" }}>Todos direitos reservados Mactek © 2024</Text>
                <Flex fontSize={"18px"} gap={{ sm: "25px", lg: "8px" }} color="gray">
                  <FaFacebookF cursor={"pointer"} />
                  <PiInstagramLogo cursor={"pointer"} />
                  <FaTwitter cursor={"pointer"} />
                  <RxLinkedinLogo cursor={"pointer"} />
                </Flex>
                <Flex fontSize={"12.8px"} gap="20px">
                  <Text cursor={"pointer"}>Termos de uso</Text>
                  <Text cursor={"pointer"}>Politica de Privacidade</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        </>
    )
}