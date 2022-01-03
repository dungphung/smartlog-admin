import { Col, Row, Form, Input, Checkbox, Button } from 'antd'

const Login = () => {
  return (
    <Row>
      <Col xs={16}></Col>

      <Col xs={8}>
        <p>Chào mừng đến với Nền tảng Hợp tác Chuỗi cung ứng Úc - Việt Nam</p>
        <p>Vui lòng đăng nhập tài khoản và bắt đầu khám phá</p>

        <Form>
          <Form.Item name="email" label="Email">
            <Input placeholder="admin@example.com" />
          </Form.Item>

          <Form.Item name="email" label="Email">
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button className="button-1 redButton" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>
          Chưa có tài khoản? <span>Đăng ký ngay</span>
        </p>
      </Col>
    </Row>
  )
}

export default Login
