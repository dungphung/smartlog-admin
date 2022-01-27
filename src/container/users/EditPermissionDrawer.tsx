import { Drawer, Space, Button } from 'antd'

const EditStatusDrawer = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={() => {}}
      visible={visible}
      footer={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default EditStatusDrawer
