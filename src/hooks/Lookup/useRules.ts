import { API } from 'src/services/api'
import { useQuery } from 'react-query'

const useRules = (variables) => {
  const { data, isLoading, refetch } = useQuery<any>(
    ['getPostListNew', variables],
    async () => {
      return await API.getListRules(variables)
    },
  )

  return {
    data: data || [],
    loading: isLoading,
    refetch,
  }
}

export default useRules
