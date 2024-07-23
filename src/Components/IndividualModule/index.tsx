import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModule, ModuleProps } from "../../Utils/ModulesDB";
import Footer from "../Footer";
import NavBar from "../NavBar";
import FixedNavBar from "../FixedNavBar";





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


        <Flex w="100vw" h="100%" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "70vh", height:"100%", position: "absolute", zIndex: 90 }} />
                <Image position={"absolute"} src={MainImg} w="100vw" minH="70vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
            <Flex zIndex={900} w="100%" maxW="1280px" pb="50px " h="100%" minH="70vh" alignItems={"center"} flexDirection={"column"} >
                <NavBar openBurger={openBurger} setOpenBurger={setOpenBurger}/>
                <FixedNavBar setOpenBurger={setOpenBurger} dismont={scrollPosition == 0 ? true : false} render={scrollPosition >= 10 ? true : false} />
                <Flex maxW="1260px" w="100%" position="relative" justifyContent={"center"} flexDirection={"column"}>
                {module ? <>
                    <Flex textAlign={"left"}  zIndex={900} p="120px 0 0 0" >
                    <Flex flexDir={"column"} gap="40px">
                        <Heading color={"#fbc431"} w="100%" textAlign={"center"}>{module.name}</Heading>
                        <Text color={"rgba(255,255,255,0.8)"}>{module.description}</Text>
                    </Flex>
                </Flex>
                </> :   <Flex w="40%" zIndex={900} p="120px 0 0 0" ><Text fontSize={25} color="white" textAlign={"center"}>Módulo nao encontrado, tente novamente mais tarde</Text></Flex>} 
                </Flex>
             </Flex>
            </Flex>
       <Footer/>
        </Flex>
           
        </>
    )

}