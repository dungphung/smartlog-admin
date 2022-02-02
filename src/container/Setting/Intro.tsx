import { Tabs } from 'antd'
import AboutUsPanel from './component/AboutUsPanel'
import ClientPanel from './component/Client'
const { TabPane } = Tabs

const InfoContainer = () => {
  return (
    <div>
      <p className="heading-6">Giới thiệu</p>
      <div className="customContent mt16">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Về chúng tôi" key="1">
            <AboutUsPanel />
          </TabPane>
          <TabPane tab="Về đối tác" key="2">
            <ClientPanel />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default InfoContainer
