/* v8 ignore next 3 */
import { ContactEntity } from '@interfaces/Contact'
import { API } from '@utils/config/api'
import { AxiosInstance } from 'axios'

export class ContactsService {
  main: AxiosInstance

  constructor(api) {
    const { axios } = api
    this.main = axios
  }

  async listContacts(orderBy = 'asc') {
    return await this.main.get(`/contacts?orderBy=${orderBy}`)
  }

  async getContactById(id: string) {
    return await this.main.get(`/contacts/${id}`)
  }

  async saveContact(contact: Omit<ContactEntity, 'category_name'>) {
    if (!contact?.id) {
      return await this.main.post(`/contacts`, contact)
    }
    return await this.main.put(`/contacts/${contact.id}`, contact)
  }

  async deleteContact(id: string) {
    return await this.main.delete(`/contacts/${id}`)
  }
}

export default new ContactsService(API)
