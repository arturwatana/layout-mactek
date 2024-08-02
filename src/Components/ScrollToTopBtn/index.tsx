import { RxArrowTopLeft } from "react-icons/rx";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useIsMedium } from "../../Utils/MediaQuery";

type FixedScrollBtnProps = {
    dismont: boolean
    render: boolean
}


export default function ScrollToTopBtn({ dismont, render }: FixedScrollBtnProps) {
    const isMedium = useIsMedium()
    const variants = {
        dismont: {
            opacity: 0,
            display: "none"
        },
        render: {
            opacity: 1,
            display: "flex"
        },
        translate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2 + (i / 6),
                duration: 1
            }
        }),
        show: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.1
            }
        },
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <motion.div onClick={scrollToTop} initial={{ opacity: 0, display: "none" }} animate={dismont ? "dismont" : render ? "render" : ""} variants={variants} style={{cursor:"pointer", width: "3em", height: "3em", position: "fixed", top: "85%", left: isMedium ? "85%" : "95%", zIndex: 5000, background: "#FBC431", borderRadius: "20px" }} >
            <Flex transform={"rotate(45deg)"} h="100%" justifyContent={"center"} alignItems={"center"} w={"100%"}>
                <RxArrowTopLeft fontSize={"30px"} />

            </Flex>
        </motion.div >
    );
}