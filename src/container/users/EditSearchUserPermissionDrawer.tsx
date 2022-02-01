import { Drawer, Space, Button, Row, Form, Select } from 'antd'

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

const FormSelectUser = () => {}

const EditUserPermission = ({ visible, onClose }) => {
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
            <Button onClick={onClose} type="ghost">
              Hủy
            </Button>
            <Button type="primary" className="redButton" onClick={onClose}>
              OK
            </Button>
          </Space>
        </Row>
      }
    >
      <DetailInfoUser />
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
    </Drawer>
  )
}

export default EditUserPermission
