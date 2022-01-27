import { Col, Row, Form, Input, Checkbox, Button, Image, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
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
          style={{
            background: 'white',
            height: '100vh',
            backgroundImage: 'url(/images/register-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
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
            <p className="heading-6">Khôi phục mật khẩu</p>
            <p className="sub-title-1">
              Mật khẩu mới của bạn phải khác với mật khẩu bạn đã sử dụng trước
              đây
            </p>

            <Form className="mt24" layout="vertical" autoComplete="off">
              <Form.Item name="password" label="Mật khẩu">
                <Input.Password placeholder="••••••••" />
              </Form.Item>

              <Form.Item name="repassword" label="Xác nhận mật khẩu">
                <Input.Password placeholder="••••••••" />
              </Form.Item>

              <Form.Item>
                <Button
                  size="large"
                  style={{ width: '100%' }}
                  className="button-1 redButton"
                  htmlType="submit"
                >
                  Cài đặt mật khẩu mới
                </Button>
              </Form.Item>
            </Form>

            <Row justify="center" className="mt32">
              <span
                className="button-2 cursor"
                onClick={() => {
                  navigate('/login')
                }}
              >
                quay lại Đăng nhập
              </span>
            </Row>
          </div>
        </Row>
      </Col>
    </Row>
  )
}

export default Register
