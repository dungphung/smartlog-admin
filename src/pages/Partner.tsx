import { Tabs } from 'antd'

import MainLayout from 'src/components/MainLayout'

import AboutPartner from 'src/container/Intro/AboutPartner'
import AboutUs from 'src/container/Intro/AboutUs'

const { TabPane } = Tabs

const HomePage = () => {
  return (
    <MainLayout>
      <p className="heading-6">Danh sách đối tác</p>
      <div className="customContent">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Về chúng tôi" key="1">
            <AboutUs />
          </TabPane>
          <TabPane tab="Về đối tác" key="2">
            <AboutPartner />
          </TabPane>
        </Tabs>
      </div>
    </MainLayout>
  )
}

export default HomePage
