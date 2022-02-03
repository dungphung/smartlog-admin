import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import { useCallback, useState } from 'react'
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
    name: `PIL - Pacific International Lines ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

const LookupPort = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const columns = [
    {
      title: '',
      with: '1%',
    },
    {
      title: '',
      key: 'image',
      render: () => {
        return <img src="/images/demo-img.png" style={{ width: 70 }} />
      },
    },
    {
      title: 'Hãng tàu',
      dataIndex: 'name',
    },

    {
      title: 'Action',
      render: () => {
        return (
          <Space size="middle">
            <EditOutlined />
            <DeleteOutlined style={{ color: '#D4351C' }} />
          </Space>
        )
      },
    },
  ]

  const expandedRowRender = () => {
    const columns = [
      { title: 'Điểm đi', dataIndex: 'from', key: 'name' },
      {
        title: 'Điểm đến',
        key: 'to',
        dataIndex: 'to',
        render: (text) => <span>{text}</span>,
      },

      {
        title: 'Action',

        key: 'operation',
        render: () => (
          <Space size="middle">
            <EditOutlined />
            <DeleteOutlined style={{ color: '#D4351C' }} />
          </Space>
        ),
      },
    ]
    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        from: 'Hồ Chí Minh',
        to: 'Melbourne',
      })
    }
    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const onSelectChange = useCallback(() => {}, [])

  return (
    <div>
      <Table
        expandable={{ expandedRowRender }}
        className="components-table-demo-nested mt32"
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

export default LookupPort
