import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Space, Table, Row, Select, Input, Col } from 'antd'
import { useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './ListPartner.module.less'
import EditPartnerInfoDrawer from './EditPartnerInfoDrawer'
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
    name: `Công ty Cổ phần Giải pháp Chuỗi cung ứng Smartlog ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
    status: Math.floor(Math.random() * 5),
    email: 'quyen.thai@example.com',
    field: 'Công nghệ thông tin',
    mainServices: 'Giải pháp Chuỗi cung ứng',
    registerNumber: '0316955888',
    website: 'gosmartlog.com',
    phone: '0938 545 272',
  })
}

const ListPartner = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const [visibleModalStatusPartner, setVisibleModalStatusPartner] =
    useState(false)
  const columns = [
    {
      title: '',
      key: 'operation',

      render: () => (
        <a>
          <EditOutlined onClick={() => setVisibleModalStatusPartner(true)} />
        </a>
      ),
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
      title: 'Tên đăng ký',
      dataIndex: 'name',
      width: 300,
    },
    {
      title: 'Ngành kinh doanh',
      dataIndex: 'field',
    },
    {
      title: (
        <span>
          Mặt hàng/
          <br /> Dịch vụ chủ lực
        </span>
      ),
      dataIndex: 'mainServices',
    },
    {
      title: (
        <span>
          Số đăng ký
          <br /> Doanh nghiệp
        </span>
      ),
      dataIndex: 'registerNumber',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      render: (text) => {
        return <span className={styles.websiteText}>{text}</span>
      },
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ]
  return (
    <div className={styles.container}>
      <p className="heading-6">Danh sách đối tác</p>

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
          className="mt32"
          scroll={{ x: 1800 }}
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

      <EditPartnerInfoDrawer
        visible={visibleModalStatusPartner}
        onClose={() => {
          setVisibleModalStatusPartner(false)
        }}
      />
    </div>
  )
}

export default ListPartner
