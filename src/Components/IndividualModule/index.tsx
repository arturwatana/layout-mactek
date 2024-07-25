import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getModule, ModuleProps } from "../../Utils/ModulesDB";
import Footer from "../Footer";
import NavBar from "../NavBar";
import FixedNavBar from "../FixedNavBar";
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import FolderFiles from "../../assets/undraw_folder_files_re_2cbm.svg"




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
            <Flex zIndex={400} w="100%" maxW="1280px" pb="50px " h="100%" minH="70vh" alignItems={"center"} flexDirection={"column"} >
                <NavBar openBurger={openBurger} setOpenBurger={setOpenBurger}/>
                <FixedNavBar setOpenBurger={setOpenBurger} dismont={scrollPosition == 0 ? true : false} render={scrollPosition >= 10 ? true : false} />
                <Flex maxW="1260px" w="100%" position="relative" justifyContent={"center"} flexDirection={"column"}>
                {module ? <>
                    <Flex textAlign={"left"} w="80%"  zIndex={900} p="120px 0 0 0" >
                    <Flex flexDir={"column"} gap="40px">
                        <Heading color={"#fbc431"} w="100%" fontWeight={400} fontSize={"46px"} textAlign={"start"}>{module.name}</Heading>
                        <Text color={"rgba(255,255,255,0.8)"} fontSize={'22px'}>{module.description}</Text>
                    </Flex>
                </Flex>
                </> :   <Flex w="40%" zIndex={900} p="120px 0 0 0" ><Text fontSize={22} color="white" textAlign={"center"}>Módulo nao encontrado, tente novamente mais tarde</Text></Flex>} 
                </Flex>
             </Flex>
            </Flex>
        <Flex w="100vw" h="100%" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
        <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
        <Image position={"absolute"} src={YoungWoman} w="100%" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
            <Flex zIndex={400} w="100%" maxW="1280px" pb="50px " h="100%" minH="70vh" alignItems={"center"} flexDirection={"column"} >
                  <Flex p="64px 0 0 0 " w="100%" flexDir={"column"}>
                      <Heading fontSize={"46px"} textAlign={"center"} fontWeight={400}color="#FFB800">Vantagens</Heading>
                      <Flex w="100%" mt="64px" border={"1px solid red"} alignItems={{sm:"center", lg:"start"}} gap={{sm:"15px", lg: "0px"}} justifyContent={"space-around"} flexDir={{sm:"column", lg:"row"}}>
                        <Flex w={{sm: "80%", lg:"290px"}} h="390px" flexDir={"column"} alignItems={"center"} p="15px 0 0 0" borderRadius={"5px"} boxShadow={"1px 1px 3px #222"}>
                            <Image src={FolderFiles} w="80%"/>
                        </Flex>
                        <Flex w={{sm: "80%", lg:"290px"}} h="390px" flexDir={"column"} alignItems={"center"} p="15px 0 0 0" borderRadius={"5px"} boxShadow={"1px 1px 3px #222"}>
                            <Image src={FolderFiles} w="80%"/>
                        </Flex>
                        <Flex w={{sm: "80%", lg:"290px"}} h="390px" flexDir={"column"} alignItems={"center"} p="15px 0 0 0" borderRadius={"5px"} boxShadow={"1px 1px 3px #222"}>
                            <Image src={FolderFiles} w="80%"/>
                        </Flex>
                      </Flex>
                  </Flex>
             </Flex>
            </Flex>
       <Footer/>
        </Flex>
           
        </>
    )

}