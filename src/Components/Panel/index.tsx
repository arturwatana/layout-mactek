import { Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import AddMessage, { MessageProps } from "../AddMessage";
import MainImg from "../../assets/main-demo1.jpg"
import MactekLogo from "../../assets/logo-mactek.png"
import { messagesDB } from "../../Utils/MessagesDB";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


export default function Panel() {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [addMessage, setAddMessage] = useState<boolean>(false)
  const [messageToEdit, setMessageToEdit] = useState<MessageProps | null>()
  const [updateScreen, setUpdateScreen] = useState<boolean>(false)
  
  const animations = {
    render: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3
      }
    },
  }

  function setDatePattern(message: MessageProps) {
      setMessageToEdit({
      id: message.id,
      title: message.title,
      endDate: message.endDate.split("T")[0],
      message: message.message,
      startDate: message.startDate.split("T")[0],
      isActive: message.isActive
    })
  }

  async function getMessages() {
    const messagesDb = await messagesDB.getMessages()
    setMessages(messagesDb)
  }

  useEffect(() => {
      if(updateScreen){
        getMessages()
        setUpdateScreen(false)
      }
  }, [updateScreen])

  useEffect(() => {
    getMessages()
  }, [])

  useEffect(() => {
    if (!addMessage) {
      setMessageToEdit(null)
    }
  }, [addMessage])


  return (
    <>
      <ToastContainer />
      <Flex w="100%" h="100%" justifyContent={"center"} >
        {addMessage ? <AddMessage setUpdateScreen={setUpdateScreen} setAddMessage={setAddMessage} messageToEdit={messageToEdit} /> : null}
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", width: "100%", minHeight: "100vh", height: "100%", position: "absolute", zIndex: 90 }} />
        <Image position={"absolute"} src={MainImg} w="100vw" minH="100vh" h="100%" backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 42%"} />
        <Flex justifyContent={"center"} position={"relative"} w={"100%"} maxW="1680px" alignItems={"center"} flexDir={"column"}>
          <Flex zIndex={900} w="80%" justifyContent={"center"} position={"relative"} alignItems={"start"} flexDir={"column"}>
            <Flex as={"a"} href="/" w={"200px"} h="41px" position={"absolute"} top="30" zIndex={900}>
              <Image w="100%" h="100%" objectFit={"contain"} src={MactekLogo} />
            </Flex>
            <motion.div animate={"render"} variants={animations} style={{ width: "100%", minHeight: "100vh", display: "flex",justifyContent: "center", alignItems: "center" }}  >
              <Flex border={"1px solid white"} flexDir={"column"} background="rgb(192,192,192, 1)" w={"100%"} h="80%" minH={"60vh"} borderRadius={"10px"}>
                <Flex w="100%" p="15px" flexDir={"column"} gap="10px">
                  <Flex justifyContent={"end"} w="100%">
                    <Flex onClick={() => setAddMessage(true)} background={"rgb(251, 196, 49, 1)"} _hover={{ background: "rgb(251, 196, 49,0.7)" }} cursor={"pointer"} fontWeight={"500"} fontSize={"26px"} borderRadius={"5px"} w={"40px"} alignItems={"center"} justifyContent={"center"}>
                      <Text>+</Text>
                    </Flex>
                  </Flex>
                  <Flex overflow={'auto'}>
                    <Table>
                      <Thead>
                        <Tr >
                          <Th >
                            Titulo
                          </Th>
                          <Th >
                            Mensagem
                          </Th>
                          <Th >
                            Data Inicio
                          </Th>
                          <Th >
                            Data Termino
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {messages.map((message, index) => (
                          <Tr _hover={{ background: "rgb(182,192,192, 1)" }} key={index} cursor={"pointer"} onClick={() => { setDatePattern(message); setAddMessage(true); }}>
                            <Td borderRight={"1px solid gray"} >
                              {message.title}
                            </Td>
                            <Td borderRight={"1px solid gray"} >
                              {message.message}
                            </Td>
                            <Td borderRight={"1px solid gray"} >
                              {message.startDate.split("T")[0].split("-").reverse().join("/")}
                            </Td>
                            <Td >
                              {message.endDate.split("T")[0].split("-").reverse().join("/")}
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
      </Flex>

    </>
  )
}