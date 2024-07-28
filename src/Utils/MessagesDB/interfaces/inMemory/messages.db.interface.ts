import { MessageProps } from "../../../../Components/AddMessage";



export interface MessagesDB {
    add(message: MessageProps): Promise<void>
    getMessages(): Promise<MessageProps[]>
}