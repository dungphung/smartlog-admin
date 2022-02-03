import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import {
  Space,
  Table,
  Row,
  Select,
  Input,
  Col,
  Typography,
  Button,
  Tag,
} from 'antd'
import { useEffect, useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './Forums.module.less'
import EditStatusPost from './EditStatusPost'
import useForums from 'src/hooks/Forums/useForums'
import moment from 'moment'
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

const ListPartner = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })

  const { getData, isLoading, totalItem, data } = useForums()
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const [visibleModalStatusPartner, setVisibleModalStatusPartner] =
    useState(false)

  useEffect(() => {
    getData({
      pageSize,
      pageIndex,
    })
    return () => {}
  }, [getData, pageSize, pageIndex])

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
          <div>
            <Tag
              className="text-body-2 cursor text-white"
              color={STATUS_INFO[status || 0].color}
            >
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
      title: 'Danh mục',
      dataIndex: 'category',
      render: (category) => category?.name,
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
      dataIndex: 'createdBy',
      render: (createdBy) => createdBy || 'Admin',
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
          loading={isLoading}
          className="mt32"
          scroll={{ x: 1800 }}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          }}
          columns={columns}
          dataSource={data}
          rowKey={(row) => row.id}
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
