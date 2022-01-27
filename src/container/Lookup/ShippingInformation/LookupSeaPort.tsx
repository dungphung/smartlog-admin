import { Table } from 'antd'
import { useCallback, useState } from 'react'

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

const LookupPort = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]
  const onSelectChange = useCallback(() => {}, [])

  return (
    <div>
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: onSelectChange,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default LookupPort
