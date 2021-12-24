import { DeleteOutlined, DownOutlined, EditOutlined } from '@ant-design/icons'
import {
  Badge,
  Button,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
} from 'antd'

const HightLightPost = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 1">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 2">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 3">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 4">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 5">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 6">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={8}>
            <Form.Item label="Link Bài viết đề cử 7">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Button className="redButton button-1">Lưu</Button>
        <Button className="button-1 ml16">Hủy</Button>
      </Form>
    </div>
  )
}

export default HightLightPost
