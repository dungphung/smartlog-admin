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

const AccountInfoPanel = (props) => {
  const [form] = Form.useForm()
  return (
    <div className="customContentFitSize mt16">
      <Form layout="vertical">
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              name="firstName"
              label="Tên"
              rules={[{ required: true, message: 'Bắt buộc' }]}
            >
              <Input className="font-16" placeholder="Tên" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="lastName"
              label="Họ"
              rules={[{ required: true, message: 'Bắt buộc' }]}
            >
              <Input className="font-16" placeholder="Họ" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="upload"
          label="Ảnh đại diện"
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

        <Form.Item label="Giới thiệu bản thân" name="introduction">
          <Input.TextArea />
        </Form.Item>

        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              name="name"
              label="Email"
              rules={[{ required: true, message: 'Bắt buộc' }]}
            >
              <Input className="font-16" placeholder="Email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="phone" label="Số điện thoại">
              <Input className="font-16" placeholder="Số điện thoại" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="address"
              label="Địa chỉ"
              rules={[{ required: true, message: 'Bắt buộc' }]}
            >
              <Input className="font-16" placeholder="Địa chỉ" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="language" label="Ngôn ngữ">
              <Select placeholder="Ngôn ngữ">
                <Select.Option value="vn">Tiếng Việt</Select.Option>
                <Select.Option value="en">Tiêng anh</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Row justify="end">
          <Space>
            <Button className="redButton button-1">Lưu</Button>
            <Button className="button-1">Hủy</Button>
          </Space>
        </Row>
      </Form>
    </div>
  )
}

AccountInfoPanel.propTypes = {}

export default AccountInfoPanel
