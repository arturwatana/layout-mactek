import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Tela2 from "../../assets/tela-2.png"
import { useIsMedium } from "../../Utils/MediaQuery";
type SwipeProps = {
    cards: number,
    cardInView: number
}

export default function ModulesSlider() {
    const [stopAnimation, setStopAnimation] = useState<boolean>(false)
    const isMedium = useIsMedium()

    const [swipe, setSwipe] = useState<SwipeProps>({
        cards: 3,
        cardInView: 0
    })

    const variants = isMedium ? {
        swipe: (i: number) => ({
            x: 0 - (144 * (i * 2)),
            transition: {
                duration: 0.1,
            }
        }),
    } : {
        swipe: (i: number) => ({
            x: 0 - (320 * (i * 2)),
            transition: {
                duration: 0.1,
            }
        }),
    }


    function prevImg() {
        setSwipe((prev) => ({ ...prev, cardInView: prev.cardInView === 0 ? isMedium ? 5 : 2 : prev.cardInView - 1 }))

    }

    function nextImg() {
        setSwipe((prev) => ({ ...prev, cardInView: prev.cardInView === (isMedium ? 5 : 2) ? 0 : prev.cardInView + 1 }))
    }


    useEffect(() => {
        if (stopAnimation) {
            const interval = setInterval(() => {
                setStopAnimation(false)
            }, 5000)
            return () => clearInterval(interval)
        }
        if (!stopAnimation) {
            const interval = setInterval(() => {
                nextImg()
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [stopAnimation])





    return (
        <>
            <Flex w="100%" mt="60px" maxW={"650px"} zIndex={999} flexDir={'column'} justifyContent={"center"} alignItems={"center"} gap={"15px"}>
                <Flex gap={{ sm: "20px", lg: "5px" }} >
                    <Box color="#222" h="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={35} mt={4} onClick={() => { prevImg(); setStopAnimation(true) }} cursor={"pointer"} color="#ff6418"><IoIosArrowBack /></Text>
                    </Box>
                    <Flex maxW={{ sm: "250px", lg: "600px" }} overflow={"hidden"}  >
                        <motion.div animate={"swipe"} style={{ display: "flex", gap: "5px" }} custom={swipe.cardInView} variants={variants} >
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/aereo">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Aereo</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/maritimo">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Maritimo</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/rodoviario">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Rodoviario</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/aduaneiro">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Aduaneiro</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/contabilidade">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Contabilidade</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/aereo">
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Aereo</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>
                            <Flex flexDir={"column"} p="0 15px 30px" gap="20px" color="#FBC431" as={"a"} href="/modulos/aereo"  >
                                <Flex w={{ sm: "250px", lg: "285.2px" }} h={{ sm: "220px", lg: "176px" }} >
                                    <Image w={"100%"} h="100%" fit={"contain"} src={Tela2} />
                                </Flex>
                                <Text fontWeight={600} fontSize={"20px"}>Modulo Aereo</Text>
                                <Text w="100%" color="black" fontSize={"12px"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </Text>
                            </Flex>

                        </motion.div>
                    </Flex>

                    <Box color="#222" h="100%" display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Text fontSize={35} color="#ff6418" cursor={"pointer"} onClick={() => { nextImg(); setStopAnimation(true) }} transform="rotate(180deg)"><IoIosArrowBack /></Text>
                    </Box>
                </Flex>
                <Flex gap={"10px"}>
                    {isMedium ? Array(6).fill("a").map((_, index) => (
                        <Box w="12px" h="12px" cursor={"pointer"} key={index} background={swipe.cardInView == index ? "black" : "gray"} onClick={() => { setSwipe((prev) => ({ ...prev, cardInView: index })); setStopAnimation(true) }} transition={"0.3s"} borderRadius={"50px"} />
                    )) : Array(3).fill("a").map((_, index) => (
                        <Box w="12px" h="12px" cursor={"pointer"} key={index + 1} background={swipe.cardInView == index ? "black" : "gray"} onClick={() => { setSwipe((prev) => ({ ...prev, cardInView: index })); setStopAnimation(true) }} transition={"0.3s"} borderRadius={"50px"} />
                    ))}
                </Flex>
            </Flex>

        </>
    )
}