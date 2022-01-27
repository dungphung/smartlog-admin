import { Drawer, Space, Button, Form, Select } from 'antd'

const EditStatusDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Chỉnh sửa quyền truy cập"
      placement="right"
      onClose={onClose}
      visible={visible}
      footer={
        <Space>
          <Button className="button-1" onClick={onClose}>
            Hủy
          </Button>
          <Button className="redButton" onClick={onClose}>
            Lưu
          </Button>
        </Space>
      }
    >
      <Form>
        <Form.Item name="status">
          <Select
            defaultValue="lucy"
            style={{ width: '100%' }}
            onChange={() => {}}
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
            <Select.Option value="Yiminghe">yiminghe</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default EditStatusDrawer
