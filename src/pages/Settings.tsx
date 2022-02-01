import { Col, Menu, Row } from 'antd'
import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import ContactContainer from 'src/container/Setting/Contact'
const Settings = () => {
  const { pathname } = useLocation()
  return (
    <MainLayout>
      {pathname.includes('contact') && <ContactContainer />}
    </MainLayout>
  )
}

export default Settings
