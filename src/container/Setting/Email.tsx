import {
  PaperClipOutlined,
  StarFilled,
  StarOutlined,
  TagsFilled,
} from '@ant-design/icons'
import {
  List,
  message,
  Avatar,
  Skeleton,
  Divider,
  Space,
  Row,
  Col,
  Checkbox,
  Input,
} from 'antd'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'
import ListEmail from './component/ListEmail'
import EmailDetail from './component/EmailDetail'
const Email = () => {
  const [{ emailId }, setParams] = useQueryParams({
    emailId: withDefault(StringParam, ''),
  })

  return (
    <div>
      <p className="heading-6">Email</p>

      {!emailId && (
        <div className="customContent mt16">
          <>
            <Input.Search placeholder="Tìm kiếm email" />
            <Row style={{ marginTop: 13 }}>
              <Col>
                <Space>
                  <Checkbox /> <span className="text-body-1">Chọn tất cả</span>
                </Space>
              </Col>
            </Row>
            <Divider />
          </>

          <ListEmail setParams={setParams} />
        </div>
      )}
      {emailId && <EmailDetail />}
    </div>
  )
}

export default Email
