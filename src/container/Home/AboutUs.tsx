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
  Space,
  Table,
} from 'antd'

const AboutUs = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input.TextArea />
        </Form.Item>
        <Button className="redButton button-1">Lưu</Button>
        <Button className="button-1 ml16">Hủy</Button>
      </Form>
    </div>
  )
}

export default AboutUs
