import {
  ArrowLeftOutlined,
  DeleteOutlined,
  DotChartOutlined,
  FolderOutlined,
  MoreOutlined,
  StarOutlined,
  TagOutlined,
} from '@ant-design/icons'
import { Avatar, Col, Divider, Popover, Row, Space } from 'antd'
import { useState } from 'react'
import ArrowDown from 'src/assets/svgs/ArrowDown'
import ReplyIcon from 'src/assets/svgs/Reply'
import ForwardIcon from 'src/assets/svgs/Forward'
import styles from './EmailDetail.module.less'

const DetailSender = () => {
  return (
    <Popover
      placement="bottom"
      style={{ padding: 0 }}
      content={
        <div style={{ padding: '8px 16px' }}>
          <div style={{ marginBottom: 8 }}>
            <p className="sub-title-1 cursor">
              <span style={{ color: '#8B8B8B' }}>Từ:</span>{' '}
              quyen.thai@example.com
            </p>
          </div>
          <div style={{ marginBottom: 8 }}>
            <p className="sub-title-1 cursor">
              <span style={{ color: '#8B8B8B' }}>Đến:</span>{' '}
              quyen.thai@example.com
            </p>
          </div>
          <div>
            <p className="sub-title-1 cursor">
              <span style={{ color: '#8B8B8B' }}>Ngày:</span> 4:25 AM 23 Dec
              2021
            </p>
          </div>
        </div>
      }
      trigger="hover"
    >
      <ArrowDown />
    </Popover>
  )
}

const ActionList = () => {
  return (
    <Popover
      placement="bottom"
      style={{ padding: 0 }}
      content={
        <div style={{ padding: '8px 16px' }}>
          <div style={{ marginBottom: 8 }}>
            <Space>
              <ReplyIcon />
              <p className="sub-title-1 cursor">Trả lời</p>
            </Space>
          </div>
          <div style={{ marginBottom: 8 }}>
            <Space>
              <ForwardIcon />
              <p className="sub-title-1 cursor">Chuyển tiếp</p>
            </Space>
          </div>
          <div>
            <Space>
              <DeleteOutlined />
              <p className="sub-title-1 cursor">Xóa</p>
            </Space>
          </div>
        </div>
      }
      trigger="hover"
    >
      <MoreOutlined />
    </Popover>
  )
}

const EmailDetail = () => {
  const [visibleReply, setVisibleReply] = useState(false)
  const [visibleForward, setVisibleForward] = useState(false)

  return (
    <div className={styles.emailDetail}>
      <Row justify="space-between" className={styles.headerContainer}>
        <Space>
          <ArrowLeftOutlined />
          <span className={styles.title}>Chủ đề email</span>
        </Space>

        <Space>
          <StarOutlined />
          <FolderOutlined />
          <TagOutlined />
          <DeleteOutlined />
        </Space>
      </Row>

      <div className={styles.content}>
        <Row align="middle">
          <Avatar src="https://joeschmoe.io/api/v1/random" size={56} />
          <Col className="ml16" flex={1}>
            <p className={styles.name}>Quyen Thai</p>
            <Row justify="space-between">
              <Space align="end">
                <span className={styles.email}>quyen.thai@example.com</span>
                <DetailSender />
              </Space>

              <Space>
                <span className={styles.date}>23 Tháng 12</span>
                <ActionList />
              </Space>
            </Row>
          </Col>
        </Row>

        <Divider />
        <div
          className={`${styles.contentHTML} ck-content`}
          dangerouslySetInnerHTML={{
            __html: `Hey Quyen, <br/>

bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto Chelonia

Freudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose`,
          }}
        />
      </div>

      {!visibleReply && (
        <div className={styles.action_1}>
          <p
            className={styles.textInside}
            onClick={() => {
              setVisibleReply(true)
            }}
          >
            Bấm vào đây để{' '}
            <span className="text-primary-5 font-600">Trả lời</span> hoặc{' '}
            <span className="text-primary-5 font-600">Chuyển tiếp</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default EmailDetail
