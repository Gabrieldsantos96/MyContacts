/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  useQuery,
  useMutation,
  UseQueryResult,
  UseMutationOptions,
  UseMutationResult
} from 'react-query'
import { queryClient } from '../lib/queryClient'
import { showToast } from '@utils/helpers/toastEventManager'
import ContactsService from '../services/ContactsService'
import { ContactEntity } from '@interfaces/Contact'
import delay from '@utils/helpers/delay'

const CONTACTS_KEY = 'contacts'

async function listContacts(filters: string) {
  await delay(1000)
  const response = await ContactsService.listContacts(filters)
  return response.data
}

export function useContacts(filters: string): UseQueryResult<ContactEntity[]> {
  return useQuery({
    queryKey: [CONTACTS_KEY, filters],
    queryFn: () => listContacts(filters),
    retry: false,
    refetchOnWindowFocus: false,
    onError: () =>
      showToast({
        type: 'danger',
        text: 'Erro de servidor interno!'
      })
  })
}

type useDeleteParams = {
  id: string
}

async function deleteContact(id: string) {
  await delay(1000)
  const response = await ContactsService.deleteContact(id)
  return response.data
}

export function useDeleteContact(
  options?: UseMutationOptions<unknown, unknown, useDeleteParams>
): UseMutationResult<unknown, unknown, useDeleteParams> {
  return useMutation<unknown, unknown, useDeleteParams>({
    mutationKey: [CONTACTS_KEY],
    mutationFn: async (params: { id: string }) =>
      await deleteContact(params.id),
    retry: 0,
    onSuccess: () => {
      queryClient.invalidateQueries([CONTACTS_KEY])
      showToast({
        type: 'success',
        text: 'Contato foi deletado com sucesso!'
      })
    },
    onError: () =>
      showToast({
        type: 'danger',
        text: 'Não foi possível excluir o contato!'
      })
  })
}
