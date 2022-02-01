import { Drawer, Space, Button, Row, Form, Select, Input } from 'antd'

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
            <Button onClick={onClose} type="ghost">
              Lưu nháp
            </Button>
            <Button type="primary" className="redButton" onClick={onClose}>
              Đăng
            </Button>
          </Space>
        </Row>
      }
    >
      <div className="mt27">
        <Form layout="vertical">
          <Form.Item name="title" label="Tiêu đề thông cáo">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội dung">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  )
}

export default EditPartnerInfoDrawer
