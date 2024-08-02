import { Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { motion } from "framer-motion"
import YoungWoman from "../../assets/young-pretty-busy-woman-sitting-alone-conference-room-many-yellow-chairs-scaled.jpg"
import { useState } from "react";
import { ContactProps } from "../MenuContact";
import { contactsRepository } from "../../Utils/ContactsDB";
import { toast } from "react-toastify";



export default function Form(){

    const [contact, setContact] = useState<ContactProps | null>(null)
  
    const handleSubmit = async (e:any) => {
      e.preventDefault()
      setContact({
        email: e.target.email.value,
        enterprise: "",
        name: e.target.name.value,
        message: e.target.message.value
      })
      if(!contact){
        return
      }
      await contactsRepository.add(contact)
      toast.success(`Obrigado ${e.target.name.value.split(" ")[0]}! Nosso time entrara em contato`)
      resetValues(e)
      
  }

  function resetValues(e:any){
    e.target.email.value = "",
    e.target.name.value = "",
    e.target.message.value = ""
  }
    return (
        <Flex w="100%" scrollMarginTop={"127px"} id="fifthSection" minH="70vh" h="100%" zIndex={500} justifyContent={"center"} position={"relative"}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", width: "100%", minHeight: "70vh", height: "100%", position: "absolute", zIndex: 90 }} />
        <Image position={"absolute"} src={YoungWoman} w="100vw" height={"100%"} minH={"70vh"} backgroundRepeat={"no-repeat"} objectFit={"cover"} objectPosition={"50% 50%"} />
        <Flex maxW="1260px" w="100%" justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <Flex zIndex={900} w={{ sm: "90%", lg: "80%" }} alignItems={"center"} flexDir={"column"} gap="46px" p="110px 0" >
            <Heading fontSize={"36px"} fontWeight={400} color={"rgba(255,255,255,0.8)"}>Mantenha contato com nossa equipe</Heading>
            <motion.form onSubmit={handleSubmit} style={{ display: "flex", gap: "15px", flexDirection: "column", width: "100%", alignItems: "center" }}>
              <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} id="name"  placeholder="Your Name (required)" />
              <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} id="email" placeholder="Your Name (required)" />
              <Input background={"rgba(255, 255, 255, 0.2)"} color={"rgba(255,255,255,0.8)"} id="message" height={"120px"} />
              <Button type="submit" fontSize={"15px"} h="40px" w={{ sm: "55%", lg: "15%" }} fontWeight={500} _hover={{ color: "rgba(255,255,255,0.8)", background: "#C89C27" }} p={"0 18px"} background={"#FBC431"} color={"rgba(255,255,255,0.8)"}>Submit</Button>
            </motion.form>
          </Flex>
        </Flex>
      </Flex>
    )
}