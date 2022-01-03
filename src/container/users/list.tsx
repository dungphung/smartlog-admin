import {
  DownloadOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Row, Space, Table, Tabs, Col, Input, Select } from 'antd'
import { useState } from 'react'

const { TabPane } = Tabs

const { Option } = Select

const columns = [
  {
    title: 'ID',
    dataIndex: 'name',
  },
  {
    title: 'Role',
    dataIndex: 'age',
  },
  {
    title: 'Tài khoản',
    dataIndex: 'address',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'address',
  },
  {
    title: 'Công ty',
    dataIndex: 'address',
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

const ListRequest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  return (
    <div>
      <p className="heading-6">Người dùng</p>

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
      <div className="customContent mt16">
        <Tabs defaultActiveKey="1" onChange={() => {}}>
          <TabPane tab="Tất cả" key="1"></TabPane>
          <TabPane tab="Accept marketing Chấp nhận tiếp thị" key="2">
            <Row gutter={24} justify="space-between">
              <Col xs={16}>
                <Input
                  size="large"
                  placeholder="large size"
                  prefix={<SearchOutlined />}
                />
              </Col>
              <Col xs={7}>
                <Select
                  size="large"
                  defaultValue="lucy"
                  style={{ width: '100%' }}
                  onChange={() => {}}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Col>
            </Row>
            <Table
              className="mt32"
              rowSelection={{
                selectedRowKeys,
                onChange: (selectedRowKeys) =>
                  setSelectedRowKeys(selectedRowKeys),
              }}
              columns={columns}
              dataSource={data}
            />
          </TabPane>
          <TabPane tab="Returning" key="3"></TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ListRequest
