import { Button, Row, Space, Tabs } from 'antd'
import LookupAirline from './LookupAirline'
import LookupSeaPort from './LookupSeaPort'

const { TabPane } = Tabs

const MainContent = () => {
  return (
    <div>
      <Row justify="space-between">
        <p className="heading-6">Thông tin vận chuyển</p>

        <Space>
          <Button>Thêm</Button>
          <Button>Xóa</Button>
        </Space>
      </Row>
      <div className="customContent">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Tra cứu hãng tàu" key="1">
            <LookupSeaPort />
          </TabPane>
          <TabPane tab="Tra cứu hãng hàng không" key="2">
            <LookupAirline />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default MainContent
