import { Button, Row, Space, Tabs } from 'antd'
import LookupAirline from './LookupAirline'
import LookupShipping from './LookupShipping'
import AddShippingModal from './AddShipping'
import { useState } from 'react'
const { TabPane } = Tabs

const MainContent = () => {
  const [visibleAddShippingModal, setVisibleAddShippingModal] = useState(false)
  return (
    <div>
      <Row justify="space-between">
        <p className="heading-6">Thông tin vận chuyển</p>

        <Space>
          <Button
            className="redButton button-1"
            onClick={() => {
              setVisibleAddShippingModal(true)
            }}
          >
            Thêm
          </Button>
          <Button className="button-1" type="text">
            Xóa
          </Button>
        </Space>
      </Row>
      <div className="customContent">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane
            tab={<span style={{ fontWeight: 'bold' }}>Tra cứu hãng tàu</span>}
            key="1"
          >
            <LookupShipping />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: 'bold' }}>
                Tra cứu hãng hàng không
              </span>
            }
            key="2"
          >
            <LookupAirline />
          </TabPane>
        </Tabs>
      </div>
      <AddShippingModal
        visible={visibleAddShippingModal}
        onCancel={() => {
          setVisibleAddShippingModal(false)
        }}
      />
    </div>
  )
}

export default MainContent
