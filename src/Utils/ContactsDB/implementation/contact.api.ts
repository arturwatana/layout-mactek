import axios from "axios";
import { IContact, IContactRepository } from "../interfaces/contactsdb.interface";




export class ContactsAPIRepository implements IContactRepository{
    async add(contact: IContact): Promise<void> {
        try{
            await axios.post("http://localhost:3030/contacts", contact)
         } catch(err: any) {
             throw new Error("Ops, algo deu errado") 
         }
    }
    async getContacts(): Promise<IContact[]> {
        try{
          return await axios.get("http://localhost:3030/contacts")
         } catch(err: any) {
             throw new Error("Ops, algo deu errado") 
         }
    }

}