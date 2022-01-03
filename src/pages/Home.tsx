import { Tabs } from 'antd'

import MainLayout from 'src/components/MainLayout'

import HomeContentTab from 'src/container/Home/Content'
import AboutUs from 'src/container/Home/AboutUs'
import HightLightNews from 'src/container/Home/HightLightNews'
import HightLightPost from 'src/container/Home/HightLightPost'

const { TabPane } = Tabs

const HomePage = () => {
  return (
    <MainLayout>
      <p className="heading-6">Trang chủ</p>
      <div className="customContent">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Nội dung tiêu đề" key="1">
            <HomeContentTab />
          </TabPane>
          <TabPane tab="Về chúng tôi" key="2">
            <AboutUs />
          </TabPane>
          <TabPane tab="Tin tức đề cử" key="3">
            <HightLightNews />
          </TabPane>
          <TabPane tab="Các bài viết nổi bật" key="4">
            <HightLightPost />
          </TabPane>
        </Tabs>
      </div>
    </MainLayout>
  )
}

export default HomePage
