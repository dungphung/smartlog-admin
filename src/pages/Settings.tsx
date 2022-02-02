import { Col, Menu, Row } from 'antd'
import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import ContactContainer from 'src/container/Setting/Contact'
import AccountInfo from 'src/container/Setting/AccountInfo'
const Settings = () => {
  const { pathname } = useLocation()
  return (
    <MainLayout>
      {pathname.includes('account') && <AccountInfo />}
      {pathname.includes('contact') && <ContactContainer />}
    </MainLayout>
  )
}

export default Settings
