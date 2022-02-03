import { useQuery } from 'react-query'
import { API } from 'src/services/api'

const useUsefulLinks = (variables) => {
  const { data, isLoading, refetch } = useQuery<any>(
    ['useGetUsefulLinks', variables],
    async () => await API.getListUseFulLinks(variables),
  )

  return {
    data: data || [],
    loading: isLoading,
    refetch,
  }
}

export default useUsefulLinks
