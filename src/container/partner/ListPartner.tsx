import {
  DownloadOutlined,
  EditOutlined,
  UploadOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Space, Table, Row, Select, Input, Col, Tag, Button } from 'antd'
import { useEffect, useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './ListPartner.module.less'
import EditPartnerInfoDrawer from './EditPartnerInfoDrawer'
import EditPartnerWithSearchDrawer from './EditPartnerWithSearchDrawer'
import usePartners from 'src/hooks/Partner/usePartners'

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
  const [
    visibleEditPartnerWithSearchDrawer,
    setVisibleEditPartnerWithSearchDrawer,
  ] = useState(false)

  const { data, loading, getPartnerListCompany, totalItem } = usePartners()



  useEffect(() => {
    getPartnerListCompany({
      pageIndex,
      pageSize,
      keySearch: keyword,
      filters: {},
      orders: {},
    })

    return () => {}
  }, [pageIndex, pageSize, keyword, getPartnerListCompany])

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
      width: '10%',
      render: (status, row) => {
        return (
          <Tag color={STATUS_INFO[status || 0].color}>
            {STATUS_INFO[status || 0].title}
          </Tag>
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
      <Row justify="space-between">
        <p className="heading-6">Danh sách đối tác</p>
        <Button
          className="redButton button-1"
          onClick={() => setVisibleEditPartnerWithSearchDrawer(true)}
        >
          Chỉnh sửa
        </Button>
      </Row>

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
          loading={loading}
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

      <EditPartnerInfoDrawer
        visible={visibleModalStatusPartner}
        onClose={() => {
          setVisibleModalStatusPartner(false)
        }}
      />

      <EditPartnerWithSearchDrawer
        visible={visibleEditPartnerWithSearchDrawer}
        onClose={() => {
          setVisibleEditPartnerWithSearchDrawer(false)
        }}
      />
    </div>
  )
}

export default ListPartner
