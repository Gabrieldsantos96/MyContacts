import { categoriesMock } from './categories'

export const contactsMock = [
  {
    id: '1',
    name: 'Nome do Contato 1',
    email: 'contato1@example.com',
    phone: '123-456-7890',
    category_id: categoriesMock[0].id,
    category_name: categoriesMock[0].name
  },
  {
    id: '2',
    name: 'Nome do Contato 2',
    email: 'contato2@example.com',
    category_id: categoriesMock[0].id,
    category_name: categoriesMock[0].name
  },
  {
    id: '3',
    name: 'Nome do Contato 3',
    phone: '987-654-3210',
    category_id: categoriesMock[0].id,
    category_name: categoriesMock[0].name
  },
  {
    id: '4',
    name: 'Nome do Contato 3',
    category_id: categoriesMock[0].id,
    category_name: categoriesMock[0].name
  }
]
