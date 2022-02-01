import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import UserListContainer from 'src/container/users/list'
import UserNotification from 'src/container/users/UserNotification'
const Users = () => {
  const { pathname } = useLocation()

  return (
    <MainLayout>
      {pathname.includes('manager') && <UserListContainer />}
      {pathname.includes('notification') && <UserNotification />}
    </MainLayout>
  )
}

export default Users
