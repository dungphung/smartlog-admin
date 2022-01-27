import { Col, Row, Form, Input, Checkbox, Button, Image, Space } from 'antd'

const Login = () => {
  return (
    <Row
      align="middle"
      style={{ maxHeight: '100vh', overflow: 'hidden', position: 'relative' }}
    >
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
        <Image src="/images/logo.png" width="100px" />
      </div>
      <Col
        xs={18}
        lg={12}
        xl={16}
        style={{ overflow: 'hidden', background: 'white', height: '100vh' }}
      >
        <Row
          justify="center"
          align="middle"
          style={{ background: 'white', height: '100vh' }}
        >
          <Image src="/images/login-bg.png" preview={false} />
        </Row>
      </Col>

      <Col
        flex={1}
        xs={6}
        lg={12}
        xl={8}
        style={{ background: ' rgba(205, 238, 249, 0.1)', height: '100vh' }}
      >
        <Row
          align="middle"
          style={{ background: ' rgba(205, 238, 249, 0.1)', height: '100vh' }}
        >
          <div
            style={{
              padding: '0 30px',
            }}
          >
            <p className="heading-6">
              Chào mừng đến với Nền tảng Hợp tác Chuỗi cung ứng Úc - Việt Nam
            </p>
            <p className="sub-title-1">
              Vui lòng đăng nhập tài khoản và bắt đầu khám phá
            </p>

            <Form className="mt24" layout="vertical">
              <Form.Item name="email" label="Email">
                <Input placeholder="admin@example.com" />
              </Form.Item>

              <Form.Item name="email" label="Password">
                <Input.Password placeholder="••••••••" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Ghi nhớ mật khẩu</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  size="large"
                  style={{ width: '100%' }}
                  className="button-1 redButton"
                  htmlType="submit"
                >
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
            <Row>
              <p className="sub-title-1">
                Chưa có tài khoản?{' '}
                <span className="sub-title-2 cursor text-primary-5">
                  Đăng ký ngay
                </span>
              </p>
            </Row>
            <Row wrap={false} align="middle" className="mt32">
              <div
                style={{
                  width: '100%',
                  background: '#DBDBDB',
                  height: 1,
                  marginRight: 10,
                }}
              />
              <span className="text-body-1">hoặc</span>
              <div
                style={{
                  width: '100%',
                  background: '#DBDBDB',
                  height: 1,
                  marginLeft: 10,
                }}
              />
            </Row>
            <Row justify="center" className="mt32">
              <Space>
                <Image src="/svgs/gmail-icon.svg" preview={false} />
                <Image src="/svgs/facebook-icon.svg" preview={false} />
                <Image src="/svgs/twitter-icon.svg" preview={false} />
              </Space>
            </Row>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default Login
