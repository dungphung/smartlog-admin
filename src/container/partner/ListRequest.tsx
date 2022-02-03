import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Space, Table, Row, Select, Input, Col, Typography, Tag } from 'antd'
import { useEffect, useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './ListPartner.module.less'
import EditCoopDrawer from './EditCoopDrawer'
import useRequests from 'src/hooks/Partner/useRequests'
import moment from 'moment'

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
    title: 'Ẩn',
    color: '#D4351C',
  },
}

const REQUEST_TYPE = {
  IMPORT: 'Nhập khẩu',
  EXPORT: 'Xuất khẩu',
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

  const { data, isLoading, getRequest, totalItem } = useRequests()

  useEffect(() => {
    getRequest({
      pageIndex,
      pageSize,
      keySearch: keyword,
      filters: {},
      orders: {},
    })

    return () => {}
  }, [pageIndex, pageSize, keyword, getRequest])

  console.log(data)

  const columns = [
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: '10%',
      textAlign: 'center',
      render: (status, row) => {
        return (
          <div>
            <Tag color={STATUS_INFO[status || 0].color}>
              {STATUS_INFO[status || 0].title}
            </Tag>
          </div>
        )
      },
    },
    {
      title: 'Tiêu đề bài viết',
      dataIndex: 'title',
      width: 400,
      render: (text) => (
        <Typography.Paragraph
          className={styles.title}
          ellipsis={{ rows: 3, expandable: false }}
        >
          {text}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'Tìm kiếm đối tác',
      dataIndex: 'locationType',
      width: 120,
    },
    {
      title: 'Loại hình',
      dataIndex: 'requestType',
      render: (requestType) => REQUEST_TYPE[requestType],
    },
    {
      title: <span>Mặt hàng/ Dịch vụ</span>,
      dataIndex: 'mainServices',
    },
    {
      title: <span>Thẻ</span>,
      dataIndex: 'mainServices',
    },
    {
      title: 'Người tạo',
      dataIndex: 'createdBy',
    },
    {
      title: 'Thời gian tạo',
      dataIndex: 'createdDate',
      render: (createdDate) =>
        moment(createdDate).format('DD/MM/YYYY mm:HH ZZ'),
    },
    {
      title: 'Lần chỉnh sửa cuối cùng',
      dataIndex: 'updatedDate',
      render: (updatedDate) =>
        moment(updatedDate).format('DD/MM/YYYY mm:HH ZZ'),
    },
    {
      title: 'Lượt xem',
      dataIndex: 'view',
    },
    {
      title: 'Lượt yêu thích',
    },
    {
      title: 'Lượt Bình luận',
    },
    {
      title: 'Action',
      render: () => (
        <Space>
          <EditOutlined onClick={() => setVisibleModalStatusPartner(true)} />
          <DeleteOutlined style={{ color: '#D4351C' }} />
        </Space>
      ),
    },
  ]
  return (
    <div className={styles.container}>
      <p className="heading-6">Cơ hội hợp tác</p>

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
          loading={isLoading}
          className="mt32"
          scroll={{ x: 1800 }}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          }}
          rowKey={(row) => row.id}
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize,
            current: pageIndex,
            total: totalItem,
            showSizeChanger: true,
            showQuickJumper: true,
            onChange: (page, pageSize) => {
              setParams({
                pageIndex: page,
                pageSize,
              })
            },
          }}
        />
      </div>

      <EditCoopDrawer
        visible={visibleModalStatusPartner}
        onClose={() => {
          setVisibleModalStatusPartner(false)
        }}
      />
    </div>
  )
}

export default ListPartner
