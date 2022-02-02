import { Button, Col, Collapse, Divider, Form, Input, Row, Space } from 'antd'

const { Panel } = Collapse

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const GroupItem = () => {
  return (
    <>
      <Form.Item name="nameGroup1" label="Tên nhóm">
        <Input />
      </Form.Item>
      <Row className="mt16" justify="space-between">
        <Col xs={11}>
          <Form.Item name="nameLink1" label="Tên liên kết">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={11}>
          <Form.Item name="nameLink1" label="Link">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row className="mt16" justify="space-between">
        <Col xs={11}>
          <Form.Item name="nameLink2" label="Tên liên kết">
            <Input />
          </Form.Item>
        </Col>
        <Col xs={11}>
          <Form.Item name="nameLink2" label="Link">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

const FooterContainer = () => {
  return (
    <div>
      <p className="heading-6">Footer</p>
      <div className="customContent mt16">
        <Form layout="vertical">
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel
              header={
                <span className="heading-7 text-neutral-9">
                  Nhóm liên kết 1
                </span>
              }
              key="1"
            >
              <GroupItem />
            </Panel>
            <Panel
              header={
                <span className="heading-7 text-neutral-9">
                  Nhóm liên kết 2
                </span>
              }
              key="2"
            >
              <GroupItem />
            </Panel>
            <Panel
              header={
                <span className="heading-7 text-neutral-9">
                  Nhóm liên kết 3
                </span>
              }
              key="3"
            >
              <GroupItem />
            </Panel>
            <Panel
              header={
                <span className="heading-7 text-neutral-9">
                  Nhóm liên kết 4
                </span>
              }
              key="3"
            >
              <GroupItem />
            </Panel>
          </Collapse>
          <Divider />
          <Row justify="end">
            <Space>
              <Button className="redButton button-1">Lưu</Button>
              <Button className="button-1">Hủy</Button>
            </Space>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default FooterContainer
