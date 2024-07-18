import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    chakra,
    Textarea
  } from '@chakra-ui/react'
  import {  useEffect, useState } from 'react'
  import { toast } from 'react-toastify';
import Translator from '../../Utils/Translator';
  
  type ModalProps = {
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    email?: string
  }
  
  type ContactProps = {
    name: string
    enterprise: string
    email: string
    message?: string
  }
  
  export default function ModalContact({ isOpen, setOpenModal, email }: ModalProps) {
    const [contact, setContact] = useState<ContactProps>({
      email: "",
      enterprise: "",
      name: "",
      message:  ""
    })
  
    const handleSubmit = (e:any) => {
      e.preventDefault()
      setContact({
        email: e.target.email.value,
        enterprise: e.target.enterprise.value,
        name: e.target.name.value,
        message: e.target.message.value
      })
      toast.success(`Obrigado ${e.target.name.value.split(" ")[0]}! Nosso time entrara em contato`)
  }
  
  function close(){
    setOpenModal(false)
  }
  
  useEffect(() => {
    console.log(contact) 
  })
  
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={close}
        >
          <ModalOverlay />
          <ModalContent w={"90%"}>
            <ModalHeader>{Translator("modal.tittle")}</ModalHeader>
              <chakra.form onSubmit={handleSubmit}>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <FormLabel>{Translator("modal.name")}</FormLabel>
                <Input  placeholder={Translator("modal.name")}  id="name" />
                <FormLabel mt={3}>{Translator("modal.empresa")}</FormLabel>
                <Input placeholder={Translator("modal.empresa")}  id="enterprise"   />
                <FormLabel  mt={3}>Email</FormLabel>
                <Input value={email ? email : ""}  placeholder='Email' id="email"  type='email' />
                <FormLabel mt={3} >{Translator("modal.message")}</FormLabel>
                <Textarea  placeholder={Translator("modal.message")} id="message" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button background='#FFB800' mr={3} type='submit'>
              {Translator("modal.text2")}
              </Button>
              <Button onClick={close}>{Translator("modal.cancel")}</Button>
            </ModalFooter>
              </chakra.form>
          </ModalContent>
        </Modal>
      </>
    )
  }