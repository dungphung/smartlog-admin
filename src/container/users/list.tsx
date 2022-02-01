import {
  DownloadOutlined,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Row, Space, Table, Tabs, Col, Input, Select, Form, Button } from 'antd'
import { useMemo, useState, useCallback } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import EditUserPermission from './EditPermissionDrawer'
import styles from './list.module.less'

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
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })
  const [form] = Form.useForm()
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const [visibleModalEditUserPermission, setVisibleModalEditUserPermission] =
    useState(false)

  const columns = useMemo(
    () => [
      {
        title: '',
        key: 'operation',

        render: () => (
          <a>
            <EditOutlined
              onClick={() => setVisibleModalEditUserPermission(true)}
            />
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
        title: 'Ngày truy cập gần nhất',
        dataIndex: 'date',
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

  const onFinish = useCallback((values) => {}, [])

  return (
    <div className={styles.container}>
      <Row gutter={24} justify="space-between">
        <Col xs={24} lg={12}>
          <p className="heading-6">Người dùng</p>
        </Col>
        <Col xs={24} lg={12}>
          <Row justify="end">
            <Button className="redButton">Chỉnh sửa</Button>
          </Row>
        </Col>
      </Row>

      <div className="mt16">
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
              defaultValue={keyword}
              value={keyword}
              onChange={(e) => {
                setParams({ keyword: e.target.value })
              }}
            />
          </Col>

          <Col xs={6}>
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
              onChange={(e) => {
                setParams({ order: e })
              }}
            >
              <Select.Option value="1">Mới nhất</Select.Option>
              <Select.Option value="2">Cũ nhất</Select.Option>
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
          pagination={{
            pageSize,
            current: pageIndex,
            total: 85,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </div>
      <EditUserPermission
        visible={visibleModalEditUserPermission}
        onClose={() => setVisibleModalEditUserPermission(false)}
      />
    </div>
  )
}

export default ListRequest
