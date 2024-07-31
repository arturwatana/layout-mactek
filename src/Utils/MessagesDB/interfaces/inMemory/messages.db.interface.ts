import { MessageProps } from "../../../../Components/AddMessage";



export interface IMessagesDB {
    add(message: MessageProps): Promise<void>
    getMessages(): Promise<MessageProps[]>
    editMessage(messageId: string, message: MessageProps): Promise<void>
    getTodaysMessage(): Promise<MessageProps>
}