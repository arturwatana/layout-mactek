import { RxArrowTopLeft } from "react-icons/rx";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useIsMedium } from "../../Utils/MediaQuery";

// const ScrollToTopContainer = styled.div<{ $theme: string }>`
//   width: 4em;
//   height: 4em;
//   position: fixed;
//   top: 85%;
//   left: 95%;
//   background-color: ${(props) => (props.$theme === "dark" ? "#fff" : "#222")};
//   color: ${(props) => (props.$theme === "dark" ? "#222" : "#fff")};
//   border-radius: 2em;
//   animation: RenderBtn 1s linear forwards;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: 0.2s;
//   cursor: pointer;
//   @keyframes RenderBtn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
//   :hover {
//     transform: scale(1.2);
//   }
//   @media (max-width: 1350px) {
//     left: 90%;
//   }
//   @media (max-width: 700px) {
//     left: 85%;
//     width: 3em;
//     height: 3em;
//   }

//   svg {
//     font-size: 30px;
//     transform: rotate(45deg);
//   }
// `;

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
        <motion.div onClick={scrollToTop} initial={{ opacity: 0, display: "none" }} animate={dismont ? "dismont" : render ? "render" : ""} variants={variants} style={{ width: "3em", height: "3em", position: "fixed", top: "85%", left: isMedium ? "85%" : "95%", zIndex: 5000, background: "#FBC431", borderRadius: "20px" }} >
            <Flex transform={"rotate(45deg)"} h="100%" justifyContent={"center"} alignItems={"center"} w={"100%"}>
                <RxArrowTopLeft fontSize={"30px"} />

            </Flex>
        </motion.div >
    );
}