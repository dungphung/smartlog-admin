import { Button, Divider, Modal, Row, Space } from 'antd'
import { useState } from 'react'
import TextAreaWithCkEditor from 'src/components/TextAreaWithCkEditor'
import styles from './Policy.module.less'
const Policy = () => {
  const [visibleEditPolicy, setVisibleEditPolicy] = useState(false)
  return (
    <div>
      <p className="heading-6">Điều khoản sử dụng và Chính sách bảo mật</p>
      <div className="customContent mt16">
        <Row justify="space-between">
          <span className="heading-7 text-neutral-9">Điều khoản sử dụng</span>

          <span
            className="sub-title-2 cursor text-primary-5"
            onClick={() => setVisibleEditPolicy(true)}
          >
            Chỉnh sửa
          </span>
        </Row>

        <Divider />

        <Row justify="space-between">
          <span className="heading-7 text-neutral-9">Chính sách bảo mật</span>

          <span
            className="sub-title-2 cursor text-primary-5"
            onClick={() => setVisibleEditPolicy(true)}
          >
            Chỉnh sửa
          </span>
        </Row>
      </div>

      <Modal
        className={styles.modalEditPolicy}
        footer={
          <Row justify="end">
            <Space>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
            </Space>
          </Row>
        }
        visible={visibleEditPolicy}
        onCancel={() => setVisibleEditPolicy(false)}
        width={'100%'}
        title={
          <span className="heading-7 text-neutral-9">
            Chỉnh sửa điều khoản sử dụng
          </span>
        }
      >
        <div className="mb16 mt16">
          <span className="sub-title-1 ">Nội dung</span>
        </div>

        <TextAreaWithCkEditor onSubmitData={() => {}} />
      </Modal>

      <Modal
        className={styles.modalEditPolicy}
        footer={
          <Row justify="end">
            <Space>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
              <Button>Hủy</Button>
            </Space>
          </Row>
        }
        visible={visibleEditPolicy}
        onCancel={() => setVisibleEditPolicy(false)}
        width={'100%'}
        title={
          <span className="heading-7 text-neutral-9">
            Chỉnh sửa điều khoản sử dụng
          </span>
        }
      >
        <div className="mb16 mt16">
          <span className="sub-title-1 ">Nội dung</span>
        </div>

        <TextAreaWithCkEditor onSubmitData={() => {}} />
      </Modal>
    </div>
  )
}

export default Policy
