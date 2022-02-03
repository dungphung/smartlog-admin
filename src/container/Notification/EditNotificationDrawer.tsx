import { Drawer, Space, Button, Row, Form, Select, Input } from 'antd'
import TextAreaWithCkEditor from 'src/components/TextAreaWithCkEditor'

const EditPartnerInfoDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title={
        <p className="heading-7 text-neutral-9">
          Chỉnh sửa thông cáo truyền thông
        </p>
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
            <Button onClick={onClose} type="ghost" className="button-2">
              Lưu nháp
            </Button>
            <Button
              type="primary"
              className="redButton button-1"
              onClick={onClose}
            >
              Đăng
            </Button>
          </Space>
        </Row>
      }
    >
      <div>
        <Form layout="vertical">
          <Form.Item name="title" label="Tiêu đề thông cáo">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội dung">
            <TextAreaWithCkEditor onSubmitData={() => {}} />
          </Form.Item>
        </Form>
      </div>
    </Drawer>
  )
}

export default EditPartnerInfoDrawer
