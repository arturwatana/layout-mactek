import { Button, Flex, chakra } from "@chakra-ui/react";
import { useState } from "react";
import {motion} from "framer-motion"
type LoginProps = {
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}


export default function Login({setIsLogged}: LoginProps) {
    const [animateMenu, setAnimateMenu] = useState<boolean>(false)

    const animations = {
        render: {
          y: 1000,
          opacity: 0,
          transition: {
            duration: 1,
            delay: 0.3
          }
        },
      }

    function Logged () {
        setAnimateMenu(true)
        setTimeout(() => {
            setIsLogged(true)
        }, 1000)
    }

    return (
        <>

         <motion.div   initial={{y: 0, opacity: 1}} animate={animateMenu ? "render" : ""} variants={animations}  style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems:"center"}}  >
            <Flex flexDir={"column"}  border={"1px solid white"} background="rgb(192,192,192, 0.5)"  borderRadius={"20px"} h={"230px"}>
                        <chakra.form style={{display: "flex", flexDirection:"column", justifyContent:"space-evenly", height:"100%", alignItems:"center"}} p="20px 50px">
                            <chakra.label htmlFor="username">
                                Usuário:
                            </chakra.label>
                            <chakra.input id="username" borderRadius={"10px"}/>
                            <chakra.label htmlFor="pasword">
                                Senha:
                            </chakra.label>
                            <chakra.input type="password" id="password" borderRadius={"10px"}/>
                            <Button w="50%" mt="10px" onClick={Logged}>Submit</Button>
                        </chakra.form>
                    </Flex>

        </motion.div>
        </>
    )

}