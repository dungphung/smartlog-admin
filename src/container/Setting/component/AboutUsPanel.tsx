import { Button, Form, Row, Space } from 'antd'
import React from 'react'
import TextAreaWithCkEditor from 'src/components/TextAreaWithCkEditor'

const AboutUsPanel = () => {
  return (
    <div>
      <Form layout="vertical">
        <Form.Item name="content" label="Nội dung">
          <TextAreaWithCkEditor onSubmitData={() => {}} />
        </Form.Item>
      </Form>
      <Row>
        <Space>
          <Button className="redButton button-1">Lưu</Button>
          <Button className="button-1">Hủy</Button>
        </Space>
      </Row>
    </div>
  )
}

export default AboutUsPanel
