import { useMutation } from 'react-query'
import { API } from 'src/services/api'
import { useCallback } from 'react'

interface IVariables {
  pageSize: number
  pageIndex: number
  orders?: object
  filters?: object
  categoryCode: string
  keySearch?: 'string'
  locationType?: string
  sourceCodes: ['string']
  fromDate?: string
  toDate?: string
}

const useForums = () => {
  const { mutateAsync, isLoading, data } = useMutation<any>(
    (variables: any) => API.getListNewsByCategory(variables),
    {
      retry: 3,
    },
  )

  const getData = useCallback(
    async (variables): Promise<void> => {
      await mutateAsync(variables)
    },
    [mutateAsync],
  )

  return {
    isLoading,
    getData,
    data: data?.data ?? [],
    totalItem: data?.total,
  }
}

export default useForums
