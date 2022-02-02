import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import {
  Button,
  Divider,
  Form,
  Row,
  Space,
  Table,
  Input,
  Col,
  Upload,
  Avatar,
} from 'antd'
import ModalEditClient from './ModalEditClient'
import { useState } from 'react'
import styles from './Client.module.less'
const Client = () => {
  const [visibleEditClient, setVisibleEditClient] = useState(false)

  const columns = [
    {
      title: '',
      render: () => {
        return <img src="/images/demo-img.png" />
      },
    },
    {
      title: 'Đối tác',
      key: 'name',
      dataIndex: 'name',
      render: (text) => {
        return <span className="sub-title-2">{text}</span>
      },
    },
    {
      title: 'Mô tả ngắn',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Website',
      key: 'website',
      dataIndex: 'website',
      render: (text) => <span className={styles.websiteText}>{text}</span>,
    },
    {
      title: 'Action',
      render: () => (
        <Space size="middle">
          <EditOutlined onClick={() => setVisibleEditClient(true)} />
          <DeleteOutlined style={{ color: '#D4351C' }} />
        </Space>
      ),
    },
  ]

  return (
    <div className={styles.container}>
      <p className="heading-6">Thêm đối tác</p>
      <div className="mt16">
        <Form layout="vertical">
          <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={() => {}}
          >
            <Row align="middle">
              <Avatar
                style={{ width: 80, height: 80 }}
                src="https://joeschmoe.io/api/v1/random"
              />
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button type="text" className="button-1 text-primary-5 ">
                  Thay đổi
                </Button>
              </Upload>
              <Button type="text" className="button-1">
                Xóa
              </Button>
            </Row>
          </Form.Item>
          <Divider />

          <Row gutter={24} justify="space-between">
            <Col xs={11}>
              <Form.Item name="name" label="Tên">
                <Input />
              </Form.Item>
            </Col>

            <Col xs={11}>
              <Form.Item name="website" label="Website">
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="description" label="Mô tả ngắn">
            <Input.TextArea />
          </Form.Item>
        </Form>

        <Divider />
        <span className="sub-title-2">Danh sách đối tác</span>
        <div className="mt16">
          <Table
            columns={columns}
            dataSource={[
              {
                name: 'Phòng Thương mại và Công nghiệp Việt Nam - VCCI',
                description:
                  'Phòng Thương mại và Công nghiệp Việt Nam là tổ chức quốc gia tập hợp...',
                website: 'vcci.com.vn',
              },
            ]}
          />
        </div>

        <Row className="mt32">
          <Space>
            <Button className="redButton button-1">Lưu</Button>
            <Button className="button-1">Hủy</Button>
          </Space>
        </Row>
      </div>

      <ModalEditClient
        visible={visibleEditClient}
        onCancel={() => setVisibleEditClient(false)}
      />
    </div>
  )
}

export default Client
