import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import { useState } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './SeaPortInformation.module.less'

const columns = [
  {
    title: 'Tên Cảng',
    dataIndex: 'name',
  },
  {
    title: 'Mã Cảng',
    dataIndex: 'age',
  },
  {
    title: 'Quốc gia',
    dataIndex: 'address',
  },

  {
    title: 'Website',
    dataIndex: 'address',
    render: (text) => {
      return <span className={styles.websiteText}>{text}</span>
    },
  },
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

const AirPortInformation = () => {
  const [{ pageIndex, pageSize }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
  })
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  return (
    <div className={styles.container}>
      <div className="mt16">
        <Table
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
    </div>
  )
}

export default AirPortInformation
