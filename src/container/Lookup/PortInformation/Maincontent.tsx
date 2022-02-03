import { Button, Row, Space, Tabs } from 'antd'
import SeaPortInformation from './SeaPortInformation'
import AirPortInformation from './AirPortInformation'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

const MainContent = () => {
  return (
    <div>
      <Row justify="space-between">
        <p className="heading-6">Thông tin Cảng</p>

        <Space>
          <Button className="redButton button-1" type="text">
            Xóa
          </Button>
        </Space>
      </Row>

      <div className="mt16">
        <Space>
          <UploadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">IMPORT</p>
        </Space>
        <Space className="ml16">
          <DownloadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">Export</p>
        </Space>
      </div>
      <div className="customContent">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane
            tab={
              <span style={{ fontWeight: 'bold' }}>Thông tin Cảng biển</span>
            }
            key="1"
          >
            <SeaPortInformation />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: 'bold' }}>
                Thông tin Cảng hàng không
              </span>
            }
            key="2"
          >
            <AirPortInformation />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default MainContent
