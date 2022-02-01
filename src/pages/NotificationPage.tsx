import { useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import DraftContainer from 'src/container/Notification/Draft'
import PostedContainer from 'src/container/Notification/Posted'

const NotificationPage = () => {
  const { pathname } = useLocation()

  return (
    <MainLayout>
      {pathname.includes('posted') && <PostedContainer />}
      {pathname.includes('draft') && <DraftContainer />}
    </MainLayout>
  )
}

export default NotificationPage
