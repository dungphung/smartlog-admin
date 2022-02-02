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

const UserRegisterEvent = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })

  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const columns = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'id',
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
        title: 'Công ty',
        dataIndex: 'company',
      },
    ],
    [],
  )

  const onFinish = useCallback((values) => {}, [])

  return (
    <div className="mt16">
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
  )
}

export default UserRegisterEvent
