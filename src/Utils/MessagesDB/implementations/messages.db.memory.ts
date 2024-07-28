import { MessageProps } from "../../../Components/AddMessage";
import { MessagesDB } from "../interfaces/inMemory/messages.db.interface";



export class MessagesMemoryDB implements MessagesDB {

    messages: MessageProps[] = []

    async add(message: MessageProps): Promise<void> {
        this.messages.push(message)
        console.log(this.messages   )
    }
    async getMessages(): Promise<MessageProps[]> {
        return  this.messages
    }
}