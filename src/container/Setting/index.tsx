import { Col, Menu, Row } from 'antd'
import React from 'react'

const Settings = () => {
  return (
    <div>
      <p>Thông tin tài khoản</p>
      <Row gutter={24}>
        <Col xs={8}>
          <Menu>
            <Menu.Item>Thông tin tài khoản</Menu.Item>
            <Menu.Item>Thay đổi mật khẩu</Menu.Item>
            <Menu.Item>Thông báo</Menu.Item>
            <Menu.Item>Cài đặt</Menu.Item>
          </Menu>
        </Col>

        <Col xs={16}></Col>
      </Row>
    </div>
  )
}

export default Settings
