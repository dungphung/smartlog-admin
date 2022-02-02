import { Form, Row, Col, Input, Space, Button } from 'antd'
import { useCallback } from 'react'
const ContactContainer = () => {
  const [form] = Form.useForm()

  const onFinish = useCallback(() => {}, [])

  return (
    <>
      <p className="heading-6">Liên hệ</p>
      <div className="customContentFitSize mt16">
        <p className="heading-7 text-neutral-9">Thông tin liên hệ</p>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="title" label="Tiêu đề" className="mt24">
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Nội dung">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="content" label="Địa chỉ email liên hệ">
            <Input />
          </Form.Item>
          <Space>
            <Button className="redButton button-1">Lưu</Button>
            <Button className="button-1">Hủy</Button>
          </Space>
        </Form>
      </div>
    </>
  )
}

export default ContactContainer
