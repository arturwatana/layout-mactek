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
import { contactsRepository } from '../../Utils/ContactsDB';
  
  type ModalProps = {
    isOpen: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    email?: string
  }
  
  export type ContactProps = {
    name: string
    enterprise?: string
    email: string
    message: string
  }
  
  export default function ModalContact({ isOpen, setOpenModal }: ModalProps) {
    const [contact, setContact] = useState<ContactProps | null>(null)
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    const [email, setEmail] = useState<string>("")
    const handleSubmit = async (e:any) => {
      e.preventDefault()
      setContact({
        email: e.target.email.value,
        enterprise: e.target.enterprise.value,
        name: e.target.name.value,
        message: e.target.message.value
      })
      if(!contact){
        return
      }
      await contactsRepository.add(contact)
      toast.success(`Obrigado ${e.target.name.value.split(" ")[0]}! Nosso time entrara em contato`)
      close()
  }
  
  function close(){
    setOpenModal(false)
  }
  
  useEffect(() => {
    if(!contact) return 
  }, [])

  
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={close}
        >
          <ModalOverlay />
          <ModalContent w={"90%"}>
            <ModalHeader>{"Solicite uma demo"}</ModalHeader>
              <chakra.form onSubmit={handleSubmit}>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl >
                <FormLabel>{"Nome"}</FormLabel>
                <Input  placeholder={"Digite seu nome"}  id="name" />
                <FormLabel mt={3}>{"Empresa"}</FormLabel>
                <Input placeholder={"Empresa"}  id="enterprise"   />
                <FormLabel mt={3}>Email</FormLabel>
                <Input onChange={((e:any) => setEmail(e.target.value))}   placeholder='Email' id="email"  type='email' />
                <FormLabel mt={3} >{"Mensagem"}</FormLabel>
                <Textarea  placeholder={"Digite uma mensagem"} id="message" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button  isDisabled={!emailRegex.test(email)} background='#FFB800' mr={3} type='submit'>
              Submit
              </Button>
              <Button onClick={close}>Cancelar</Button>
            </ModalFooter>
              </chakra.form>
          </ModalContent>
        </Modal>
      </>
    )
  }