import { Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MactekLogo from "../../assets/logo-mactek.png"
import { RxHamburgerMenu } from "react-icons/rx";

type NavBarProps = {
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>,
  openBurger: boolean
}

export default function NavBar({setOpenBurger} : NavBarProps){
    return (
        <>
         <Flex w={{sm: "90%", lg:"85%"}} flexDir={"column"} gap={"40px"} zIndex={1000}>
                <Flex justifyContent="space-between"  color={"rgba(255,255,255,0.8)"} >
                  <Flex gap={{sm: "0x", lg:"40px"}} w={{sm: "100%"}} justifyContent={{sm: "space-between", lg: "start"}}  flexDir={{sm: "row", lg: "row"}} fontSize={"12.8px"}>
                    <Text>+55 11 3159-3665</Text>
                    <Text>comercial@mactek.net</Text>
                  </Flex>
                  <Flex gap={{sm: "0x", lg:"40px"}} display={{sm: "none", lg: "flex"}} flexDir={{sm: "column", lg: "row"}} fontSize={"12.8px"}>
                    <Text cursor={"pointer"} as="a" href="/panel">Entrar / Cadastre-se</Text>
                    <Text cursor={"pointer"}>Languages
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"} gap={{sm:"0px", lg:"20px", xl:"0px"}} flexDir={{sm: "row", lg:"column", xl:"row"}} alignItems={{lg:"center", xl:"start"}} >
                <Flex onClick={() => setOpenBurger(prev => !prev) } display={{sm: "block", lg: "none"}} color={"rgba(255,255,255,0.8)"} >
                    <RxHamburgerMenu  fontSize={"35px"}/>
                 </Flex>
                  <Flex as="a" href="/" w={"200px"} h="41px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                  </Flex>
                  <UnorderedList display={{sm: "none", lg: "flex"}} listStyleType={"none"} fontSize={"14.4px"} fontWeight={500} color={"rgba(255,255,255,0.8)"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
                    <ListItem style={{ display:"flex", justifyContent:"center", alignItems:"center"}} _hover={{ color: "white", cursor: "pointer" }}><Text>Todos modulos</Text> <MdKeyboardArrowDown /></ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>A Mactek</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Suporte</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Contato</ListItem>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"} >Windows</Button>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer.dmg" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
                  </UnorderedList>
                <Flex display={{sm: "flex", lg: "none"}}>

                </Flex>
                </Flex>
              </Flex>
        </>
    )
}