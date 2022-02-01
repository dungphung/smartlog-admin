import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import ForumsContainer from 'src/container/Forums/Forums'

const ForumPage = () => {
  const { pathname } = useLocation()

  return (
    <MainLayout>
      <ForumsContainer />
    </MainLayout>
  )
}

export default ForumPage
