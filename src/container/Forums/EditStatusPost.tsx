import { Drawer, Space, Button, Row, Form, Select } from 'antd'

const DetailPartnerInfo = () => {
  return (
    <div>
      <p className="sub-title-2 font-normal">
        <span className="sub-title-2">Tên công ty:</span>Công ty Cổ phần Giải
        pháp Chuỗi cung ứng Smartlog
      </p>
      <p className="sub-title-2 font-normal mt6">
        <span className="sub-title-2">Ngành kinh doanh:</span>Công nghệ thông
        tin
      </p>
      <p className="sub-title-2 font-normal mt6">
        <span className="sub-title-2">Mặt hàng/ Dịch vụ chủ lực:</span>Giải pháp
        Chuỗi cung ứng
      </p>
      <p className="sub-title-2 font-normal mt6">
        <span className="sub-title-2">Số đăng ký Doanh nghiệp:</span>
        0316955888 Smartlog
      </p>
    </div>
  )
}

const FormSelectUser = () => {}

const EditPartnerInfoDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title={
        <p className="heading-7 text-neutral-9">Chỉnh sửa trạng thái Đối tác</p>
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
      <DetailPartnerInfo />
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

export default EditPartnerInfoDrawer
