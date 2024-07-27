import { Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModule, ModuleProps } from "../../Utils/ModulesDB";
import Footer from "../Footer";
import NavBar from "../NavBar";
import FixedNavBar from "../FixedNavBar";
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import FolderFiles from "../../assets/undraw_folder_files_re_2cbm.svg"
import Ship from "../../assets/undraw_container_ship_re_alm4.svg"
import World from "../../assets/undraw_connected_world_wuay.svg"
import { motion } from "framer-motion"
import BurgerMenu from "../BurgerMenu";



export default function IndividualModule() {
  const [module, setModule] = useState<ModuleProps | undefined>()
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const params = useParams()
  const [openBurger, setOpenBurger] = useState<boolean>(false)

  useEffect(() => {
    const moduleInDB = getModule(params.tag ? params.tag : "")[0]
    setModule(moduleInDB)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    if (scrollPosition >= 700) {
      window.removeEventListener('scroll', handleScroll);

    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Flex flexDir={"column"}>
        {openBurger ? <BurgerMenu setOpenBurger={setOpenBurger} /> : null}
        <Flex w="100vw" h="100%" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"} >
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={MainImg} w="100vw" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex zIndex={900} w="100%" maxW="1280px" pb="50px " h="100%" minH="60vh" alignItems={"center"} flexDirection={"column"} >
            <NavBar openBurger={openBurger} setOpenBurger={setOpenBurger} />
            <FixedNavBar setOpenBurger={setOpenBurger} dismont={scrollPosition == 0 ? true : false} render={scrollPosition >= 10 ? true : false} />
            <Flex maxW="1260px" w="90%" position="relative" justifyContent={"center"} alignItems={{ sm: "center", lg: "start" }} flexDirection={"column"}>
              {module ? <>
                <Flex textAlign={"left"} w={{ sm: "90%", lg: "80%" }} zIndex={500} p={{ sm: "60px 0 0 0", lg: "80px 0 0 0" }} >
                  <Flex flexDir={"column"} gap="40px">
                    <Heading color={"#fbc431"} w="100%" textAlign={{ sm: "center", lg: "start" }} fontWeight={400} fontSize={{ sm: "42px", lg: "46px" }} >{module.name}</Heading>
                    <Text color={"rgba(255,255,255,0.8)"} fontSize={'18px'}>{module.description}</Text>
                  </Flex>
                </Flex>
              </> : <Flex w="40%" zIndex={500} p="120px 0 0 0" ><Text fontSize={22} color="white" textAlign={"center"}>Módulo nao encontrado, tente novamente mais tarde</Text></Flex>}
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100vw" h="100%" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100%" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex zIndex={300} w="100%" maxW="1280px" pb="50px " h="100%" minH="70vh" alignItems={"center"} flexDirection={"column"} >
            <Flex p="64px 0 0 0 " w="100%" flexDir={"column"}>
              <Heading fontSize={"42px"} textAlign={"center"} fontWeight={400} color="#FFB800">Vantagens</Heading>
              <Flex w="100%" mt="64px" alignItems={{ sm: "center", lg: "start" }} gap={{ sm: "15px", lg: "0px" }} justifyContent={"space-around"} flexDir={{ sm: "column", lg: "row" }}>
                <Flex w={{ sm: "90%", lg: "290px" }} background="rgb(255, 255, 255, 0.9)" h={{ sm: "100%", lg: "350px" }} gap="20px" flexDir={"column"} alignItems={"center"} p="25px 20px 10px 20px" borderRadius={"5px"} boxShadow={"0 4px 6px rgba(0, 0, 0, 0.2)"}>
                  <Image src={World} h="30%" w={{ sm: "30%", lg: "60%" }} />
                  <Text fontSize={"26px"} fontWeight={300}>Sub-Title</Text>
                  <Text fontSize={"16px"} fontWeight={200} textAlign={"center"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan</Text>
                </Flex>
                <Flex w={{ sm: "90%", lg: "290px" }}  background="rgb(255, 255, 255, 0.9)" h={{ sm: "100%", lg: "350px" }} gap="20px" flexDir={"column"} alignItems={"center"} p="25px 20px 10px 20px" borderRadius={"5px"} boxShadow={"0 4px 6px rgba(0, 0, 0, 0.2)"}>
                  <Image src={Ship}  h="30%" w={{ sm: "30%", lg: "60%" }} />
                  <Text fontSize={"26px"} fontWeight={300}>Sub-Title</Text>
                  <Text fontSize={"16px"} fontWeight={200} textAlign={"center"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan</Text>
                </Flex>
                <Flex w={{ sm: "90%", lg: "290px" }} background="rgb(255, 255, 255, 0.9)" h={{ sm: "100%", lg: "350px" }} gap="20px" flexDir={"column"} alignItems={"center"} p="25px 20px 10px 20px" borderRadius={"5px"} boxShadow={"0 4px 6px rgba(0, 0, 0, 0.2)"}>
                  <Image src={FolderFiles}  h="30%" w={{ sm: "30%", lg: "60%" }} />
                  <Text fontSize={"26px"} fontWeight={300}>Sub-Title</Text>
                  <Text fontSize={"16px"} fontWeight={200} textAlign={"center"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan</Text>
                </Flex>

              </Flex>
              <Flex w="100%" justifyContent={"center"}  mt="45px">
                <Text fontSize={"18px"} fontWeight={300} w={{ lg: "70% " }} textAlign={"center"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . Lorem Ipsum has been the industry's stan</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" scrollMarginTop={"127px"} id="fifthSection" minH="70vh" h="100%" zIndex={300} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"70vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 50%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={500} w={{ sm: "90%", lg: "80%" }} alignItems={"center"} flexDir={"column"} gap="46px" p="110px 0" >
              <Heading fontSize={"36px"} fontWeight={400} color={"rgba(255,255,255,0.8)"}>Mantenha contato com nossa equipe</Heading>
              <motion.form style={{ display: "flex", gap: "15px", flexDirection: "column", width: "100%", alignItems: "center" }}>
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} placeholder="Your Name (required)" />
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} placeholder="Your Name (required)" />
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} height={"120px"} />
                <Button fontSize={"15px"} h="40px" w={{ sm: "55%", lg: "15%" }} fontWeight={500} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Submit</Button>
              </motion.form>
            </Flex>
          </Flex>
        </Flex>
        <Footer />
      </Flex >

    </>
  )

}