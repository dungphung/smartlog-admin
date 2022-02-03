import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Space,
  Upload,
} from 'antd'
import styles from './AddRulesModal.module.less'

const AddRuleModal = ({ visible, onCancel }) => {
  return (
    <div>
      <Modal
        className={styles.addRuleModal}
        footer={
          <Row justify="end">
            <Space>
              <Button className="button-1" type="text" onClick={onCancel}>
                Hủy
              </Button>
              <Button className="button-1 redButton">Thêm</Button>
            </Space>
          </Row>
        }
        visible={visible}
        onCancel={onCancel}
        width={'100%'}
        title={
          <span className="heading-7 text-neutral-9">
            Thêm liên kết hữu ích
          </span>
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
                  style={{ width: 220, height: 120 }}
                  src="https://joeschmoe.io/api/v1/random"
                />
                <Space className="ml16">
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button type="text" className="button-1 redButton">
                      Thay đổi
                    </Button>
                  </Upload>
                  <Button type="text" className="button-2">
                    Xóa
                  </Button>
                </Space>
              </Row>
            </Form.Item>
            <Divider />

            <Row gutter={24} justify="space-between">
              <Col xs={8}>
                <Form.Item name="name" label="Tên">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={8}>
                <Form.Item name="website" label="Website">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={8}>
                <Form.Item name="source" label="Nguồn">
                  <Radio.Group>
                    <Radio value="UC">Úc</Radio>
                    <Radio value="VIETNAM">VIệt Nam</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24} justify="space-between">
              <Col xs={8}>
                <Form.Item name="address" label="Địa chỉ">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={8}>
                <Form.Item name="phone" label="Số điện thoại">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={8}>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="description" label="Mô tả ngắn">
              <Input.TextArea rows={8} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default AddRuleModal
