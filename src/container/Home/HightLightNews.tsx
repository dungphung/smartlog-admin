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

const HightLightNews = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item label="Chuyên mục tin tức 1">
              <Select>
                <Select.Option value="demo">Xuất - Nhập khẩu</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={16}>
            <Form.Item label="Link bài viết 1">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item label="Chuyên mục tin tức 1">
              <Select>
                <Select.Option value="demo">Xuất - Nhập khẩu</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={16}>
            <Form.Item label="Link bài viết 1">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={8}>
            <Form.Item label="Chuyên mục tin tức 1">
              <Select>
                <Select.Option value="demo">Xuất - Nhập khẩu</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={16}>
            <Form.Item label="Link bài viết 1">
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

export default HightLightNews
