import { Button, Flex, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import MainImg from "./assets/main-demo1.jpg"
import MactekLogo from "./assets/logo-mactek.png"
import Aerial from "./assets/Iconsa.png"
import Maritime from "./assets/Iconsmar.png"
import Rodov from "./assets/Iconsrodv.png"
import Clearence from "./assets/Iconsrast.png"
import YoungWoman from "./assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import Background01 from "./assets/fundo1.jpg"
import { useState } from "react"
import CountUp from "react-countup"
import EGEO from "./assets/Desks.png"
import Slider from "./Components/Slider"

function App() {
  const [number1, setNumber1] = useState<number>(0)
  const [number2, setNumber2] = useState<number>(0)
  const [number3, setNumber3] = useState<number>(0)
  const [number4, setNumber4] = useState<number>(0)


  return (
    <>
      <Flex w="100vw" flexDir={"column"}>
        <Flex w="100%" h="90vh" position={"relative"}  >
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", height: "90vh", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={MainImg} w="100vw" h={"90vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex zIndex={900} w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"} >
            <Flex w="40%" flexDir={"column"} gap={"50px"}>
              <Flex justifyContent={"space-between"} color={"rgba(255,255,255,0.8)"} >
                <Flex gap={"40px"}>
                  <Text>+55 11 3159-3665</Text>
                  <Text>comercial@mactek.net</Text>
                </Flex>
                <Flex gap={"40px"}>
                  <Text>Entrar / Cadastre-se</Text>
                  <Text>Languages
                  </Text>
                </Flex>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Flex w={"250px"} h="50px">
                  <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
                </Flex>
                <UnorderedList listStyleType={"none"} fontSize={"22px"} fontWeight={"semi-bold"} color={"rgba(255,255,255,0.8)"} display={"flex"} gap={"40px"} justifyContent={"center"} alignItems={"center"}>
                  <ListItem _hover={{ color: "white", cursor: "pointer" }}>Todos modulos</ListItem>
                  <ListItem _hover={{ color: "white", cursor: "pointer" }}>A Mactek</ListItem>
                  <ListItem _hover={{ color: "white", cursor: "pointer" }}>Suporte</ListItem>
                  <ListItem _hover={{ color: "white", cursor: "pointer" }}>Contato</ListItem>
                  <Button border={"3px solid #FBC431"} _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 22px"} background={"none"} color={"#FBC431"} >Windows</Button>
                  <Button border={"3px solid #FBC431"} _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} p={"0 22px"} background={"none"} color={"#FBC431"}>Mac OS</Button>
                </UnorderedList>
              </Flex>



            </Flex>
            <Flex w="50%" h="100%" mt={"250px"} flexDir={"column"} alignItems={"center"} color="white" gap="120px">
              <Flex flexDir={"column"} gap={"50px"} >
                <Text w="50%" style={{ fontWeight: 300 }} lineHeight={"1.6"} letterSpacing={"1px"} fontSize={"35px"} >
                  <span style={{ color: "#FBC431", fontWeight: "500" }} color={"#FBC431"}>EGEO</span> é o melhor software de gestão de processos para freight forwarders do mercado, e o mais eficaz em otimização de tempo. TEST</Text>
                <Button border={"3px solid #FBC431"} _hover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} fontWeight={500} fontSize={18} w="230px" h="45px" borderRadius={"10px"} p={"0 30px"} background={"none"} color={"#FBC431"}>Solicite uma demo</Button>
              </Flex>
              <Flex w="100%" justifyContent={"space-between"}>
                <Flex flexDirection={"column"} gap="20px">
                  <Flex w="80px" h="80px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={Aerial} />
                  </Flex>
                  <Flex flexDir="column" gap="8px">
                    <Text fontWeight={"bold"} fontSize={"20px"}>Modulo Aereo</Text>
                    <Text fontSize={"22px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap="20px">
                  <Flex w="80px" h="80px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={Maritime} />
                  </Flex>
                  <Flex flexDir="column" gap="8px">
                    <Text fontWeight={"bold"} fontSize={"20px"}>Modulo Aereo</Text>
                    <Text fontSize={"22px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap="20px">
                  <Flex w="80px" h="80px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={Rodov} />
                  </Flex>
                  <Flex flexDir="column" gap="8px">
                    <Text fontWeight={"bold"} fontSize={"20px"}>Modulo Aereo</Text>
                    <Text fontSize={"22px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                  </Flex>
                </Flex>
                <Flex flexDirection={"column"} gap="20px">
                  <Flex w="80px" h="80px">
                    <Image w="100%" h="100%" objectFit={"contain"} src={Clearence} />
                  </Flex>
                  <Flex flexDir="column" gap="8px">
                    <Text fontWeight={"bold"} fontSize={"20px"}>Modulo Aereo</Text>
                    <Text fontSize={"22px"} fontWeight={300}>Animi reiciendis amet magni placeat.</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" h="60vh" zIndex={900} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width:  "100%", height: "60vh", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100%" h={"60vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex zIndex={900} w="50%" p="120px 0" flexDir={"column"} gap={"60px"}>
            <Flex w="80%" borderBottom={"2px solid #ececec"} h="80px">
              <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={"45px"}>Nossos módulos</Heading>
            </Flex>
            <Flex>
              <Flex flexDir={"column"} gap={"20px"}>
                <Text fontWeight={300} fontSize={"32px"}>Conheça nossos principais módulos</Text>
                <Text fontWeight={200} fontSize={"20px"} mt="10px" w="70%">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</Text>
                <UnorderedList fontWeight={200} fontSize={"20px"} gap="10px" display={"flex"} flexDirection={"column"}>
                  <ListItem>Custom details #1</ListItem>
                  <ListItem>Custom details #2</ListItem>
                  <ListItem>Custom details #3</ListItem>
                </UnorderedList>
                <Button borderRadius={"15px"} fontSize={"18px"} w="25%" _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 22px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Veja todos os modulos</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", width:  "100%", height: "70vh", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} h="70vh" src={Background01} w= "100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"40% 50%"} />
          <Flex zIndex={900} w="50%" justifyContent={"center"} flexDir={"column"} p={"120px 0"} gap={"90px"}>
            <Heading color={"rgba(255,255,255,0.8)"} w="50%" fontSize={"46px"}>Conheça as vantagens para sua empresa de usar o sistema EGEO</Heading>
            <Text color={"rgba(255,255,255,0.8)"} w="70%" fontSize={"20px"}>Faça aqui o download da ferramenta para suporte em ambiente Windows e Mac Os. Esta ferramenta permitirá o acesso remoto dos nossos profissionais de suporte para a melhor qualidade no atendimento.</Text>
            <Flex justifyContent={"space-between"}>
              <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                <Text color="#FBC431" fontSize={"50px"}>+<CountUp end={45} duration={3} /></Text>
                <Flex flexDir={"column"}>
                  <Text color="#FBC431" fontWeight="bold" fontSize={"20px"}>BIG NUMBERS 1</Text>
                  <Text fontSize={"20px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                <Text color="#FBC431" fontSize={"50px"}>+<CountUp end={50} duration={3} /></Text>
                <Flex flexDir={"column"}>
                  <Text color="#FBC431" fontWeight="bold" fontSize={"20px"}>BIG NUMBERS 1</Text>
                  <Text fontSize={"20px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                <Text color="#FBC431" fontSize={"50px"}>+<CountUp end={50} duration={3} /></Text>
                <Flex flexDir={"column"}>
                  <Text color="#FBC431" fontWeight="bold" fontSize={"20px"}>BIG NUMBERS 1</Text>
                  <Text fontSize={"20px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                </Flex>
              </Flex>
              <Flex flexDir={"column"} w="350px" color="rgba(255,255,255,0.8)" gap={"20px"}>
                <Text color="#FBC431" fontSize={"50px"}>+<CountUp end={50} duration={3} /></Text>
                <Flex flexDir={"column"}>
                  <Text color="#FBC431" fontWeight="bold" fontSize={"20px"}>BIG NUMBERS 1</Text>
                  <Text fontSize={"20px"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur</Text>
                </Flex>
              </Flex>
            </Flex>

          </Flex>

        </Flex>
        <Flex w="100%" h="60vh" zIndex={900} justifyContent={"center"} position={"relative"}>
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)", width: "100vw", height: "80vh", position: "absolute", zIndex: 90 }} />
          <Image position={"absolute"} src={YoungWoman} w="100vw" h={"80vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
          <Flex zIndex={900} w="50%" pt="80px" flexDir={"column"} justifyContent={"space-between"} alignItems={"center"} gap={"80px"}>
            <Flex>
              <Flex flexDir={"column"} w="50%" >
                <Flex w="90%" borderBottom={"2px solid #ececec"} h="80px">
                  <Heading color={"#fbc431"} fontWeight={800} borderBottom={"2px solid rgba(0,0,0,0.1)"} h="100%" fontSize={"45px"}>Sobre nos</Heading>
                </Flex>
                <Flex mt="50px">
                  <Flex flexDir={"column"} gap={"30px"}>
                    <Text fontWeight={200} fontSize={"22px"} w="90%">Fundada em 2004, a Mactek Sistemas© é hoje uma empresa 100% brasileira. A idéia do desenvolvimento de um software para atender as necessidades dos freight forwarder surgiu ainda antes, em 1997. Pela participação ativa em um escritório de agenciamento de cargas local, a Mactek Sistemas© vislumbrou a necessidade de uma ferramenta que controle os embarques e os faturamentos dos serviços prestados.</Text>
                    <Text fontWeight={200} fontSize={"22px"} w="90%">Essa idéia deu origem ao EGEO©, um software totalmente destinado a atender as necessidades do freight forwarder em todos os modais. Iniciando através dos modais aéreo e marítimo, o Cheetah X© foi lapidando ao longo do tempo através das experiências de parceiros e clientes, transformando-se numa ferramenta sólida e flexível, para pequenas, médias e grandes empresas no segmento de transporte Internacional.</Text>
                    <Button borderRadius={"15px"} fontSize={"20px"} w="25%" _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 22px"} background={"#FBC431"} fontWeight={400} color={"rgba(255,255,255,0.8)"}>Conheca mais</Button>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w="45%"  >
                <Image w="100%" h="100%" objectFit={"contain"} src={EGEO} />
              </Flex>
            </Flex>
            <Slider />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default App
