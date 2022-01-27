import {
  DownloadOutlined,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Row, Space, Table, Tabs, Col, Input, Select } from 'antd'
import { useMemo, useState } from 'react'
import EditStatusDrawer from './EditStatusDrawer'

const STATUS_INFO = {
  '0': {
    title: 'Active',
    color: '#00703C',
  },
  '1': {
    title: 'Passive',
    color: '#9DDAF4',
  },
  '2': {
    title: 'Reopen',
    color: '#FFB800',
  },
  '3': {
    title: 'Block',
    color: '#D4351C',
  },
  '4': {
    title: 'Xóa',
    color: '#DBDBDB',
  },
}

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i + 1,
    status: Math.floor(Math.random() * 5),
    account: 'Quyen Thai',
    email: 'quyen.thai@example.com',
    phone: '0938 545 272',
    date: '06/10/2021 10:42 GMT+7',
    company: 'Công ty cổ phần giải pháp chuỗi cung ứng Smartlog',
  })
}

const ListRequest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isVisibleModalEditStatus, setIsVisibleModalEditStatus] =
    useState(false)

  const columns = useMemo(
    () => [
      {
        title: '',
        key: 'operation',

        render: () => (
          <a>
            <EditOutlined />
          </a>
        ),
      },
      {
        title: 'ID',
        dataIndex: 'id',
      },

      {
        title: 'Trạng thái',
        dataIndex: 'status',
        width: '7%',
        render: (status, row) => {
          return (
            <div
              onClick={() => setIsVisibleModalEditStatus(true)}
              className="text-body-2 cursor"
              style={{
                background: STATUS_INFO[status].color,
                color: 'white',
                borderRadius: 2,
                textAlign: 'center',
                textDecoration: status === 4 ? 'line-through' : 'normal',
              }}
            >
              {STATUS_INFO[status].title}
            </div>
          )
        },
      },
      {
        title: 'Tài khoản',
        dataIndex: 'account',
      },
      {
        title: 'Số điện thoại',
        dataIndex: 'phone',
      },
      {
        title: 'Ngày đăng ký',
        dataIndex: 'date',
      },
      {
        title: 'Công ty',
        dataIndex: 'company',
      },
    ],
    [],
  )

  return (
    <div>
      <p className="heading-6">Quản lý Admin</p>

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
        <Row gutter={24} justify="space-between">
          <Col xs={17}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Tìm kiếm khách hàng"
            />
          </Col>

          <Col xs={6}>
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              onChange={() => {}}
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="disabled" disabled>
                Disabled
              </Select.Option>
              <Select.Option value="Yiminghe">yiminghe</Select.Option>
            </Select>
          </Col>
        </Row>
        <Table
          className="mt32"
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
      <EditStatusDrawer
        visible={isVisibleModalEditStatus}
        onClose={() => setIsVisibleModalEditStatus(false)}
      />
    </div>
  )
}

export default ListRequest
