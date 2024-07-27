import { Button, Flex, Heading, Image, Input, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import MainImg from "../../assets/main-demo1.jpg"
import Aerial from "../../assets/Iconsa.png"
import Maritime from "../../assets/Iconsmar.png"
import Rodov from "../../assets/Iconsrodv.png"
import Clearence from "../../assets/Iconsrast.png"
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import Background01 from "../../assets/fundo1.jpg"
import CountUp from "react-countup"
import ATLANTIS from "../../assets/Desks.png"
import Slider from "../Slider"
import ModulesSlider from "../ModulesSlider"
import {  motion } from "framer-motion"

import { useContext, useEffect, useState } from "react"
import ModalContact from "../MenuContact"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify"
import { ContentContext, MessageProps } from "../../App"
import NavBar from "../NavBar"
import FixedNavBar from "../FixedNavBar"
import BurgerMenu from "../BurgerMenu"
import Footer from "../Footer"

export default function MainComponent() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [messagesToday, setMessagesToday] = useState<MessageProps[]>([{ description: "Informamos que no dia 13/01 não teremos expediente para suporte ao Atlantis." }, { description: "Devido a uma falha nos servidores da Microsoft, o Atlantis pode ter queda de desempenho." }])
  const { messagesDB } = useContext(ContentContext);
  const [openBurger, setOpenBurger] = useState<boolean>(false)
  // const variants = {
  //   showMsg: {
  //     opacity: 1,
  //     display: "flex",
  //     minHeight: "30px",
  //     transition: {
  //       duration: 0.5,
  //       delay: 1
  //     }
  //   },
  //   showText: {
  //     opacity: 1,
  //     display: "block",
  //     transition: {
  //       delay: 1.25
  //     }
  //   }
  //   ,
  //   showDiv: {
  //     height: "30px",
  //     opacity: 1,
  //     transition: {
  //       delay: 1.25,
  //       duration: 0.5
  //     }
  //   }
  // }
  useEffect(() => {
    const body = document.querySelector(".chakra-ui-light")
    if (openBurger) {
      body?.classList.add("no-scroll")
    } else {
      body?.classList.remove("no-scroll")
    }
  }, [openBurger])

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
    messagesToday.map(message => toast.info(`${message.description}`))
  }, [])

  useEffect(() => {
    messagesDB.map(message => setMessagesToday((prev) => [...prev, message]))
  }, [])


  return (
    <>
      {/* <ToastContainer /> */}
      <ModalContact isOpen={openModal} setOpenModal={setOpenModal} />
      {openBurger ? <BurgerMenu setOpenBurger={setOpenBurger} /> : null}
      <Flex w="100vw" className={openBurger ? "no-scroll" : ""} flexDir={"column"} position={"relative"} overflow={openBurger ? "none" : "auto"} >
        <Flex w="100%" scrollMarginTop={"127px"} flexDir={'column'} id="firstSection" minH="80vh" h="100%" position={"relative"} justifyContent={"center"} alignItems={"center"} >
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "80vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={MainImg} w="100vw" minH="80vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          {/* <motion.div style={{width:"100vw"}} initial={{height:"0px", opacity: 0}}  variants={variants} animate={"showDiv"}>
            <motion.div style={{ width: "100vw", background: "red", justifyContent: "center", zIndex: 3000, top: 0 }} initial={{ display: "none", height: "0px" }} variants={variants} animate={"showMsg"}><motion.p style={{ fontWeight: 500, fontSize: "20px", color: "white" }} initial={{ display: "none", height: "0px" }} variants={variants} animate={"showText"}  >Ola, no feriado do dia 18/08 nao teremos expediente. Agradecemos a compreensao</motion.p></motion.div >
          </motion.div> */}
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w="100%" pb="50px " h="100%" minH="80vh" alignItems={"center"} flexDirection={"column"} >
              <NavBar openBurger={openBurger} setOpenBurger={setOpenBurger} />
              <FixedNavBar setOpenBurger={setOpenBurger} dismont={scrollPosition == 0 ? true : false} render={scrollPosition >= 10 ? true : false} />
              <Flex w="100%" h="100%" mt={{ sm: "100px", lg: "150px" }} flexDir={"column"} alignItems={"center"} color="white" gap="50px">
                <Flex flexDir={"column"} w={{ sm: "95%", xl: "100%" }} gap={"50px"} >
                  <Text w={{ sm: "100%", xl: "62%" }} style={{ fontWeight: 300 }} lineHeight={"1.6"} letterSpacing={"1px"} fontSize={{ sm: "22px", lg: "28px" }} >
                    <span style={{ color: "#FBC431", fontWeight: "500" }} color={"#FBC431"}>ATLANTIS</span> é o melhor software de gestão de processos para freight forwarders do mercado, e o mais eficaz em otimização de tempo.</Text>
                  <Button border={"3px solid #FBC431"} onClick={() => !openModal ? setOpenModal(true) : ""} _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} fontWeight={400} fontSize={"15.5px"} maxW={"200px"} p="0 18px" background={"none"} color={"#FBC431"}>Solicite uma demo</Button>
                </Flex>
                <Flex w="100%" justifyContent={"space-between"} alignItems={"center"} flexDir={{ sm: "column", xl: "row" }} gap={{ sm: "20px", xl: "0px" }} >
                  <Flex w={{ sm: "90%", xl: "49%" }} justifyContent={{ sm: "space-around", xl: "space-between" }}>
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
                  </Flex>
                  <Flex w={{ sm: "90%", xl: "49%" }} justifyContent={{ sm: "space-around", xl: "space-between" }}>
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

        </Flex>
        <Flex w="100%" scrollMarginTop={"127px"} id="secondSection" minH="60vh" h="100%" zIndex={500} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100%", minHeight: "60vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100%" minH="60vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} alignItems={"start"} w={{ sm: "95%", xl: "100%" }} p="100px 0" flexDir={"column"}  >
              <Flex w={{ sm: "100", xl: "80%" }} borderBottom={"2px solid #ececec"} h="80px">
                <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={{ sm: "37px", lg: "42.7px" }}>Nossos módulos</Heading>
              </Flex>
              <Flex justifyContent={"center"} alignItems={{ sm: "center", xl: "start" }} flexDir={{ sm: "column", xl: "row" }} >
                <Flex flexDir={"column"} gap={"20px"} mt="50px" w={{ sm: "95%", xl: "70%" }}>
                  <Text fontWeight={300} fontSize={{ sm: "22px", lg: "28px" }}>Conheça nossos principais módulos</Text>
                  <Text fontWeight={200} fontSize={{ sm: "17px", lg: "20px" }} mt="10px">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</Text>
                  <UnorderedList fontWeight={200} fontSize={"16px"} gap="10px" display={"flex"} flexDirection={"column"}>
                    <ListItem>Custom details #1</ListItem>
                    <ListItem>Custom details #2</ListItem>
                    <ListItem>Custom details #3</ListItem>
                  </UnorderedList>
                  <Flex justifyContent={{ sm: "center", xl: "start" }} mt={{ sm: "15px", lg: "0px" }} >
                    <Button fontSize={"15px"} h="40px" w={{ sm: "55%", xl: "35%" }} fontWeight={500} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Veja todos os modulos</Button>
                  </Flex>
                </Flex>
                <Flex h="100%" maxW="650px" >
                  <ModulesSlider />
                </Flex>
              </Flex>

            </Flex>
          </Flex>
        </Flex>
        <Flex scrollMarginTop={"127px"} id="thirdSection" justifyContent={"center"} zIndex={500} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} minH="70vh" h="100%" src={Background01} w="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"40% 50%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w={{ sm: "90%", xl: "100%" }} justifyContent={"center"} flexDir={"column"} p={"120px 0"} gap={"60px"}>
              <Heading color={"rgba(255,255,255,0.8)"} w={{ sm: "90%", lg: "60%" }} fontSize={{ sm: "33px", lg: "36px" }}>Conheça as vantagens para sua empresa de usar o sistemas <span style={{ color: "#FBC431" }}>ATLANTIS</span></Heading>
              <Text color={"rgba(255,255,255,0.8)"} w="70%" fontSize={"16px"}>Faça aqui o download da ferramenta para suporte em ambiente <span style={{ color: "#FBC431" }}>Windows</span> e <span style={{ color: "#FBC431" }}>Mac Os</span>. Esta ferramenta permitirá o acesso remoto dos nossos profissionais de suporte para a melhor qualidade no atendimento.</Text>
              <Flex justifyContent={"space-between"} alignItems={{ sm: "center", lg: "start" }} flexDir={{ sm: "column", lg: "row" }}>
                <Flex w={{ sm: "90%", lg: "49%" }}>
                  <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                    <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 800 ? "0" : <CountUp style={{ color: "#FBC431" }} end={45} duration={3} />}</Text>
                    <Flex flexDir={"column"}>
                      <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                      <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                    <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"} >+{scrollPosition <= 800 ? "0" : <CountUp style={{ color: "#FBC431" }} end={100} duration={3} />}</Text>
                    <Flex flexDir={"column"}>
                      <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                      <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex w={{ sm: "90%", lg: "49%" }}>
                  <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                    <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 800 ? "0" : <CountUp style={{ color: "#FBC431" }} end={50} duration={3} />}</Text>
                    <Flex flexDir={"column"}>
                      <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                      <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                    </Flex>
                  </Flex>
                  <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                    <Text fontSize={"48px"} color={"rgba(255,255,255,0.8)"}>+{scrollPosition <= 800 ? "0" : <CountUp style={{ color: "#FBC431" }} end={50} duration={3} />}</Text>
                    <Flex flexDir={"column"}>
                      <Text color="#FBC431" fontWeight="bold" fontSize={"13px"}>BIG NUMBERS 1</Text>
                      <Text fontSize={"16px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" scrollMarginTop={"127px"} id="fourthSection" minH="60vh" h="100%" zIndex={500} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100vw", minHeight: "80vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"80vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w={{ sm: "90%", xl: "100%" }} p="80px 0" flexDir={"column"} justifyContent={"space-between"} alignItems={"center"} gap={"80px"}>
              <Flex flexDir={{ sm: "column", xl: "row" }} gap={{ sm: "40px", lg: "0px" }} >
                <Flex flexDir={"column"} w={{ sm: "100%", xl: "50%" }} >
                  <Flex w="90%" borderBottom={"2px solid #ececec"} h="80px">
                    <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={"42px"}>Sobre nos</Heading>
                  </Flex>
                  <Flex mt="50px">
                    <Flex flexDir={"column"} gap={"30px"}>
                      <Text fontWeight={300} fontSize={"16px"} w="90%">Fundada em 2004, a <span style={{ color: "#FBC431" }}>Mactek Sistemas©</span> é hoje uma empresa 100% brasileira. A idéia do desenvolvimento de um software para atender as necessidades dos freight forwarder surgiu ainda antes, em 1997. Pela participação ativa em um escritório de agenciamento de cargas local, a <span style={{ color: "#FBC431" }}>Mactek Sistemas© </span>vislumbrou a necessidade de uma ferramenta que controle os embarques e os faturamentos dos serviços prestados.</Text>
                      <Text fontWeight={300} fontSize={"16px"} w="90%">Essa idéia deu origem ao <span style={{ color: "#FBC431" }}>ATLANTIS©</span>, um software totalmente destinado a atender as necessidades do freight forwarder em todos os modais. Iniciando através dos modais aéreo e marítimo, o Cheetah X© foi lapidando ao longo do tempo através das experiências de parceiros e clientes, transformando-se numa ferramenta sólida e flexível, para pequenas, médias e grandes empresas no segmento de transporte Internacional.</Text>
                      <Flex justifyContent={{ sm: "center", xl: "start" }} w="100%" >
                        <Button fontSize={"15px"} w={{ sm: "65%", xl: "45%" }} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} fontWeight={500} color={"rgba(255,255,255,0.8)"}>Conheca mais</Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex justifyContent={{ sm: "center", xl: "start" }} w={{ sm: "100%", lg: "50%" }}>
                  <Flex w={{ sm: "70%", xl: "570px" }} >
                    <Image w="100%" h="100%" objectFit={"contain"} src={ATLANTIS} />
                  </Flex>
                </Flex>
              </Flex>
              <Slider />
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" scrollMarginTop={"127px"} id="fifthSection" minH="70vh" h="100%" zIndex={500} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"70vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 50%"} />
          <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Flex zIndex={900} w={{ sm: "90%", lg: "80%" }} alignItems={"center"} flexDir={"column"} gap="46px" p="110px 0" >
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
      </Flex>

    </>
  )
}

