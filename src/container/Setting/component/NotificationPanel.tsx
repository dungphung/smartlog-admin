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
  Pagination,
} from 'antd'
import {
  CheckOutlined,
  DashOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'
import styles from './Notification.module.less'
const ItemNotification = () => {
  return (
    <Row className="mt16">
      <div style={{ flex: 1 }}>
        <span>50 Tài khoản mới đăng ký trong tuần qua</span>
      </div>
      <Space>
        <span>1 phút trước</span>
        <DashOutlined />
      </Space>
    </Row>
  )
}

const NotificationPanel = (props) => {
  const [form] = Form.useForm()
  return (
    <div className={styles.container}>
      <div className="customContentFitSize mt16">
        <Row justify="space-between">
          <Space>
            <span>Sắp xếp theo</span>
            <Select>
              <Select.Option value="most_view">
                Lượt xem nhiều nhất
              </Select.Option>
            </Select>
          </Space>

          <Space>
            <CheckOutlined />
            <span className="sub-title-1 text-primary-5">
              Đánh dấu tất cả đã đọc
            </span>
          </Space>
        </Row>
        <div className="mt32">
          {[1, 2, 4, 5, 6].map((item) => {
            return <ItemNotification />
          })}
        </div>

        <div className="mt32">
        <Pagination
    total={85}
    showSizeChanger
    showQuickJumper

  />
        </div>
      </div>
    </div>
  )
}

NotificationPanel.propTypes = {}

export default NotificationPanel
