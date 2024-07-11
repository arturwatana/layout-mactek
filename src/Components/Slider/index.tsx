import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion} from "framer-motion"
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Flat from "../../assets/logo.png"
type SwipeProps = {
    cards: number,
    cardInView: number
}

export default function Slider(){
    const [stopAnimation, setStopAnimation] = useState<boolean>(false)

    const [swipe, setSwipe] = useState<SwipeProps>({
        cards: 8,
        cardInView: 0
    })

    const variants = {
        swipe:(i: number) => ({
            x: 0 - (220 * i),
            transition: {
                duration: 0.5,
            }
        }),
    }

    function prevImg(){
        setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 0 ? 4 : prev.cardInView -1}))

    }

    function nextImg(){
        setSwipe((prev) => ({...prev, cardInView: prev.cardInView === 4 ? 0 : prev.cardInView +1}))
    }


    useEffect(() => {
        if(stopAnimation){
            const interval = setInterval(() => {
               setStopAnimation(false)
            }, 5000)
            return () => clearInterval(interval)
        }
        if(!stopAnimation){
            const interval = setInterval(() => {
                nextImg()
            }, 3000)
            return () => clearInterval(interval)
        } 
    }, [stopAnimation])


    

    return (
        <>
            <Flex w="100%"  justifyContent={"center"} zIndex={999}>
                    <Box color="#222"  onClick={() => {prevImg(); setStopAnimation(true)}}>
                        <Text fontSize={35} mt={4}  cursor={"pointer"}   color="#ff6418"><IoIosArrowBack/></Text>
                    </Box>
                <Flex maxW="1200px" overflow={"hidden"}  >
                    <motion.div animate={"swipe"}  style={{display:"flex", gap: "20px"}} custom={swipe.cardInView} variants={variants} >
                        <Image w="200px" fit={"contain"}  src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                        <Image w="200px" fit={"contain"} src={Flat}/>
                    </motion.div>
                </Flex>
                <Box color="#222"  onClick={() => {nextImg(); setStopAnimation(true)}}>
                        <Text fontSize={35} h="80%"  color="#ff6418" cursor={"pointer"}  transform="rotate(180deg)"><IoIosArrowBack/></Text>
                </Box>
             </Flex>
        </>
    )
}