import { MessageProps } from "../../../Components/AddMessage";
import { IMessagesDB } from "../interfaces/inMemory/messages.db.interface";
import axios from "axios"



export class MessagesAPIDB implements IMessagesDB{

    async add(message: MessageProps): Promise<void> {
        try{
           await axios.post("http://localhost:3030/messages", message)
        } catch(err: any) {
            throw new Error("Ops, algo deu errado") 
        }

    }
    async getMessages(): Promise<MessageProps[]> {
        const req = await axios.get("http://localhost:3030/messages")
        return req.data
    }

    async editMessage(messageId: string, message: MessageProps): Promise<void> {
         try{
            await axios.post(`http://localhost:3030/messages/${messageId}`, message)
         } catch(err: any) {
             throw new Error(err.message) 
         }
    }

    async getTodaysMessage(): Promise<MessageProps> {
        try{
            const req = await axios.get(`http://localhost:3030/messages/today`)
            return req.data
         } catch(err: any) {
             throw new Error(err.message) 
         }
    }


}
