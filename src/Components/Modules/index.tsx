import { Button, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import MainImg from "../../assets/main-demo1.jpg"
import { useEffect, useState } from "react";
import { modulesInfo } from "../../Utils/ModulesDB";
import Footer from "../Footer";
import NavBar from "../NavBar";
import FixedNavBar from "../FixedNavBar";
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import World from "../../assets/undraw_connected_world_wuay.svg"
import { motion } from "framer-motion"
import BurgerMenu from "../BurgerMenu";



export default function Modules() {
    const [modules, setModules] = useState<any[]>()
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [openBurger, setOpenBurger] = useState<boolean>(false)

    useEffect(() => {
        const modulesDB = modulesInfo
        setModules(modulesDB)
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

    useEffect(() => {
        const body = document.querySelector(".chakra-ui-light")
        if (openBurger) {
            body?.classList.add("no-scroll")
        } else {
            body?.classList.remove("no-scroll")
        }
    }, [openBurger])

    return (
        <>
            <Flex flexDir={"column"}>
                {openBurger ? <BurgerMenu setOpenBurger={setOpenBurger} /> : null}
                <Flex w="100vw" h="100%" scrollMarginTop={"127px"} id="firstSection" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"} >
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
                    <Image position={"absolute"} src={MainImg} w="100vw" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                    <Flex zIndex={900} w="100%" maxW="1280px" pb="50px " h="100%" minH="60vh" alignItems={"center"} flexDirection={"column"} >
                        <NavBar openBurger={openBurger} setOpenBurger={setOpenBurger} />
                        <FixedNavBar setOpenBurger={setOpenBurger} dismont={scrollPosition == 0 ? true : false} render={scrollPosition >= 10 ? true : false} />
                        <Flex maxW="1260px" w={{ sm: "90%", xl: "100%" }} position="relative" justifyContent={"center"} alignItems={{ sm: "center", lg: "start" }} flexDirection={"column"}>
                            <Flex textAlign={"left"} w={{ sm: "90%", lg: "80%" }} zIndex={500} p={{ sm: "60px 0 0 0", lg: "80px 0 0 0" }} >
                                <Flex flexDir={"column"} gap="40px">
                                    <Heading color={"#fbc431"} w="100%" textAlign={{ sm: "center", lg: "start" }} fontWeight={400} fontSize={{ sm: "42px", lg: "46px" }} >Módulos</Heading>
                                    <Text color={"rgba(255,255,255,0.8)"} fontWeight={300} fontSize={'22px'}>A página de módulos do  <span style={{ color: "#FBC431" }}>ATLANTIS</span> foi projetada para fornecer uma visão abrangente das funcionalidades essenciais para a gestão eficiente de operações de logística e transporte. Cada módulo foi desenvolvido para atender às necessidades específicas dos freight forwarders, garantindo uma operação integrada e eficiente.</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex w="100vw" h="100%" position={"relative"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
                    <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
                    <Image position={"absolute"} src={YoungWoman} w="100%" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
                    <Flex zIndex={300} w="100%" maxW="1280px" pb="50px " h="100%" minH="70vh" alignItems={"center"} flexDirection={"column"} >
                        <Flex p="64px 0 0 0 " w="100%" flexDir={"column"} alignItems="center" >
                            <Heading fontSize={{ sm: "36px", lg: "42px" }} textAlign={"center"} fontWeight={400} color="#FFB800">Principais módulos</Heading>
                            <Flex w={{ lg: "90%", xl: "100%" }} mt="64px" flexWrap={"wrap"} alignItems={{ sm: "center", lg: "start" }} gap={{ sm: "15px", lg: "25px" }} justifyContent={"center"} flexDir={{ sm: "column", lg: "row" }}>
                                {modules?.map(module => (
                                    <Flex as="a" href={module.href} w={{ sm: "90%", lg: "450px", xl: "400px" }} background="rgb(255, 255, 255, 0.9)" h={{ sm: "100%", lg: "350px" }} gap="20px" flexDir={"column"} alignItems={"center"} p="25px 20px 10px 20px" borderRadius={"5px"} boxShadow={"0 4px 6px rgba(0, 0, 0, 0.2)"}>
                                        <Image src={World} h="30%" w={{ sm: "30%", lg: "60%" }} />
                                        <Text fontSize={"26px"} fontWeight={300} textAlign={"center"}>{module.name}</Text>
                                        <Text fontSize={"16px"} fontWeight={200} textAlign={"center"}>{module.shortDescription}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                            <Flex w="100%" justifyContent={"center"} mt="45px">
                                <Text fontSize={"18px"} fontWeight={200} w={{ sm: "80%", lg: "70% " }} textAlign={"center"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . Lorem Ipsum has been the industry's stan</Text>
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