import { Button, Flex, Heading, Input,  Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { toast, ToastContainer } from "react-toastify";
import { ContentContext } from "../../App";
import { useContext } from "react";

export default function AddMessage() {
    const {  setMessagesDB} = useContext(ContentContext);

    function addMessage(element: any){
        element.preventDefault()
        setMessagesDB(prev => [...prev, {description: element.target.message.value}])
        toast.success("Mensagem adicionada")
    }

    return (
        <>
            <ToastContainer />
                             <Flex h="100%"  w="100%" flexDir={"column"} gap="20px">
                                    <Heading fontSize={"25px"}>Adicionar Mensagem:</Heading>
                                <motion.form style={{display: "flex", flexDirection:"column", gap:"10px", width:"100%"}} onSubmit={(e) => addMessage(e)}>
                                    <motion.label htmlFor="message">Mensagem:</motion.label>
                                    <Textarea id="message"/>
                                    <motion.label htmlFor="startDate">Inicio em:</motion.label>
                                    <Input id="startDate" type="date" w="50%"/>
                                    <motion.label htmlFor="endDate">Termina em:</motion.label>
                                    <Input id="endDate" type="date" w="50%"/>
                                    <Button type="submit"  background='#FFB800'>Submit</Button>
                                </motion.form>
                            </Flex>    
        </>
    )
}