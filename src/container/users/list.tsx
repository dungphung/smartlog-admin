import {
  DownloadOutlined,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import {
  Row,
  Space,
  Table,
  Tabs,
  Col,
  Input,
  Select,
  Form,
  Button,
  Tag,
} from 'antd'
import { useMemo, useState, useCallback } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import EditUserPermission from './EditPermissionDrawer'
import EditSearchUserPermissionDrawer from './EditSearchUserPermissionDrawer'
import styles from './list.module.less'

const STATUS_INFO = {
  '0': {
    title: 'Xác nhận',
    color: '#00703C',
  },
  '1': {
    title: 'Chưa xác nhận',
    color: '#9DDAF4',
  },
  '2': {
    title: 'Khóa',
    color: '#D4351C',
  },
  '3': {
    title: 'Xóa',
    color: '#DBDBDB',
  },
}

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: i + 1,
    status: Math.floor(Math.random() * 4),
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

  const [visibleSearchDrawer, setVisibleSearchDrawer] = useState(false)

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

        render: (status, row) => {
          return (
            <div>
              <Tag
                className="text-body-2 cursor text-white"
                color={STATUS_INFO[status].color}
              >
                {STATUS_INFO[status].title}
              </Tag>
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
        width: 150,
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
            <Button
              onClick={() => setVisibleSearchDrawer(true)}
              className="redButton button-1"
            >
              Chỉnh sửa
            </Button>
          </Row>
        </Col>
      </Row>

      <div className="mt32">
        <Space>
          <DownloadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">Export</p>
        </Space>
      </div>
      <div className="mt32" />
      <div className="customContent">
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
              style={{ width: '100%' }}
              onChange={(e) => {
                setParams({ order: `${e}` })
              }}
            >
              <Select.Option value="1">Mới nhất</Select.Option>
              <Select.Option value="2">Cũ nhất</Select.Option>
            </Select>
          </Col>
        </Row>

        <Table
          scroll={{ x: 1600 }}
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
      <EditSearchUserPermissionDrawer
        visible={visibleSearchDrawer}
        onClose={() => setVisibleSearchDrawer(false)}
      />
    </div>
  )
}

export default ListRequest
