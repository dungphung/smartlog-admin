import React from 'react'
import PropTypes from 'prop-types'
import {
  Col,
  Form,
  Input,
  Row,
  Avatar,
  Upload,
  Button,
  Select,
  Space,
  Divider,
} from 'antd'
import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

const ChangePassword = (props) => {
  const [form] = Form.useForm()
  return (
    <div className="customContentFitSize mt16">
      <Form
        form={form}
        onFinish={() => {}}
        layout="vertical"
        className="mt16"
        size="middle"
      >
        <Form.Item>
          <div>
            <p className="text-body-1">Mật khẩu bao gồm:</p>

            <div className="ml12">
              <Space>
                <CheckOutlined className="text-neutral-9" />{' '}
                <p className="caption-1">Ít nhất 6 kí tự</p>
              </Space>
            </div>
            <div className="ml12">
              <Space>
                <CheckOutlined className="text-neutral-9" />{' '}
                <p className="caption-1">Ít nhất 1 kí tự viết hoa (A-Z)</p>
              </Space>
            </div>

            <div className="ml12">
              <Space>
                <CheckOutlined className="text-neutral-9" />{' '}
                <p className="caption-1">Ít nhất 1 kí tự viết thường (a-z)</p>
              </Space>
            </div>
            <div className="ml12">
              <Space>
                <CheckOutlined className="text-neutral-9" />{' '}
                <p className="caption-1">Ít nhất 1 số (0-9)</p>
              </Space>
            </div>
          </div>
        </Form.Item>
        <Form.Item
          name="currentPassword"
          label="Mật khẩu hiện tại"
          rules={[{ required: true, message: 'Bắt buộc' }]}
        >
          <Input.Password
            autoComplete="off"
            className="font-16"
            placeholder="Mật khẩu hiện tại"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="Mật khẩu mới"
          rules={[{ required: true, message: 'Bắt buộc' }]}
        >
          <Input.Password
            autoComplete="off"
            className="font-16"
            placeholder="Mật khẩu mới"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          name="repeatPassword"
          label="Xác nhận mật khẩu"
          rules={[{ required: true, message: 'Bắt buộc' }]}
        >
          <Input.Password
            autoComplete="off"
            className="font-16"
            placeholder="Xác nhận mật khẩu"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item>
          <Row>
            <Button
              className="redButton button-1 text-white"
              style={{ padding: '8px 50px', height: 'auto' }}
              onClick={form.submit}
            >
              Lưu
            </Button>
            <Button
              className="button-1 text-neutral-9"
              style={{ padding: '8px 50px', height: 'auto', marginLeft: 8 }}
              type="text"
            >
              Hủy
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </div>
  )
}

ChangePassword.propTypes = {}

export default ChangePassword
