import { useMutation } from 'react-query'
import { useCallback, useEffect, useState } from 'react'
import { API } from 'src/services/api'

const usePartners = () => {
  const { mutateAsync, isLoading, data } = useMutation<any>(
    (variables) => API.getPartnerListCompany(variables),
    {
      retry: 3,
    },
  )

  const getPartnerListCompany = useCallback(
    async (variables): Promise<void> => {
      await mutateAsync(variables)
    },
    [mutateAsync],
  )

  return {
    loading: isLoading,
    getPartnerListCompany,
    data: data?.data ?? [],
    totalItem: data?.total ?? 0,
  }
}

export default usePartners
