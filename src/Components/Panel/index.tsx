import { Flex } from "@chakra-ui/react";
import { motion} from "framer-motion"
import { useState } from "react";
import ManageMessages from "../ManageMessages";
import AddMessage from "../AddMessage";


export default function Panel(){
    const [menu, setMenu] = useState<string>("add")

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


    return (
        <>
                  <motion.div initial={{y: 1000, opacity: 0}} animate={"render"} variants={animations}  style={{width: "50%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems:"center"}}  >
                        <Flex border={"1px solid white"} background="rgb(192,192,192, 0.8)"  w={"100%"} h="60%" minH={"60vh"} borderRadius={"20px"}>
                            <Flex w="30%" border="1px solid white" borderRadius={"20px 0 0 20px"} p="30px 0 0 0">
                                <motion.ul style={{width: "100%", display: "flex", flexDirection:"column",alignItems: "center", listStyle: "none", gap:"20px", fontSize: "18px"}} >
                                    <motion.li onClick={() => setMenu("add")} whileHover={{color: "rgba(255,255,255,0.8)"}} style={{cursor: "pointer"}}> Adicionar Mensagem</motion.li>
                                    <motion.li onClick={() => setMenu("manage")} whileHover={{color: "rgba(255,255,255,0.8)"}} style={{cursor: "pointer"}} >Gerenciar Mensagens</motion.li>
                                </motion.ul>
                            </Flex>
             <Flex w="70%" p="15px" flexDir={"column"} gap="10px"> 
                {menu == "add" ? <AddMessage/> : <ManageMessages/>}
             </Flex>
                            
                        </Flex>
                    </motion.div>
        </>
    )
}