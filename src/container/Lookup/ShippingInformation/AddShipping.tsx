import {
  CiCircleOutlined,
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SwapOutlined,
  SwitcherOutlined,
} from '@ant-design/icons'
import {
  Avatar,
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Upload,
} from 'antd'
import styles from './AddShipping.module.less'

const AddShipping = ({ visible, onCancel }) => {
  return (
    <div>
      <Modal
        className={styles.addShipping}
        footer={
          <Row justify="end">
            <Space>
              <Button className="button-1" type="text" onClick={onCancel}>
                Hủy
              </Button>
              <Button className="button-1 redButton">Lưu</Button>
            </Space>
          </Row>
        }
        visible={visible}
        onCancel={onCancel}
        width={'100%'}
        title={<span className="heading-7 text-neutral-9">Thêm hãng tàu</span>}
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
              <Col xs={16}>
                <Form.Item name="name" label="Tên">
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={8}>
                <Form.Item name="website" label="Website">
                  <Input />
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
              <Input.TextArea rows={5} />
            </Form.Item>
            <Divider />
            <Form.List name="sights">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        {...field}
                        name={[field.name, 'from']}
                        rules={[{ required: true, message: 'Bắt buộc' }]}
                      >
                        <Input
                          style={{ width: 370 }}
                          placeholder="Nhập điểm đii"
                        />
                      </Form.Item>
                      <SwapOutlined
                        style={{ marginLeft: 16, marginRight: 16 }}
                      />
                      <Form.Item
                        {...field}
                        name={[field.name, 'to']}
                        rules={[{ required: true, message: 'Bắt buộc' }]}
                      >
                        <Input
                          style={{ width: 370 }}
                          placeholder="Nhập điểm đến"
                        />
                      </Form.Item>

                      <DeleteOutlined
                        style={{ color: '#8B8B8B' }}
                        onClick={() => remove(field.name)}
                      />
                    </Space>
                  ))}
                  <div>
                    <Form.Item>
                      <div>
                        <Space>
                          <PlusCircleOutlined
                            style={{
                              color: 'rgba(0, 0, 0, 0.85)',
                              fontSize: 20,
                            }}
                          />
                          <span
                            onClick={() => add()}
                            className="ub-title-2 text-primary-5  cursor"
                          >
                            Thêm điểm đến và điểm đi
                          </span>
                        </Space>
                      </div>
                    </Form.Item>
                  </div>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default AddShipping
