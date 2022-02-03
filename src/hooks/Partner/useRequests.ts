import { useCallback, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { API } from 'src/services/api'

interface IRequestListVariables {
  pageSize: number
  pageIndex: number
  orders?: object
  filters?: object
  keySearch?: string
  locationType?: string
  requestType?: string
  fromDate?: string
  toDate?: string
}

const useRequests = () => {
  const { mutateAsync, isLoading, data } = useMutation<any>(
    (variables) => API.getPartnerRequestList(variables),
    {
      retry: 3,
    },
  )

  const getRequest = useCallback(
    async (variables): Promise<void> => {
      await mutateAsync(variables)
    },
    [mutateAsync],
  )

  return {
    isLoading,
    getRequest,
    data: data?.data ?? [],
    totalItem: data?.total ?? 0,
  }
}

export default useRequests
