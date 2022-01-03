import { LockOutlined } from '@ant-design/icons'
import { Row, Col, Form, Input, Divider, Space } from 'antd'

const dataSource = []

const Account = () => {
  return (
    <div>
      <Form>
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item label="Tên tài khoản">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Tên">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Họ">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Email">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="User Role">
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Công ty">
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Divider />

        <Space>
          <LockOutlined />

          <p>Quyền truy cập</p>
        </Space>
      </Form>
    </div>
  )
}

export default Account
