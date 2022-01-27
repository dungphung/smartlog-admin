import { Tabs } from 'antd'
import { useParams, useMatch, useLocation } from 'react-router-dom'

import MainLayout from 'src/components/MainLayout'

import AboutPartner from 'src/container/Intro/AboutPartner'
import AboutUs from 'src/container/Intro/AboutUs'
import MainContent from 'src/container/Lookup/ShippingInformation/MainContent'

const { TabPane } = Tabs

const Lookup = () => {
  const params = useParams()
  const location = useLocation()

  console.log(location)

  return (
    <MainLayout>
      {location.pathname.includes('shipping-information') && <MainContent />}
    </MainLayout>
  )
}

export default Lookup
