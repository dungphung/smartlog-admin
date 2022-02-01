import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Space, Table, Row, Select, Input, Col, Typography } from 'antd'
import { useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './Draft.module.less'
import EditNotificationDrawer from './EditNotificationDrawer'

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
    mainServices: 'Vườn ươm và sản xuất hoa, Trồng nấm và rau',
    registerNumber: '0316955888',
    website: 'gosmartlog.com',
    phone: '0938 545 272',
    location: i % 2 === 0 ? 'Việt nam' : 'Úc',
    type: i % 2 === 0 ? 'Xuất khẩu' : 'Nhập khẩu',
    title:
      'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting',
  })
}

const NotificationDraft = () => {
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
      title: 'Tiêu đề thông cáo',
      dataIndex: 'title',
      width: 400,
      render: (text) => (
        <Typography.Paragraph ellipsis={{ rows: 3, expandable: false }}>
          {text}
        </Typography.Paragraph>
      ),
    },

    {
      title: 'Thời gian tạo',
    },
    {
      title: 'Lần chỉnh sửa cuối cùng',
    },

    {
      title: 'Action',
      render: () => (
        <Space>
          <EditOutlined onClick={() => setVisibleModalStatusPartner(true)} />
        </Space>
      ),
    },
  ]
  return (
    <div className={styles.container}>
      <p className="heading-6">Danh sách Thông cáo truyền thông lưu nháp</p>

      <div className="customContent mt16">
        <Row gutter={24} justify="space-between">
          <Col xs={17}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Tìm kiếm thông cáo truyền thông"
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

      <EditNotificationDrawer
        visible={visibleModalStatusPartner}
        onClose={() => {
          setVisibleModalStatusPartner(false)
        }}
      />
    </div>
  )
}

export default NotificationDraft
