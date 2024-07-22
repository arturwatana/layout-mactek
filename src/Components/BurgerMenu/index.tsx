import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function BurgerMenu() {

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
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2
            }
        })
    }
    return (
        <>
            <Flex pos={"absolute"} w="100%" h="100%" overflow={"none"}>
                <motion.div style={{ width: "100%", height: "100vh", background: "rgb(34, 2, 0, 0.4)", position: "absolute", zIndex: 3000, overflow: "none" }}>
                </motion.div>
                <motion.div initial={{ x: 100, opacity: 0 }} style={{ zIndex: 3001, border: "1px solid red" }}>
                    <motion.div  style={{ borderRadius: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <motion.a  variants={variants} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>oi</motion.a>
                        <motion.a  variants={variants} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>oasdasdi</motion.a>
                        <motion.a  variants={variants} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>oi</motion.a>
                    </motion.div>
                </motion.div>
            </Flex>

        </>
    )
}