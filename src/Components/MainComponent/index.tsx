import { Button, Flex, Heading, Image, Input, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import MainImg from "../../assets/main-demo1.jpg"
import MactekLogo from "../../assets/logo-mactek.png"
import Aerial from "../../assets/Iconsa.png"
import Maritime from "../../assets/Iconsmar.png"
import Rodov from "../../assets/Iconsrodv.png"
import Clearence from "../../assets/Iconsrast.png"
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import Background01 from "../../assets/fundo1.jpg"
import CountUp from "react-countup"
import EGEO from "../../assets/Desks.png"
import Slider from "../Slider"
import ModulesSlider from "../ModulesSlider"
import MactekLogo1 from "../../assets/MACTEK_Logo.png"
import { motion } from "framer-motion"
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogo } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
import ModalContact from "../MenuContact"

export default function MainComponent() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    if(scrollPosition >= 700) {
      window.removeEventListener('scroll', handleScroll);

    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
     <ModalContact email={email} isOpen={openModal} setOpenModal={setOpenModal} />
      <Flex w="100vw" flexDir={"column"}>
        <Flex w="100%" minH="80vh" h="100%" position={"relative"} justifyContent={"center"} alignItems={"center"} >
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "80vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={MainImg} w="100vw" minH="80vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="100%"  pb="50px " h="100%" minH="80vh" alignItems={"center"} flexDirection={"column"} >
              <Flex w="85%" flexDir={"column"} gap={"40px"}>
                <Flex justifyContent={"space-between"} color={"rgba(255,255,255,0.8)"} >
                  <Flex gap={"40px"} fontSize={"12.8px"}>
                    <Text>+55 11 3159-3665</Text>
                    <Text>comercial@mactek.net</Text>
                  </Flex>
                  <Flex gap={"40px"} fontSize={"12.8px"}>
                    <Text cursor={"pointer"}>Entrar / Cadastre-se</Text>
                    <Text cursor={"pointer"}>Languages
                    </Text>
                  </Flex>
                </Flex>
                <Flex justifyContent={"space-between"} >
                  <Flex w={"200px"} h="41px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                  </Flex>
                  <UnorderedList listStyleType={"none"} fontSize={"14.4px"} fontWeight={500} color={"rgba(255,255,255,0.8)"} display={"flex"} gap={"30px"} justifyContent={"center"} alignItems={"center"}>
                    <ListItem style={{ display:"flex", justifyContent:"center", alignItems:"center"}} _hover={{ color: "white", cursor: "pointer" }}><Text>Todos modulos</Text> <MdKeyboardArrowDown /></ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>A Mactek</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Suporte</ListItem>
                    <ListItem _hover={{ color: "white", cursor: "pointer" }}>Contato</ListItem>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"} >Windows</Button>
                    <Button fontSize={"13.1px"} borderRadius={"5px"} border={"2px solid #FBC431"} h="32px" _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 15px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
                  </UnorderedList>
                </Flex>
              </Flex>
              <Flex w="100%" h="100%" mt={"180px"} flexDir={"column"} alignItems={"center"} color="white" gap="50px">
                <Flex flexDir={"column"} gap={"50px"} >
                  <Text w="62%" style={{ fontWeight: 300 }} lineHeight={"1.6"} letterSpacing={"1px"} fontSize={"28px"} >
                    <span style={{ color: "#FBC431", fontWeight: "500" }} color={"#FBC431"}>EGEO</span> é o melhor software de gestão de processos para freight forwarders do mercado, e o mais eficaz em otimização de tempo. TEST</Text>
                  <Button border={"3px solid #FBC431"} onClick={() => !openModal ? setOpenModal(true) : ""}  _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} fontWeight={400} fontSize={"15.5px"} maxW={"200px"} p="0 18px" borderRadius={"10px"} background={"none"} color={"#FBC431"}>Solicite uma demo</Button>
                </Flex>
                <Flex w="100%" justifyContent={"space-between"}>
                  <Flex flexDirection={"column"} gap="20px">
                    <Flex w="60px" h="63px">
                      <Image w="100%" h="100%" objectFit={"contain"} src={Aerial} />
                    </Flex>
                    <Flex flexDir="column" gap="8px">
                      <Text fontWeight={"bold"} fontSize={"16px"}>Modulo Aereo</Text>
                      <Text fontSize={"16px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap="20px">
                    <Flex w="60px" h="63px">
                      <Image w="100%" h="100%" objectFit={"contain"} src={Maritime} />
                    </Flex>
                    <Flex flexDir="column" gap="8px">
                      <Text fontWeight={"bold"} fontSize={"16px"}>Módulo Marítimo</Text>
                      <Text fontSize={"16px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap="20px">
                    <Flex w="60px" h="63px">
                      <Image w="100%" h="100%" objectFit={"contain"} src={Rodov} />
                    </Flex>
                    <Flex flexDir="column" gap="8px">
                      <Text fontWeight={"bold"} fontSize={"16px"}>Módulo Rodoviário</Text>
                      <Text fontSize={"16px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDirection={"column"} gap="20px">
                    <Flex w="60px" h="63px">
                      <Image w="100%" h="100%" objectFit={"contain"} src={Clearence} />
                    </Flex>
                    <Flex flexDir="column" gap="8px">
                      <Text fontWeight={"bold"} fontSize={"16px"}>Módulo Aduaneiro</Text>
                      <Text fontSize={"16px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

        </Flex>
        <Flex w="100%" minH="60vh" h="100%" zIndex={900} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100%" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="100%" p="100px 0" flexDir={"column"}  >
              <Flex w="80%" borderBottom={"2px solid #ececec"} h="80px">
                <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={"42.7px"}>Nossos módulos</Heading>
              </Flex>
              <Flex justifyContent={"center"} >
                <Flex flexDir={"column"} gap={"20px"} mt="50px" w="70%">
                  <Text fontWeight={300} fontSize={"28px"}>Conheça nossos principais módulos</Text>
                  <Text fontWeight={200} fontSize={"20px"} mt="10px">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</Text>
                  <UnorderedList fontWeight={200} fontSize={"16px"} gap="10px" display={"flex"} flexDirection={"column"}>
                    <ListItem>Custom details #1</ListItem>
                    <ListItem>Custom details #2</ListItem>
                    <ListItem>Custom details #3</ListItem>
                  </UnorderedList>
                  <Button borderRadius={"10px"} fontSize={"15px"} h="40px" w="35%" fontWeight={500} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Veja todos os modulos</Button>
                </Flex>
                <Flex h="100%" >
                  <ModulesSlider />
                </Flex>
              </Flex>

            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} minH="70vh" h="100%" src={Background01} w="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"40% 50%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="100%" justifyContent={"center"} flexDir={"column"} p={"120px 0"} gap={"60px"}>
              <Heading color={"rgba(255,255,255,0.8)"} w="60%" fontSize={"36px"}>Conheça as vantagens para sua empresa de usar o sistema EGEO</Heading>
              <Text color={"rgba(255,255,255,0.8)"} w="70%" fontSize={"16px"}>Faça aqui o download da ferramenta para suporte em ambiente <span style={{ color: "#FBC431" }}>Windows</span> e <span style={{ color: "#FBC431" }}>Mac Os</span>. Esta ferramenta permitirá o acesso remoto dos nossos profissionais de suporte para a melhor qualidade no atendimento.</Text>
              <Flex justifyContent={"space-between"}>
                <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                  <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 700 ? "0" : <CountUp style={{ color: "#FBC431" }} end={45} duration={3} />}</Text>
                  <Flex flexDir={"column"}>
                    <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                    <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                  <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"} >+{scrollPosition <= 700 ? "0" :<CountUp style={{ color: "#FBC431" }} end={100} duration={3} />}</Text>
                  <Flex flexDir={"column"}>
                    <Text fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                    <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                  <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 700 ? "0" :<CountUp style={{ color: "#FBC431" }} end={50} duration={3} />}</Text>
                  <Flex flexDir={"column"}>
                    <Text fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                    <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                  </Flex>
                </Flex>
                <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                  <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 700 ? "0" :<CountUp style={{ color: "#FBC431" }} end={50} duration={3} />}</Text>
                  <Flex flexDir={"column"}>
                    <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                    <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                  </Flex>
                </Flex>
              </Flex>

            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" minH="60vh" h="100%" zIndex={900} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100vw", minHeight: "80vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"80vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="100%" p="80px 0" flexDir={"column"} justifyContent={"space-between"} alignItems={"center"} gap={"80px"}>
              <Flex>
                <Flex flexDir={"column"} w="50%" >
                  <Flex w="90%" borderBottom={"2px solid #ececec"} h="80px">
                    <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={"42px"}>Sobre nos</Heading>
                  </Flex>
                  <Flex mt="50px">
                    <Flex flexDir={"column"} gap={"30px"}>
                      <Text fontWeight={300} fontSize={"16px"} w="90%">Fundada em 2004, a <span style={{ color: "#FBC431" }}>Mactek Sistemas©</span> é hoje uma empresa 100% brasileira. A idéia do desenvolvimento de um software para atender as necessidades dos freight forwarder surgiu ainda antes, em 1997. Pela participação ativa em um escritório de agenciamento de cargas local, a <span style={{ color: "#FBC431" }}>Mactek Sistemas© </span>vislumbrou a necessidade de uma ferramenta que controle os embarques e os faturamentos dos serviços prestados.</Text>
                      <Text fontWeight={300} fontSize={"16px"} w="90%">Essa idéia deu origem ao <span style={{ color: "#FBC431" }}>EGEO©</span>, um software totalmente destinado a atender as necessidades do freight forwarder em todos os modais. Iniciando através dos modais aéreo e marítimo, o Cheetah X© foi lapidando ao longo do tempo através das experiências de parceiros e clientes, transformando-se numa ferramenta sólida e flexível, para pequenas, médias e grandes empresas no segmento de transporte Internacional.</Text>
                      <Button borderRadius={"15px"} fontSize={"15px"} w="25%" _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} fontWeight={500} color={"rgba(255,255,255,0.8)"}>Conheca mais</Button>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex w="570px"  >
                  <Image w="100%" h="100%" objectFit={"contain"} src={EGEO} />
                </Flex>
              </Flex>
              <Slider />
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" minH="70vh" h="100%" zIndex={900} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"70vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 50%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="80%" alignItems={"center"} flexDir={"column"} gap="46px" p="110px 0" >
              <Heading fontSize={"36px"} fontWeight={400} color={"rgba(255,255,255,0.8)"}>Mantenha contato com nossa equipe</Heading>
              <motion.form style={{ display: "flex", gap: "15px", flexDirection: "column", width: "80%", alignItems: "center" }}>
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} placeholder="Your Name (required)" />
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} placeholder="Your Name (required)" />
                <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} height={"120px"} />
                <Button borderRadius={"30px"} fontSize={"15px"} h="40px" w="10%" fontWeight={500} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Submit</Button>
              </motion.form>
            </Flex>
          </Flex>
        </Flex>
        <Flex pt="80px" w="100%" minH="30vh" h="100%" zIndex={900} justifyContent={"center"} position={"relative"}>
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex borderTop={"1px solid #FBC431"} minH="30vh" gap="25px" w="100%" flexDir={"column"} alignItems={"center"}  >
              <Flex w="220px" mt="40px" h="46px" >
                <Image h="100%" w="100%" src={MactekLogo1} />
              </Flex>
              <Text fontSize={"12px"}>A flexibilidade que a Mactek tem em analisar e melhorar o sistema com o feedback do cliente e que faz com que sintamos seguros em continuar a parceria</Text>
              <Flex w="100%" justifyContent={"space-between"} alignItems={"center"}>
                <Text fontSize={"12px"} textAlign={"center"} w="15%">Todos direitos reservados Mactek © 2024</Text>
                <Flex fontSize={"18px"} gap="8px" color="gray">
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
      </Flex>
    </>
  )
}

