import {
  DownloadOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Row, Space, Table, Tabs, Col, Input, Select } from 'antd'

const { TabPane } = Tabs

const { Option } = Select

const UserAdd = () => {
  return (
    <div>
      <div className="customContent mt16">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Tài khoản" key="1"></TabPane>
          <TabPane tab="Thông tin" key="2"></TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default UserAdd
