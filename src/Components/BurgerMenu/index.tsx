import { Flex, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ModuleProps, modulesInfo } from "../../Utils/ModulesDB"
import BrazilFlag from "../../assets/brazil-flag-icon.svg"
import USFlag from "../../assets/united-states-flag-icon.svg"
import ESFlag from "../../assets/spain-country-flag-icon.svg"

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
    const words: WordProps[] = [{ name: "Atlantis", class: "thirdSection", page: "initial" }, { name: "A Mactek", class: "fourthSection" , page: "initial" }, { name: "Contato", class: "fifthSection", page: "initial" }, { name: "Principais Modulos", class: "secondSection", page: "modulos" }, { name: "Contato", class: "fifthSection", page: "modulos" }, { name: "Vantagens", class: "secondSection", page: "/modulos/individual" }, { name: "Contato", class: "fifthSection", page: "/modulos/individual" } ]
    const [search, setSearch] = useState<string>("")
    const [modules, setModules] = useState<ModuleProps[]>()
    const [languages, setLanguages] = useState<boolean>(false)
    const url = window.location.pathname

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


    useEffect(() => {console.log(languages)}, [languages])

    function page(){
        const arrayUrl = url.split("/")
        if(arrayUrl.length < 3 && arrayUrl[arrayUrl.length -1] == ''){
            return "initial"
        } 
        if((arrayUrl.length < 3 && arrayUrl[arrayUrl.length -1] == 'modulos')){
            return "modulos"
        } 
        if(arrayUrl.length >=3 && arrayUrl[arrayUrl.length -1] != ''){
            return "/modulos/individual"
        }
    }

    return (
        <>
            <Flex position={"fixed"} flexDir={"column"} w="100%" h="100%" overflow={"none"} justifyContent={"end"} alignItems={"center"} zIndex={3000}>
                <motion.div style={{ width: "100%", height: "100%", background: "rgb(0, 0, 0, 0.8)", position: "absolute", zIndex: 3002, overflow: "hidden" }} onClick={() => languages ? setLanguages(false) :  setOpenBurger(false)}>
                </motion.div>
                <Flex flexDir={"column"} zIndex={4000} h="55%" gap="20px" justifyContent={"space-between"} pb="100px">
                    <motion.div initial={{ opacity: 0, y: -20 }} variants={variants} custom={0} animate={"renderLi"} >
                        <motion.input placeholder="Search"   onChange={(e) => setSearch(e.target.value)} style={{ padding: "5px 15px", borderRadius: "20px", background: "rgb(128,128,128, 0.6)", zIndex: 5000}} />
                    </motion.div>
                <motion.div  onClick={() => languages ? setLanguages(false) :  setOpenBurger(false)} style={{  height: "40vh", color: "white", zIndex: 4003, justifyContent: "space-between", alignItems: "center", display: "flex", flexDirection: "column", gap: "15px" }}>
                    {search.length <= 2 ? (<motion.div style={{ width: "100%", justifyContent: "center", alignItems: "center", borderRadius: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
                        <motion.a href="/"key={99} onClick={(e) => { setOpenBurger(false);scrollToTarget(e)}} initial={{ opacity: 0, y: -20 }} variants={variants} custom={0} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>Inicio</motion.a>
                        {words.map((word, index) => {
                        if(page() == word.page){
                            return <motion.a className={word.class} key={index} onClick={(e) => { setOpenBurger(false);scrollToTarget(e)}} initial={{ opacity: 0, y: -20 }} variants={variants} custom={page() == 'initial' ? index + 1 : page() =='modulos' ? index -2 : index -4} animate={"renderLi"} style={{ cursor: "pointer", fontSize: 25 }}>{word.name}</motion.a>
                        }

                        })}
                        <motion.button initial={{ opacity: 0, y: -20 }} variants={variants} custom={page() == 'initial' ? 4: page() =='modulos' ? 3 : 3} animate={"renderLi"} style={{ fontSize: "13.1px", borderRadius: "5px", border: " 2px solid #FBC431", height: "32px", padding: "0 15px", background: "none", color: "#FBC431" }} whileHover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} ><motion.a href="https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" >Windows</motion.a></motion.button>
                        <motion.button initial={{ opacity: 0, y: -20 }} variants={variants} custom={page() == 'initial' ? 4: page() =='modulos' ? 3 : 3} animate={"renderLi"} style={{ fontSize: "13.1px", borderRadius: "5px", border: " 2px solid #FBC431", height: "32px", padding: "0 15px", background: "none", color: "#FBC431" }} whileHover={{ color: "rgba(255,255,255,0.8)", background: "#FBC431" }} ><motion.a href="https://download.teamviewer.com/download/TeamViewer.dmg" >Mac OS</motion.a></motion.button>
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
                <Flex w="80%" >
                <motion.div  onClick={() => setLanguages(true)}style={{zIndex: 4005,margin: "50px 0 50px 0 ",  background:"rgba(255,255,255,1)", padding: "5px",  width: "80px", position:"relative", display: "flex", borderRadius: "10px",justifyContent:"center", alignItems:"center"}} initial={{ opacity: 0, y: -20 }} variants={variants} custom={4} animate={"renderLi"}  >
                    <Image w="100px"src={BrazilFlag}/>
                {languages ? (
                         <Flex p="5px" borderRadius={"10px"} position={"absolute"} background={"rgba(255,255,255,1)"} flexDir={"column"} alignItems={"center"} justifyContent={"space-between"}  w="80px" top={-130} minH="190px">
                         <Image w="100px" src={BrazilFlag} onClick={(() => setOpenBurger(false))}/>
                         <Image w="100px" src={USFlag} onClick={(() => setOpenBurger(false))}/>
                         <Image w="100px" src={ESFlag} onClick={(() => setOpenBurger(false))}/>
                     </Flex>
                ) : null}
                </motion.div>
                </Flex>
            </Flex>
        </>
    )
}