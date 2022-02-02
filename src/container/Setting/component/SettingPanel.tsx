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
  Switch,
} from 'antd'
import {
  CheckOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

const SettingPanel = (props) => {
  const [form] = Form.useForm()

  const notifications = [
    {
      value: 1,
      title: 'Khi cập nhật trong chuyên mục Tìm cơ hội hợp tác',
    },
    {
      value: 2,
      title: 'Khi cập nhật trong chuyên mục Diễn đàn',
    },
    {
      value: 3,
      title: 'Khi cập nhật trong chuyên mục Danh sách Đối tác',
    },
    {
      value: 4,
      title: 'Khi cập nhật trong chuyên mục Thông cáo báo chí',
    },
    {
      value: 5,
      title: 'Khi cập nhật trong chuyên mục Sự kiện',
    },
    {
      value: 6,
      title: 'Khi có tài khoản mới đăng ký',
    },
    {
      value: 7,
      title: 'Khi có ai đó gửi yêu cầu liên hệ',
    },
    {
      value: 8,
      title: 'Khi ai đó bình luận về bài viết của bạn',
    },
    {
      value: 9,
      title: 'Khi ai đó nhắc đến bạn',
    },
  ]

  const emails = [
    {
      value: 1,
      title:
        'Gửi email cho tôi khi có bài mới trong chuyên mục Tìm cơ hội hợp tác',
    },
    {
      value: 2,
      title: 'Gửi email cho tôi khi có bài mới trong chuyên mục Diễn đàn',
    },
    {
      value: 3,
      title:
        'Gửi email cho tôi khi cập nhật trong chuyên mục Danh sách Đối tác',
    },
    {
      value: 4,
      title:
        'Gửi email cho tôi khi cập nhật trong chuyên mục Thông cáo báo chí',
    },
    {
      value: 5,
      title: 'Gửi email cho tôi khi cập nhật trong chuyên mục Sự kiện',
    },
    {
      value: 6,
      title: 'Gửi email cho tôi khi có tài khoản mới đăng ký',
    },
    {
      value: 7,
      title: 'Gửi email cho tôi khi có ai đó gửi yêu cầu liên hệ',
    },
    {
      value: 8,
      title: 'Gửi email cho tôi khi ai đó bình luận về bài viết của bạn',
    },
    {
      value: 9,
      title: 'Gửi email cho tôi khi ai đó nhắc đến bạn',
    },
  ]
  return (
    <div className="customContent mt16">
      <Row gutter={24}>
        <Col xs={24}>
          <p
            className="sub-title-2"
            style={{ color: '#C6C6C6', textTransform: 'uppercase' }}
          >
            Thông báo
          </p>
        </Col>

        <Col xs={24} className="mt32">
          {notifications.map((item, index) => {
            return (
              <Row
                key={item.value}
                wrap={false}
                align="middle"
                className={index !== 0 ? 'mt24' : ''}
              >
                <Switch defaultChecked onChange={() => {}} />
                <p className="sub-title-1 ml16">{item.title}</p>
              </Row>
            )
          })}
        </Col>
      </Row>
      <Divider />
      <Row gutter={24}>
        <Col xs={24}>
          <p
            className="sub-title-2"
            style={{ color: '#C6C6C6', textTransform: 'uppercase' }}
          >
            Email
          </p>
        </Col>

        <Col xs={24} className="mt32">
          {emails.map((item, index) => {
            return (
              <Row
                key={item.value}
                wrap={false}
                align="middle"
                className={index !== 0 ? 'mt24' : ''}
              >
                <Switch defaultChecked onChange={() => {}} />
                <p className="sub-title-1 ml16">{item.title}</p>
              </Row>
            )
          })}
        </Col>
      </Row>
    </div>
  )
}

SettingPanel.propTypes = {}

export default SettingPanel
