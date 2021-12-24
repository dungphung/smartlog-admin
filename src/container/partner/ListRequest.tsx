import { Table } from 'antd'
import { useState } from 'react'

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

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  })
}

const ListPartner = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  return (
    <div>
      <Table
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default ListPartner
