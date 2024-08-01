import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ModuleProps, modulesInfo } from "../../Utils/ModulesDB"

type NavBarProps = {
    setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>,
    openBurger?: boolean
}

type WordProps = {
    name: string
    class: string
    href?: string
    page: string
}


export default function BurgerMenu({ setOpenBurger }: NavBarProps) {
    const words: WordProps[] = [{ name: "Atlantis", class: "thirdSection", page: "" }, { name: "A Mactek", class: "fourthSection" , page: "" }, { name: "Contato", class: "fifthSection", page: "" }, { name: "Principais Modulos", class: "secondSection", page: "modulos" }, { name: "Contato", class: "fifthSection", page: "modulos" }, { name: "Vantagens", class: "secondSection", page: "/modulos/individual" }, { name: "Contato", class: "fifthSection", page: "/modulos/individual" } ]
    const [search, setSearch] = useState<string>("")
    const [modules, setModules] = useState<ModuleProps[]>()
    const url = window.location.href

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
                delay: 0.3 * (i * 0.5)
            }
        })
    }

    function scrollToTarget(e: any) {
        const id = e.target.className
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const modules = modulesInfo
        setModules(modules)
    }, [])

    return (
        <>
            <Flex position={"fixed"} w="100%" h="100%" overflow={"none"} justifyContent={"center"} alignItems={"center"} zIndex={3000}>
                <motion.div style={{ width: "100%", height: "100%", background: "rgb(0, 0, 0, 0.8)", position: "absolute", zIndex: 3002, overflow: "hidden" }} onClick={() => setOpenBurger(false)}>
                </motion.div>
                <motion.div style={{ position: "fixed", maxHeight: "40vh", color: "white", zIndex: 3003, justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", gap: "15px" }}>
                    <motion.div initial={{ opacity: 0, y: -20 }} variants={variants} custom={0} animate={"renderLi"} >
                        <motion.input placeholder="Search" onChange={(e) => setSearch(e.target.value)} style={{ padding: "5px 15px", borderRadius: "20px", background: "rgb(128,128,128, 0.6)" }} />
                    </motion.div>
                    {search.length <= 2 ? (<motion.div style={{ width: "100%", justifyContent: "center", alignItems: "center", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        {words.map((word, index) => {
                        if(url.split("/").length > 4){
                            if(word.page == '/modulos/individual'){
                            return <motion.a className={word.class} key={index} onClick={(e) => { setOpenBurger(false);scrollToTarget(e)}} initial={{ opacity: 0, y: -20 }} variants={variants} custom={index -1 } animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>{word.name}</motion.a>
                            } 
                        }
                        if(url.split("/").length <= 4 && url.split("/")[3]  === word.page){
                            return <motion.a className={word.class} key={index} onClick={(e) => { setOpenBurger(false);scrollToTarget(e)}} initial={{ opacity: 0, y: -20 }} variants={variants} custom={index -1 } animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>{word.name}</motion.a>
                        } 
                        })}
                        <motion.button initial={{ opacity: 0, y: -20 }} variants={variants} custom={url.split("/").length <= 4 ? 2: 7} animate={"renderLi"} style={{ fontSize: "13.1px", borderRadius: "5px", border: " 2px solid #FBC431", height: "32px", padding: "0 15px", background: "none", color: "#FBC431" }} whileHover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} ><motion.a href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" >Windows</motion.a></motion.button>
                        <motion.button initial={{ opacity: 0, y: -20 }} variants={variants} custom={url.split("/").length <= 4 ? 3: 8} animate={"renderLi"} style={{ fontSize: "13.1px", borderRadius: "5px", border: " 2px solid #FBC431", height: "32px", padding: "0 15px", background: "none", color: "#FBC431" }} whileHover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} ><motion.a href="https://download.teamviewer.com/download/TeamViewer.dmg" >Mac OS</motion.a></motion.button>
                    </motion.div>) : (
                        <motion.ul style={{ flexDirection: "column", gap: "15px", display: "flex", marginTop: "10px" }}>
                            <motion.a style={{ cursor: "pointer", fontSize: 28 }}>Módulos filtrados</motion.a>
                            {modules?.map((module, index) => (
                                module.title.toLowerCase().includes(search.toLowerCase()) ? (<motion.a href={module.href} key={index} initial={{ opacity: 0, y: -20 }} variants={variants} custom={0} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25, textAlign: "center" }}>{module.title}</motion.a>) : null
                            ))}


                        </motion.ul>
                    )}
                </motion.div>
            </Flex>
        </>
    )
}