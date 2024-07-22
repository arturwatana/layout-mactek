import { Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MactekLogo from "../../assets/MACTEK_Logo.png"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";

type FixedNavBarProps = {
  dismont: boolean
  render: boolean
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FixedNavBar({ dismont, render, setOpenBurger }: FixedNavBarProps) {


  const variants = {
    dismont: {
      opacity: 0,
      display: "none"
    },
    render: {
      opacity: 1,
      display: "flex"
    }
  }
  return (
    <>
      <motion.div initial={{ opacity: 0, display: "none" }} animate={dismont ? "dismont" : render ? "render" : ""} variants={variants} style={{ width: "100vw", position: "fixed", background: "rgba(255,255,255,1)", boxShadow: "2px 2px 15px black", zIndex: 1200, display: "flex", justifyContent: "center", minHeight: "127px" }}>
        <Flex maxW={"1260px"} w="100%" justifyContent={"center"}>
          <Flex style={{ width: "85%", display: "flex", justifyContent: "center", paddingTop: "25px", flexDirection: "column", gap: "40px", boxShadow: "15px", zIndex: 1000 }}>
            <Flex justifyContent={"space-between"} flexDir={{ sm: "row", lg: "column", xl: "row" }} gap={{ lg: "20px", xl: "0px" }} pb={{ lg: "20px", xl: "0px" }} pt={{ lg: "20px", xl: "0px" }} alignItems={{ sm: "center", xl: "start" }}>
              <Flex onClick={() => setOpenBurger(prev => !prev)} display={{ sm: "block", lg: "none" }} color={"black"} >
                <RxHamburgerMenu fontSize={"35px"} />
              </Flex>
              <Flex as="a" href="/" w={"200px"} h="41px">
                <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
              </Flex>
              <UnorderedList listStyleType={"none"} display={{ sm: "none", lg: "flex" }} fontSize={"14.4px"} fontWeight={500} color={"gray"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
                <ListItem style={{ display: "flex", justifyContent: "center", alignItems: "center" }} _hover={{ color: "black", cursor: "pointer" }}><Text>Todos modulos</Text> <MdKeyboardArrowDown /></ListItem>
                <ListItem _hover={{ color: "black", cursor: "pointer" }}>A Mactek</ListItem>
                <ListItem _hover={{ color: "black", cursor: "pointer" }}>Suporte</ListItem>
                <ListItem _hover={{ color: "black", cursor: "pointer" }}>Contato</ListItem>
                <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"} >Windows</Button>
                <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} as="a" href="https://download.teamviewer.com/download/TeamViewer.dmg" h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
              </UnorderedList>
            <Flex display={{ sm: "flex", lg: "none" }}>

            </Flex>
            </Flex>
          </Flex>
        </Flex>

      </motion.div>

    </>
  )
}