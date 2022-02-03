import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  InboxOutlined,
} from '@ant-design/icons'
import {
  Badge,
  Button,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Row,
  Space,
  Table,
  Upload,
} from 'antd'
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

const AboutUs = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  return (
    <div>
      <Form layout="vertical">
        <p className="sub-title-2">Thêm đối tác</p>

        <Form.Item className="mt16">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Row gutter={24}>
              <Col xs={4} style={{ height: 120 }}>
                <Upload.Dragger name="files" action="/upload.do" />
              </Col>
              <Col xs={20}>
                <p className="sub-title-2">Ảnh đại diện</p>
                <Button className="redButton button-1 mt16">Lưu</Button>
                <Button className="button-1 ml16">Hủy</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form.Item>
        <Divider />
        <Row gutter={24}>
          <Col xs={12}>
            <Form.Item label="Tên">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item label="Website">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Mô tả ngắn">
          <Input.TextArea />
        </Form.Item>

        <Divider />

        <p className="sub-title-2">Danh sách đối tác</p>

        <Table
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys) => setSelectedRowKeys(selectedRowKeys),
          }}
          columns={columns}
          dataSource={data}
        />

        <Button className="redButton button-1">Lưu</Button>
        <Button className="button-1 ml16">Hủy</Button>
      </Form>
    </div>
  )
}

export default AboutUs
