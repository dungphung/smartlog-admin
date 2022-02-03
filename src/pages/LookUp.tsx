import { Tabs } from 'antd'
import { useParams, useMatch, useLocation } from 'react-router-dom'

import MainLayout from 'src/components/MainLayout'

import ShippingInformation from 'src/container/Lookup/ShippingInformation/MainContent'
import PortInformation from 'src/container/Lookup/PortInformation/Maincontent'
import LogisticContainer from 'src/container/Lookup/Logistic'
import RulesContainer from 'src/container/Lookup/Rules'
import UsefulLinksContainer from 'src/container/Lookup/UsefulLinks'

import { navigation as lookupNavigation } from 'src/constants/look-up'

const Lookup = () => {
  const params = useParams()
  const location = useLocation()

  return (
    <MainLayout>
      {location.pathname.includes(lookupNavigation.SHIPPING_INFORMATION) && (
        <ShippingInformation />
      )}

      {location.pathname.includes(lookupNavigation.PORT_INFORMATION) && (
        <PortInformation />
      )}

      {location.pathname.includes(lookupNavigation.LOGISTIC) && (
        <LogisticContainer />
      )}

      {location.pathname.includes(lookupNavigation.RULES) && <RulesContainer />}

      {location.pathname.includes(lookupNavigation.USEFUL_LINKS) && (
        <UsefulLinksContainer />
      )}
    </MainLayout>
  )
}

export default Lookup
