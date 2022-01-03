import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import { useState } from 'react'

const columns = [
  {
    title: 'ID',
    dataIndex: 'name',
  },
  {
    title: 'Tài khoản',
    dataIndex: 'age',
  },
  {
    title: 'Nội dung bình luận',
    dataIndex: 'address',
  },
  {
    title: 'Chủ đề bài viết',
    dataIndex: 'address',
  },
  {
    title: 'Thời gian đăng',
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

const ListComments = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  return (
    <div>
      <p className="heading-6">Danh sách bình luận</p>
      <div className="mt16">
        <Space>
          <UploadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">IMPORT</p>
        </Space>
        <Space className="ml16">
          <DownloadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">Export</p>
        </Space>
      </div>

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

export default ListComments
