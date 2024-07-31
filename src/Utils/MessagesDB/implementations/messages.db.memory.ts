import { MessageProps } from "../../../Components/AddMessage";
import { IMessagesDB } from "../interfaces/inMemory/messages.db.interface";



export class MessagesMemoryDB implements IMessagesDB {


    messages: MessageProps[] = []

    async add(message: MessageProps): Promise<void> {
        this.messages.push(message)
    }
    async getMessages(): Promise<MessageProps[]> {
        return  this.messages
    }

    editMessage(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTodaysMessage(): Promise<MessageProps> {
        throw new Error("Method not implemented.");
    }
}