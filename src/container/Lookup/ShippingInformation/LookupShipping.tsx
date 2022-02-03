import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import useShipping from 'src/hooks/Lookup/useShipping'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import AddShipping from './AddShipping'
import styles from './Shipping.module.less'

const LookupPort = () => {
  const [visibleAddShippingModal, setVisibleAddShippingModal] = useState(false)
  const [{ pageIndex, pageSize }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const { getData, data, totalItem, loading } = useShipping()

  useEffect(() => {
    const variables = {
      pageSize,
      pageIndex,
      type: 'SEAPORT',
    }

    getData(variables)
  }, [pageSize, pageIndex])

  const columns = [
    {
      title: '',
      with: '1%',
    },
    {
      title: '',
      key: 'image',
      dataIndex: 'image',
      render: (src) => {
        return <img src={src} style={{ width: 70 }} />
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
            <EditOutlined
              onClick={() => {
                setVisibleAddShippingModal(true)
              }}
            />
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
    <div className={styles.container}>
      <Table
        loading={loading}
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
        }}
        expandable={{ expandedRowRender }}
        className="components-table-demo-nested mt32"
        columns={columns}
        rowKey={(row) => row.id}
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

      <AddShipping
        visible={visibleAddShippingModal}
        onCancel={() => {
          setVisibleAddShippingModal(false)
        }}
      />
    </div>
  )
}

export default LookupPort
