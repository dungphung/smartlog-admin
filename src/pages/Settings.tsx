import { Col, Menu, Row } from 'antd'
import { useNavigate, useRoutes, useMatch, useLocation } from 'react-router-dom'
import MainLayout from 'src/components/MainLayout'
import ContactContainer from 'src/container/Setting/Contact'
import AccountInfo from 'src/container/Setting/AccountInfo'
import Policy from 'src/container/Setting/Policy'
import FooterContainer from 'src/container/Setting/Footer'
import IntroContainer from 'src/container/Setting/Intro'
import Email from 'src/container/Setting/Email'
const Settings = () => {
  const { pathname } = useLocation()
  return (
    <MainLayout>
      {pathname.includes('account') && <AccountInfo />}
      {pathname.includes('email') && <Email />}
      {pathname.includes('contact') && <ContactContainer />}
      {pathname.includes('policy') && <Policy />}
      {pathname.includes('footer') && <FooterContainer />}
      {pathname.includes('intro') && <IntroContainer />}
    </MainLayout>
  )
}

export default Settings
