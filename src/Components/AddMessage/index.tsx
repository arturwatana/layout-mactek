import { Button, Flex, Heading, Input, Textarea } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { messagesDBMemory } from "../../Utils/MessagesDB";
import { toast } from "react-toastify";
import lodash from "lodash"
import dayjs from "dayjs";
import { useIsMedium } from "../../Utils/MediaQuery";

type AddMessageProps = {
    setAddMessage: React.Dispatch<React.SetStateAction<boolean>>,
    setUpdateScreen: React.Dispatch<React.SetStateAction<boolean>>,
    messageToEdit?: MessageProps | null
}

export type MessageProps = {
    id?: string
    title: string
    message: string
    startDate: string
    endDate: string
    isActive?: boolean
}

export default function AddMessage({ setAddMessage, messageToEdit, setUpdateScreen }: AddMessageProps) {
    const [visualization, setVisualization] = useState<boolean>(false)
    const isMedium = useIsMedium()
    const [message, setMessage] = useState<MessageProps>({
        title: "",
        message: "",
        startDate: "",
        endDate: "",
    });
    const animations = {
        render: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .3,
            }
        },
    }

    useEffect(() => {
        if (messageToEdit) {
            setMessage(messageToEdit)
            setVisualization(true)
        } else {
            setMessage({
                title: "",
                message: "",
                startDate: "",
                endDate: "",
            })
        }
    }, [])

    function edit() {
        if (visualization) {
            setVisualization(false)
        }
    }

    function validateMessageProps(message: MessageProps) {
        if (!message.title || !message.message || !message.startDate || !message.endDate) {
            throw new Error("Faltaram informacoes")
        }
        if(dayjs(message.startDate).isAfter(message.endDate)){
            throw new Error("A data de termino não pode ser menor que a de inicio")
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if(messageToEdit){
            if(lodash.isEqual(messageToEdit, message)){
                toast.error("Ops, alguma alteração deve ser feita")
                return
            }
            try {
                validateMessageProps(message)
                await messagesDBMemory.editMessage(message.id || "", message)
                toast.success("Mensagem editada com sucesso")
                setAddMessage(false) 
                setUpdateScreen(true)
            } catch (err: any) {
                toast.error(err.message)
            }
        } else {
            try {
                validateMessageProps(message)
                await messagesDBMemory.add(message)
                toast.success("Mensagem adicionada com sucesso")
                setAddMessage(false) 
                setUpdateScreen(true)
            } catch (err: any) {
                toast.error(err.message)
            }

        }
    }

    return (
        <>
            <Flex position="fixed" w="100%" h="100%" justifyContent="end" alignItems="center" zIndex={3000}>
                <motion.div onClick={() => setAddMessage(false)} style={{ width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.8)", position: "absolute", zIndex: 3001 }}>
                </motion.div>
                <motion.div style={{ background: "#fff", height: "100vh", width: isMedium ? "75vw" : "35vw", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 3003 }} initial={{ x: 350, opacity: 0 }} animate="render" variants={animations}>
                    <Flex flexDir="column" alignItems="center" h="70%" w="80%" gap="10px" onClick={edit}>
                        <Heading  >{messageToEdit ? "Editar Mensagem" : "Adicionar Mensagem"} </Heading>
                        <motion.form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                            <motion.label htmlFor="title">Titulo:</motion.label>
                            <Input
                                id="title"
                                disabled={visualization}
                                value={message?.title}
                                onChange={(e) => setMessage((prev) => ({
                                    ...prev,
                                    title: e.target.value || "",
                                    message: prev?.message ?? "",
                                    startDate: prev?.startDate ?? "",
                                    endDate: prev?.endDate ?? "",
                                }))}
                            />
                            <motion.label htmlFor="startDate">Data de inicio:</motion.label>
                            <Input
                                id="startDate"
                                value={message?.startDate}
                                disabled={visualization}
                                type="date"
                                onChange={(e) => setMessage((prev) => ({
                                    ...prev,
                                    title: prev?.title || "",
                                    message: prev?.message ?? "",
                                    startDate: e.target.value ?? "",
                                    endDate: prev?.endDate ?? "",
                                }))}
                            />
                            <motion.label htmlFor="endDate">Data de termino:</motion.label>
                            <Input
                                id="endDate"
                                disabled={visualization}
                                value={message?.endDate}
                                type="date"
                                onChange={(e) => setMessage((prev) => ({
                                    ...prev,
                                    title: prev?.title || "",
                                    message: prev?.message ?? "",
                                    startDate: prev?.startDate ?? "",
                                    endDate: e.target.value ?? "",
                                }))}
                            />
                            <motion.label htmlFor="message">Mensagem:</motion.label>
                            <Textarea
                                id="message"
                                disabled={visualization}
                                value={message?.message}
                                onChange={(e) => setMessage((prev) => ({
                                    ...prev,
                                    title: prev?.title || "",
                                    message: e.target.value ?? "",
                                    startDate: prev?.startDate ?? "",
                                    endDate: prev?.endDate ?? "",
                                }))}
                            />
                            <Flex gap="20px" >
                            <motion.label htmlFor="isActive" style={{fontWeight: 500}}>Ativa:</motion.label>
                            <motion.input
                                id="isActive"
                                disabled={visualization}
                                type="checkbox"
                                onChange={(e) => setMessage((prev) => ({
                                    ...prev,
                                    title: prev?.title || "",
                                    message: prev?.message ?? "",
                                    startDate: prev?.startDate ?? "",
                                    endDate: prev?.endDate ?? "",
                                    isActive: e.target.checked
                                }))}
                                checked={message.isActive}
                            />

                            </Flex>
                            <Button isDisabled={visualization} background="rgb(251, 196, 49)" type="button" _hover={{ background: "rgba(251, 196, 49, 0.7)" }} onClick={(e) => { handleSubmit(e)}}>{messageToEdit ? "Editar" : "Adicionar"}</Button>
                        </motion.form>
                    </Flex>
                </motion.div>
            </Flex>
        </>
    )
}