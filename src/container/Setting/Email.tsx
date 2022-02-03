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

const data = [
  {
    id: 1,
    title: 'Quyen Thai',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim...',
    date: '23 Tháng 12',
    isRead: false,
  },
  {
    id: 2,
    title: 'Quyen Thai',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim...',
    date: '23 Tháng 12',
    isRead: true,
  },
]

const Email = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const loadMoreData = () => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo',
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results])
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div>
      <p className="heading-6">Email</p>

      <div className="customContent mt16">
        <Input.Search placeholder="Tìm kiếm email" />
        <Row style={{ marginTop: 13 }}>
          <Col>
            <Space>
              <Checkbox /> <span className="text-body-1">Chọn tất cả</span>
            </Space>
          </Col>
        </Row>
        <Divider />
        <div
          id="scrollableDiv"
          style={{
            height: 800,
            overflow: 'auto',
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
          >
            <List
              itemLayout="vertical"
              dataSource={data}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.large} size={56} />}
                    title={
                      <Row gutter={24}>
                        <Col xs={18}>
                          <a className="sub-title-2" href="https://ant.design">
                            {item.name.last}
                          </a>
                        </Col>
                        <Col xs={6}>
                          <Row justify="end">
                            <Space>
                              <PaperClipOutlined style={{ color: '#4E4E4E' }} />
                              {true ? (
                                <div
                                  style={{
                                    background: '#F29874',
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                  }}
                                />
                              ) : null}

                              <span
                                style={{ fontWeight: 'normal' }}
                                className="text-body-1"
                              >
                                23 Tháng 12
                              </span>
                            </Space>
                          </Row>
                        </Col>
                      </Row>
                    }
                    description="Chủ đề mail"
                  />
                  <Row gutter={24}>
                    <Col>
                      <Checkbox />
                    </Col>
                    <Col>
                      <StarFilled style={{ color: '#FFDD00' }} />
                    </Col>

                    <Col xs={22}>
                      <span>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim...
                      </span>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default Email
