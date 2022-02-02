import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Space, Table, Row, Select, Input, Col, Typography, Button } from 'antd'
import { useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './Forums.module.less'
import EditStatusPost from './EditStatusPost'
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
      render: () => (
        <Space>
          <EditOutlined onClick={() => setVisibleModalStatusPartner(true)} />
        </Space>
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
      title: 'Tiêu đề bài viết',
      dataIndex: 'title',
      width: 400,
      render: (text) => (
        <Typography.Paragraph ellipsis={{ rows: 3, expandable: false }}>
          {text}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'Danh mục',
    },
    {
      title: 'Chủ đề',
    },

    {
      title: <span>Thẻ</span>,
      dataIndex: 'mainServices',
    },
    {
      title: 'Người tạo',
    },
    {
      title: 'Thời gian tạo',
    },
    {
      title: 'Lần chỉnh sửa cuối cùng',
    },
    {
      title: 'Lượt xem',
    },
    {
      title: 'Lượt yêu thích',
    },
    {
      title: 'Lượt Bình luận',
    },
  ]
  return (
    <div className={styles.container}>
      <Row justify="space-between">
        <p className="heading-6">Danh sách bài viết</p>
        <Button className="button-1 redButton">Đánh dấu spam</Button>
      </Row>

      <div className="customContent mt32">
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

      <EditStatusPost
        visible={visibleModalStatusPartner}
        onClose={() => {
          setVisibleModalStatusPartner(false)
        }}
      />
    </div>
  )
}

export default ListPartner
