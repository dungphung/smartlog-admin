import { Drawer, Space, Button, Row, Form, Select, Modal } from 'antd'
import { useState } from 'react'

const DetailInfoUser = () => {
  return (
    <div>
      <p className="sub-title-2 font-normal">
        <span className="sub-title-2">ID:</span>123asdfh
      </p>
      <p className="sub-title-2 font-normal mt6">
        <span className="sub-title-2">Tài khoản:</span>Quyen Thai
      </p>
      <p className="sub-title-2 font-normal mt6">
        <span className="sub-title-2">Email:</span>quyen.thai@example.com
      </p>

      <div className="mt32">
        <p className="sub-title-2 font-normal">
          <span className="sub-title-2">Tên công ty:</span>Công ty Cổ phần Giải
          pháp Chuỗi cung ứng Smartlog
        </p>
        <p className="sub-title-2 font-normal mt6">
          <span className="sub-title-2">MST:</span>0316955888 Smartlog
        </p>
        <p className="sub-title-2 font-normal mt6">
          <span className="sub-title-2">Số đăng ký Doanh nghiệp:</span>
          0316955888 Smartlog
        </p>
      </div>
    </div>
  )
}

const FormSelectUser = () => {
  return (
    <Form layout="vertical">
      <Form.Item name="id" label="ID">
        <Select></Select>
      </Form.Item>
      <Form.Item name="account" label="Tài khoản">
        <Select></Select>
      </Form.Item>
      <Form.Item name="email" label="Email">
        <Select></Select>
      </Form.Item>
    </Form>
  )
}

const EditUserPermission = ({ visible, onClose }) => {
  const [user, setUser] = useState<any>({})
  const [visibleWarningDisabledUser, setVisibleWarningDisabledUser] =
    useState(false)

  const [visibleWarningChangeStatusUser, setVisibleWarningChangeStatusUser] =
    useState(false)
  return (
    <Drawer
      title={
        <p className="heading-7 text-neutral-9">Chỉnh sửa quyền truy cập</p>
      }
      placement="right"
      width={640}
      onClose={onClose}
      visible={visible}
      footer={
        <Row justify="end">
          <Space>
            <Button onClick={onClose} type="text" className="button-1">
              Hủy
            </Button>
            <Button
              type="primary"
              className="redButton button-1"
              onClick={() => {
                setVisibleWarningDisabledUser(true)
              }}
            >
              Lưu
            </Button>
          </Space>
        </Row>
      }
    >
      {user?.id ? <DetailInfoUser /> : <FormSelectUser />}

      <div className="mt27">
        <Form layout="vertical">
          <Form.Item name="status" label="Trạng thái">
            <Select style={{ width: '100%' }} onChange={() => {}}>
              <Select.Option value="1">Xác nhận</Select.Option>
              <Select.Option value="2">Chưa xác nhận</Select.Option>
              <Select.Option value="3">Khóa</Select.Option>
              <Select.Option value="4">Xóa</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </div>

      <Modal
        title="Chỉnh sửa quyền truy cập"
        visible={visibleWarningDisabledUser}
        onOk={() => {
          setVisibleWarningDisabledUser(false)
        }}
        onCancel={() => {
          setVisibleWarningDisabledUser(false)
        }}
        footer={
          <Row justify="end">
            <Button
              onClick={() => setVisibleWarningDisabledUser(false)}
              className="button-1"
            >
              Hủy
            </Button>
            <Button
              onClick={() => setVisibleWarningDisabledUser(false)}
              type="primary"
              className="redButton button-1"
            >
              Khóa
            </Button>
          </Row>
        }
      >
        <p className="sub-title-1">Bạn chắc chắn muốn khóa người dùng này?</p>
      </Modal>

      <Modal
        title="Chỉnh sửa quyền truy cập"
        visible={visibleWarningChangeStatusUser}
        onOk={() => {
          setVisibleWarningDisabledUser(false)
        }}
        onCancel={() => {
          setVisibleWarningChangeStatusUser(false)
        }}
        footer={
          <Row justify="end">
            <Button
              onClick={() => setVisibleWarningChangeStatusUser(false)}
              className="button-1"
            >
              Hủy
            </Button>
            <Button
              onClick={() => setVisibleWarningChangeStatusUser(false)}
              type="primary"
              className="redButton button-1"
            >
              Chuyển đổi
            </Button>
          </Row>
        }
      >
        <p className="sub-title-1">
          Bạn chắc chắn muốn chuyển quyền truy cập của người dùng này thành Xác
          nhận?
        </p>
      </Modal>
    </Drawer>
  )
}

export default EditUserPermission
