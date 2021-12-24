import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons'
import {
  Badge,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Row,
  Space,
  Table,
} from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },

  {
    title: 'Action',
    key: 'action',

    render: () => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
]

const data = []
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  })
}

const expandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
}
const title = () => 'Here is title'
const showHeader = true
const footer = () => 'Here is footer'

const Content = () => {
  const [form] = Form.useForm()

  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
          </Space>
        ),
      },
    ]

    const data = []
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      })
    }
    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis: true }))

  return (
    <div>
      <Form layout="vertical" form={form}>
        <Row gutter={24}>
          <Col xs={12}>
            <Form.Item name={'title'} label="Tiêu đề">
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item name={'content'} label="Nội dung">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Divider />

        <p className="sub-title-2">Thêm mục tiêu người dùng</p>
        <Row gutter={24}>
          <Col xs={12}>
            <Form.Item name={'content'} label="Mục tiêu của người dùng">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={12}>
            <Form.Item name={'content'} label="Nhập tên tag">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item name={'content'} label="Link">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <p className="sub-title-2">Danh sách mục tiêu người dùng</p>

        <Table
          className="components-table-demo-nested"
          bordered
          columns={tableColumns}
          dataSource={data}
          expandable={{
            expandedRowRender,
          }}
          rowSelection={{}}
        />
      </Form>
    </div>
  )
}

export default Content
