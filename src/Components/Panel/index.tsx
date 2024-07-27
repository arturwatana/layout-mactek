import { Flex, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

type MessageProps = {
  title: string
  message: string
  startDate: string
  endDate: string
}

export default function Panel() {
  const [messages, setMessages] = useState<MessageProps[]>([])
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

  useEffect(() => {
    setMessages([{ title: "Feriado Nacional", message: "Ola, no feriado do dia 18/08 nao teremos expediente. Agradecemos a compreensao", startDate: "17/06/2042", endDate: "17/06/2042" },{ title: "Feriado Nacional", message: "Ola, no feriado do dia 18/08 nao teremos expediente. Agradecemos a compreensao", startDate: "17/06/2042", endDate: "17/06/2042" },{ title: "Feriado Nacional", message: "Ola, no feriado do dia 18/08 nao teremos expediente. Agradecemos a compreensao", startDate: "17/06/2042", endDate: "17/06/2042" },{ title: "Feriado Nacional", message: "Ola, no feriado do dia 18/08 nao teremos expediente. Agradecemos a compreensao", startDate: "17/06/2042", endDate: "17/06/2042" }])
  }, [])


  return (
    <>
      <motion.div animate={"render"} variants={animations} style={{ width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}  >
        <Flex border={"1px solid white"} flexDir={"column"} background="rgb(192,192,192, 1)" w={"100%"} h="80%" minH={"60vh"} borderRadius={"10px"}>
          {/* <Flex w="20%" border="1px solid white" borderRadius={"20px 0 0 20px"} p="30px 0 0 0">
            <motion.ul style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", listStyle: "none", gap: "20px", fontSize: "18px" }} >
              <motion.li onClick={() => setMenu("add")} whileHover={{ color: "rgba(255,255,255,0.8)" }} style={{ cursor: "pointer" }}> Adicionar Mensagem</motion.li>
              <motion.li onClick={() => setMenu("manage")} whileHover={{ color: "rgba(255,255,255,0.8)" }} style={{ cursor: "pointer" }} >Gerenciar Mensagens</motion.li>
            </motion.ul>
          </Flex> */}
          <Flex w="100%" p="15px" flexDir={"column"} gap="10px">
            <Flex>
              <Table>
                <Tr>
                  <Th>
                    Titulo
                  </Th>
                  <Th>
                    Mensagem
                  </Th>
                  <Th>
                    Data Inicio
                  </Th>
                  <Th>
                    Data Termino
                  </Th>
                </Tr>
                <Tbody>
                  {messages.map(message => (
                    <Tr _hover={{ background: "rgb(182,192,192, 0.8)" }} cursor={"pointer"}>
                      <Td borderRight={"1px solid gray"}>
                        {message.title}
                      </Td>
                      <Td borderRight={"1px solid gray"}>
                      {message.message}
                      </Td>
                      <Td borderRight={"1px solid gray"}>
                      {message.startDate}
                      </Td>
                      <Td>
                      {message.endDate}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Flex>
            {/* {menu == "add" ? <AddMessage/> : <ManageMessages/>} */}
          </Flex>

        </Flex>
      </motion.div>
    </>
  )
}