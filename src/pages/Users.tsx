import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import UserListContainer from 'src/container/users/list'

const Users = () => {
  const { pathname } = useLocation()

  return (
    <MainLayout>
      {pathname.includes('list') && <UserListContainer />}
    </MainLayout>
  )
}

export default Users
