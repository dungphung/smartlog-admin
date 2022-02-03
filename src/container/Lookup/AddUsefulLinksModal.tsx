import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Upload,
} from 'antd'
import styles from './AddUsefulLinksModal.module.less'

const AddUsefulLinksModal = ({ visible, onCancel }) => {
  return (
    <div>
      <Modal
        className={styles.addUsefulLinksModal}
        footer={
          <Row justify="end">
            <Space>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
            </Space>
          </Row>
        }
        visible={visible}
        onCancel={onCancel}
        width={'100%'}
        title={
          <span className="heading-7 text-neutral-9">Chỉnh sửa đối tác</span>
        }
      >
        <div className="mb16 mt16">
          <Form layout="vertical">
            <Form.Item
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={() => {}}
            >
              <Row align="middle">
                <Avatar
                  style={{ width: 80, height: 80 }}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button type="text" className="button-1 text-primary-5 ">
                    Thay đổi
                  </Button>
                </Upload>
                <Button type="text" className="button-1">
                  Xóa
                </Button>
              </Row>
            </Form.Item>
            <Divider />

            <Row gutter={24} justify="space-between">
              <Col xs={11}>
                <Form.Item name="name" label="Tên">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={11}>
                <Form.Item name="website" label="Website">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="description" label="Mô tả ngắn">
              <Input.TextArea />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default AddUsefulLinksModal
