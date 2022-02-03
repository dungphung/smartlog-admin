import { PlusOutlined } from '@ant-design/icons'
import { Button, Form, Row, Space, Tabs, Input, Col } from 'antd'

const Logistic = () => {
  return (
    <div>
      <Row justify="space-between">
        <p className="heading-6">
          Tra cứu doanh nghiệp cung cấp dịch vụ logistics
        </p>

        <Space>
          <Button icon={<PlusOutlined />} className="redButton button-1">
            Thêm
          </Button>
          <Button className="button-1" type="text">
            Xóa
          </Button>
        </Space>
      </Row>
      <div className="customContent">
        <p className="heading-7">Liên kết nguồn</p>

        <Form layout="vertical" className="mt16">
          <Row gutter={24} justify="space-between">
            <Col xs={11}>
              <Form.Item name="fromVN1" label="Phía Việt Nam">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={11}>
              <Form.Item name="fromUC1" label="Phía Úc">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default Logistic
