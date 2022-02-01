import { Tabs } from 'antd'
import { useParams, useMatch, useLocation } from 'react-router-dom'

import MainLayout from 'src/components/MainLayout'

import AboutPartner from 'src/container/Intro/AboutPartner'
import AboutUs from 'src/container/Intro/AboutUs'
import MainContent from 'src/container/Lookup/ShippingInformation/MainContent'
import { navigation as lookupNavigation } from 'src/constants/look-up'
const { TabPane } = Tabs

const Lookup = () => {
  const params = useParams()
  const location = useLocation()

  return (
    <MainLayout>
      {location.pathname.includes(lookupNavigation.SHIPPING_INFORMATION) && (
        <MainContent />
      )}
    </MainLayout>
  )
}

export default Lookup
