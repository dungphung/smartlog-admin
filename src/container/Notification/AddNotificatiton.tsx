import { Drawer, Space, Button, Row, Form, Select, Input } from 'antd'
import TextAreaWithCkEditor from 'src/components/TextAreaWithCkEditor'
const EditPartnerInfoDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title={
        <p className="heading-7 text-neutral-9">
          Thêm Thông cáo truyền thông mới
        </p>
      }
      placement="right"
      width={640}
      onClose={onClose}
      visible={visible}
      footer={
        <Row justify="end">
          <Space>
            <Button onClick={onClose} className="button-1" type="ghost">
              Hủy
            </Button>
            <Button onClick={onClose} className="button-1" type="ghost">
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
      <div className="mt27">
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
