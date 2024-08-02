
export type IContact = {
    name: string
    enterprise?: string
    message: string
    email: string
}

export interface IContactRepository {
    add(contact: IContact): Promise<void>
    getContacts(): Promise<IContact[]>
}