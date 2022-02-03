import { useMutation } from 'react-query'
import { API } from 'src/services/api'
import { useCallback } from 'react'

const useShipping = () => {
  const { mutateAsync, isLoading, data } = useMutation<any>(
    (variables) => API.getPortList(variables),
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
    loading: isLoading,
    getData,
    data: data?.data ?? [],
    totalItem: data?.total,
  }
}

export default useShipping
