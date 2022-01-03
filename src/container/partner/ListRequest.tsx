import { Table } from 'antd'
import { useState } from 'react'

const columns = [
  {
    title: 'Tên bài viết',
    dataIndex: 'name',
  },
  {
    title: 'Tìm kiếm đối tác',
    dataIndex: 'age',
  },
  {
    title: 'Mặt hàng/ Dịch vụ',
    dataIndex: 'address',
  },
  {
    title: 'Loại hình',
    dataIndex: 'address',
  },
  {
    title: 'Người tạo',
    dataIndex: 'address',
  },
  {
    title: 'Thời gian tạo',
    dataIndex: 'address',
  },
  {
    title: 'Lần chỉnh sửa cuối cùng',
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

const ListRequest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  return (
    <div>
      <p className="heading-6">Danh sách yêu cầu</p>

      <div className="customContent mt16">
        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  )
}

export default ListRequest
