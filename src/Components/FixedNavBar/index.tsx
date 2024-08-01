import { Button, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import MactekLogo from "../../assets/MACTEK_Logo.png"
import { motion } from "framer-motion"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

type FixedNavBarProps = {
  dismont: boolean
  render: boolean
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function FixedNavBar({ dismont, render, setOpenBurger }: FixedNavBarProps) {
  const words = [{ name: "Atlantis", class: "thirdSection", page: "" }, { name: "A Mactek", class: "fourthSection" , page: "" }, { name: "Contato", class: "fifthSection", page: "" }, { name: "Principais Modulos", class: "secondSection", page: "modulos" }, { name: "Contato", class: "fifthSection", page: "modulos" }, { name: "Vantagens", class: "secondSection", page: "/modulos/individual" }, { name: "Contato", class: "fifthSection", page: "/modulos/individual" } ]
  const url = window.location.href
  const [modulesHover, setModulesHover] = useState<boolean>(false)
  const variants = {
    dismont: {
      opacity: 0,
      display: "none"
    },
    render: {
      opacity: 1,
      display: "flex"
    },
    translate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
          delay: 0.2 + (i/6),
          duration: 1 
      }
  }),
  show: {
      opacity: 1,
      display: "block",
      transition:{
          duration: 0.1
      }
  },
  }

  function scrollToTarget(e: any) {
    const id = e.target.className.split(" ")[0]
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' });
}

  return (
    <>
      <motion.div initial={{ opacity: 0, display: "none" }} animate={dismont ? "dismont" : render ? "render" : ""} variants={variants} style={{ width: "100vw", position: "fixed", background: "rgba(255,255,255,1)", boxShadow: "2px 2px 15px black", zIndex: 3200, display: "flex", justifyContent: "center", minHeight: "127px" }}>
        <Flex maxW={"1260px"} w="100%" justifyContent={"center"}>
          <Flex style={{ width: "90%", display: "flex", justifyContent: "center", paddingTop: "25px", flexDirection: "column", gap: "40px", boxShadow: "15px", zIndex: 2500 }}>
            <Flex justifyContent={"space-between"} flexDir={{ sm: "row", lg: "column", xl: "row" }} gap={{ lg: "20px", xl: "0px" }} pb={{ lg: "20px", xl: "0px" }} pt={{ lg: "20px", xl: "0px" }} alignItems={{ sm: "center", xl: "start" }}>
              <Flex onClick={() => setOpenBurger(prev => !prev)} display={{ sm: "block", lg: "none" }} color={"black"} >
                <RxHamburgerMenu fontSize={"35px"} />
              </Flex>
              <Flex as="a" href="/" w={"200px"} h="41px">
                <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
              </Flex>
              <UnorderedList listStyleType={"none"} display={{ sm: "none", lg: "flex" }} fontSize={"14.4px"} fontWeight={500} color={"gray"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
              <ListItem onMouseEnter={() => setModulesHover(true)} onMouseLeave={() => setModulesHover(false)} style={{ display:"flex", justifyContent:"center", alignItems:"center", position: "relative"}} _hover={{ color: "black", cursor: "pointer" }}> 
                      <motion.div style={{background:"rgba(255,255,255,1)", color:"white",padding: "20px 0" , marginTop: "190px",  border:"1px solid gray", left:"0%", position:"absolute", width: "460px", height: "150px", borderRadius:"10px", cursor: "default"}} variants={variants} initial={{display:"none", opacity: 0}} animate={modulesHover ? "show" : ""} >
                              <Flex justifyContent={"space-between"}  h="100%" color={"gray"} fontWeight={300}>
                              <Flex flexDir={"column"} w="33%" justifyContent={"space-between"}>
                                  <Text as={"a"} href="/modulos/aereo" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Aéreo</Text>
                                  <Text as={"a"} href="/modulos/rodoviario" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Rodoviário</Text>
                                  <Text as={"a"} href="/modulos/maritimo" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Marítimo</Text>
                                </Flex>
                                <Flex flexDir={"column"} w="33%" borderX={"1px solid gray"}  justifyContent={"space-between"}>
                                  <Text as={"a"} href="/modulos/aduaneiro" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Aduaneiros</Text>
                                  <Text as={"a"} href="/modulos/internacional" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Internacionais</Text>
                                  <Text as={"a"} href="/modulos/contabilidade" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Contabilidade</Text>
                                </Flex>
                                <Flex flexDir={"column"}  w="33%"  justifyContent={"space-between"}> 
                                  <Text as={"a"} href="/modulos/pagamento"_hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Pagamentos</Text>
                                  <Text  as={"a"} href="/modulos/cobranca" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Cobranças</Text>
                                  <Text  as={"a"} href="/modulos/tarefa" _hover={{background: "	rgb(160,160,160, 0.5)"}} pl="10px">Tarefas</Text>
                                </Flex>
                              </Flex>
                        </motion.div>
                        <Text>Todos modulos</Text>
                       <MdKeyboardArrowDown />
                    </ListItem>
                {words.map((word, index) => {
              if(url.split("/").length > 4){
                if(word.page == '/modulos/individual'){
                  return <ListItem key={index} className={word.class} onClick={((e) => scrollToTarget(e))} _hover={{ color: "black", cursor: "pointer" }}>{word.name}</ListItem> 
                } 
              }
              if(url.split("/").length <= 4 && url.split("/")[3]  === word.page){
                return <ListItem key={index} className={word.class} onClick={((e) => scrollToTarget(e))} _hover={{ color: "black", cursor: "pointer" }}>{word.name}</ListItem> 
              } 
            })}
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