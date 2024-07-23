import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

type NavBarProps = {
    setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>,
    openBurger?: boolean
  }

export default function BurgerMenu({setOpenBurger}: NavBarProps) {

    const words: string[] = ["Todos Módulos", "A Mactek", "Suporte", "Contato"]

    const variants = {
        render: {
            x: 0,
            opacity: 1
        },
        hide: {
            x: 1000,
        },
        hideLayer: {
            display: "none"
        },
        renderLi: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3 * (i * 0.5 )
            }
        })
    }
    return (
        <>
            <Flex position={"fixed"} w="100%" h="100%" overflow={"none"} justifyContent={"center"} alignItems={"center"} zIndex={3000}>
                <motion.div  style={{ width: "100%", height: "100%", background: "rgb(0, 0, 0, 0.8)", position: "absolute", zIndex: 3002, overflow: "hidden" }} onClick={() => setOpenBurger(false) }>
                </motion.div>
                <motion.div style={{ maxHeight:"40vh",color:"white", zIndex: 3003, justifyContent:"center", alignItems:"center", display: "flex", flexDirection:"column", gap:"15px"}}>
                <motion.div initial={{opacity: 0, y: -20}} variants={variants} custom={0} animate={"renderLi"} >
                    <motion.input  placeholder="Search" style={{padding: "5px", borderRadius: "20px", background: "rgb(128,128,128, 0.6)"}}/>
                </motion.div>
                    <motion.div  style={{ width: "100%",  justifyContent:"center", alignItems:"center", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        {words.map((word, index) => (<motion.a initial={{opacity: 0, y: -20}} variants={variants} custom={index + 1} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>{word}</motion.a>))}
                        <motion.button initial={{opacity: 0, y: -20}} variants={variants} custom={5} animate={"renderLi"} style={{fontSize: "13.1px", borderRadius: "5px", border:" 2px solid #FBC431", height:"32px", padding: "0 15px", background: "none", color: "#FBC431"}} whileHover={{color: "rgba(255,255,255,0.8)", background: "#FBC431"}} ><motion.a href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" >Windows</motion.a></motion.button>
                        <motion.button initial={{opacity: 0, y: -20}} variants={variants} custom={6} animate={"renderLi"} style={{fontSize: "13.1px", borderRadius: "5px", border:" 2px solid #FBC431", height:"32px", padding: "0 15px", background: "none", color: "#FBC431"}} whileHover={{color: "rgba(255,255,255,0.8)", background: "#FBC431"}} ><motion.a href="https://download.teamviewer.com/download/TeamViewer.dmg" >Mac OS</motion.a></motion.button>
                         
                    </motion.div>
                </motion.div>
            </Flex>

        </>
    )
}