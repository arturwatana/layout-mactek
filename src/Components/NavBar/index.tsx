import { Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MactekLogo from "../../assets/logo-mactek.png"



export default function NavBar(){
    return (
        <>
         <Flex w="85%" flexDir={"column"} gap={"40px"} zIndex={1000}>
                <Flex justifyContent={"space-between"} color={"rgba(255,255,255,0.8)"} >
                  <Flex gap={"40px"} fontSize={"12.8px"}>
                    <Text>+55 11 3159-3665</Text>
                    <Text>comercial@mactek.net</Text>
                  </Flex>
                  <Flex gap={"40px"} fontSize={"12.8px"}>
                    <Text cursor={"pointer"} as="a" href="/panel">Entrar / Cadastre-se</Text>
                    <Text cursor={"pointer"}>Languages
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"} flexDir={{sm:"column", xl:"row"}} alignItems={{sm:"center", xl:"start"}} >
                  <Flex as="a" href="/" w={"200px"} h="41px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                  </Flex>
                  <UnorderedList listStyleType={"none"} fontSize={"14.4px"} fontWeight={500} color={"rgba(255,255,255,0.8)"} display={"flex"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
                    <ListItem style={{ display:"flex", justifyContent:"center", alignItems:"center"}} _hover={{ color: "white", cursor: "pointer" }}><Text>Todos modulos</Text> <MdKeyboardArrowDown /></ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>A Mactek</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Suporte</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Contato</ListItem>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"} >Windows</Button>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer.dmg" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
                  </UnorderedList>
                </Flex>
              </Flex>
        </>
    )
}