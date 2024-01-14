import { UseQueryResult, useQuery } from 'react-query'
import CategoriesService from '@services/CategoriesService'
import { showToast } from '@utils/helpers/toastEventManager'
import { CategoryEntity } from '@interfaces/Category'
import delay from '@utils/helpers/delay'

const USE_CATEGORY_KEY = 'categories'

async function listCategories() {
  await delay(1000)
  const response = await CategoriesService.listCategories()
  return response.data
}

export function useCategories(): UseQueryResult<CategoryEntity[]> {
  return useQuery({
    queryKey: [USE_CATEGORY_KEY],
    queryFn: () => listCategories(),
    retry: false,
    refetchOnWindowFocus: false,
    onError: () =>
      showToast({
        type: 'danger',
        text: 'Erro de servidor interno!'
      })
  })
}
