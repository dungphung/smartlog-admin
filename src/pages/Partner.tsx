import { Tabs } from 'antd'

import MainLayout from 'src/components/MainLayout'

import ListPartner from 'src/container/partner/ListPartner'
import ListRequest from 'src/container/partner/ListRequest'

import { StringParam, useQueryParams, withDefault } from 'use-query-params'
import { TABS as PARTNER_TABS } from 'src/constants/partners'
import { useLocation } from 'react-router-dom'

const { TabPane } = Tabs

const PartnersPage = () => {
  const { pathname } = useLocation()
  const [{ tab }, setQuery] = useQueryParams({
    tab: withDefault(StringParam, PARTNER_TABS.LIST_PARTNER),
  })

  return (
    <MainLayout>
      {pathname.includes('list') && <ListPartner />}
      {pathname.includes('request') && <ListRequest />}
    </MainLayout>
  )
}

export default PartnersPage
