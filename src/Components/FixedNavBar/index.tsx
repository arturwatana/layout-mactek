import { Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MactekLogo from "../../assets/MACTEK_Logo.png"
import {motion} from "framer-motion"

type FixedNavBarProps = {
    dismont: boolean
    render: boolean
}

export default function FixedNavBar({dismont, render}: FixedNavBarProps){


    const variants = {
        dismont:{
          opacity: 0,
        },
        render: {
            opacity: 1
        }
    }
    return (
        <>
         <motion.div initial={{ opacity: 0}} animate={dismont ? "dismont" : render ? "render" : ""} variants={variants} style={{width:"100vw" , position: "fixed", background: "rgba(255,255,255,1)", boxShadow: "15px", zIndex:1200, display: "flex", justifyContent: "center", minHeight: "127px"}}>
         <motion.div style={{width:"55.8%", display: "flex", justifyContent: "center",paddingTop: "25px", flexDirection:"column", gap:"40px", boxShadow: "15px", zIndex:1200}}>
                <Flex justifyContent={"space-between"} >
                  <Flex w={"200px"} h="41px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                  </Flex>
                  <UnorderedList listStyleType={"none"} fontSize={"14.4px"} fontWeight={500} color={"gray"} display={"flex"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
                    <ListItem style={{ display:"flex", justifyContent:"center", alignItems:"center"}} _hover={{ color: "black", cursor: "pointer" }}><Text>Todos modulos</Text> <MdKeyboardArrowDown /></ListItem>
                    <ListItem _hover={{ color: "black", cursor: "pointer" }}>A Mactek</ListItem>
                    <ListItem _hover={{ color: "black", cursor: "pointer" }}>Suporte</ListItem>
                    <ListItem _hover={{ color: "black", cursor: "pointer" }}>Contato</ListItem>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"} >Windows</Button>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer.dmg" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
                  </UnorderedList>
                </Flex>
              </motion.div>
              </motion.div>

        </>
    )
}