import {
  Drawer,
  Space,
  Button,
  Row,
  Form,
  Select,
  Radio,
  DatePicker,
  Modal,
} from 'antd'
import { useState } from 'react'

const EditPartnerInfoDrawer = ({ visible, onClose }) => {
  const [visibleDisabledWarningModal, setVisibleDisabledWarningModal] =
    useState(false)
  return (
    <Drawer
      title={
        <p className="heading-7 text-neutral-9">
          Chỉnh sửa trạng thái bài viết
        </p>
      }
      placement="right"
      width={640}
      onClose={onClose}
      visible={visible}
      footer={
        <Row justify="end">
          <Space>
            <Button onClick={onClose} type="ghost">
              Hủy
            </Button>
            <Button type="primary" className="redButton" onClick={onClose}>
              Lưu
            </Button>
          </Space>
        </Row>
      }
    >
      <div className="mt27">
        <Form layout="vertical">
          <Form.Item name="id" label="Tiêu đề bài viết">
            <Select></Select>
          </Form.Item>
          <Form.Item name="account" label="Người đăng">
            <Select></Select>
          </Form.Item>
          <Form.Item name="email" label="Ngày đăng bài viết">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="status" label="Trạng thái">
            <Radio.Group onChange={() => {}} value={1}>
              <Radio value={1}>Hiển thị</Radio>
              <Radio value={2}>Khóa</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="Chỉnh sửa trạng thái bài viết"
        visible={visibleDisabledWarningModal}
        onOk={() => {
          setVisibleDisabledWarningModal(false)
        }}
        onCancel={() => {
          setVisibleDisabledWarningModal(false)
        }}
        footer={
          <Row justify="end">
            <Button
              onClick={() => setVisibleDisabledWarningModal(false)}
              className="button-1"
            >
              Hủy
            </Button>
            <Button
              onClick={() => setVisibleDisabledWarningModal(false)}
              type="primary"
              className="redButton button-1"
            >
              Khóa
            </Button>
          </Row>
        }
      >
        <p className="sub-title-1">Bạn chắc chắn muốn khóa bài viết này?</p>
      </Modal>
    </Drawer>
  )
}

export default EditPartnerInfoDrawer
