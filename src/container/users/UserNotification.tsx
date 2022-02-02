import {
  DownloadOutlined,
  EditOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Row, Space, Table, Tabs, Col, Input, Select, Form, Button } from 'antd'
import { useMemo, useState, useCallback } from 'react'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import RegisterEvent from './RegisterEvent'
import RegisterNews from './RegisterNews'

const { TabPane } = Tabs

const tabKeys = {
  REGISTER_NEWS: 'register_news',
  REGISTER_EVENTS: 'register_events',
}

const UserNotificationContainer = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
    tab: withDefault(StringParam, ''),
  })

  const onFinish = useCallback((values) => {}, [])

  return (
    <div>
      <Row gutter={24} justify="space-between">
        <Col xs={24} lg={12}>
          <p className="heading-6">Đăng ký nhận tin tức và lịch sự kiện</p>
        </Col>
        <Col xs={24} lg={12}>
          <Row justify="end">
            <Button className="redButton button-1">Gửi email</Button>
          </Row>
        </Col>
      </Row>

      <div className="mt32">
        <Space className="ml16">
          <DownloadOutlined style={{ color: '#0b4582' }} />
          <p className="button-2">Export</p>
        </Space>
      </div>
      <div className="customContent mt32">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span style={{ fontWeight: 'bold' }}>Đăng ký nhận tin tức</span>
            }
            key={tabKeys.REGISTER_NEWS}
          >
            <RegisterEvent />
          </TabPane>
          <TabPane
            tab={
              <span style={{ fontWeight: 'bold' }}>
                Đăng ký nhận lịch sự kiện
              </span>
            }
            key={tabKeys.REGISTER_EVENTS}
          >
            <RegisterNews
              pageSize={pageSize}
              pageIndex={pageIndex}
              keyword={keyword}
              setParams={setParams}
            />
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default UserNotificationContainer
