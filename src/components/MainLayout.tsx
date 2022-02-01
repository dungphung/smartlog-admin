import { Avatar, Badge, Divider, Image, Layout, Menu, Row, Space } from 'antd'
import { useState } from 'react'
import Icon, {
  NotificationOutlined,
  PieChartOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { TABS as PARTNERS_TABS } from 'src/constants/partners'
import { navigation as LOOKUP_NAVIGATION } from 'src/constants/look-up'
import GroupUserIcon from 'src/assets/svgs/GroupUserIcon'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const navigation = [
  {
    key: 'users',
    title: 'Quản lý Tài khoản',
    children: [
      {
        key: 'users-manager',
        title: 'Quản lý Người dùng',
        href: '/users/manager',
      },
      {
        key: 'users-notification',
        title: 'Nhận tin tức và sự kiện',
        href: '/users/notification',
      },
    ],
  },

  {
    key: 'partners',
    title: 'Tìm đối tác',
    icon: '/svgs/group-user-icon.svg',
    children: [
      {
        href: `/partners?tab=${PARTNERS_TABS.LIST_PARTNER}`,
        title: 'Danh sách đối tác',
        key: PARTNERS_TABS.LIST_PARTNER,
      },
      {
        href: `/partners?tab=${PARTNERS_TABS.LIST_REQUEST}`,
        title: 'Danh sách yêu cầu',
        key: PARTNERS_TABS.LIST_REQUEST,
      },
      {
        href: `/partners?tab=${PARTNERS_TABS.LIST_COMMENT}`,
        title: 'Danh sách bình luận',
        key: PARTNERS_TABS.LIST_COMMENT,
      },
      {
        href: `/partners?tab=${PARTNERS_TABS.PARTNERS_EDIT}`,
        title: 'Chỉnh sửa',
        key: PARTNERS_TABS.PARTNERS_EDIT,
      },
    ],
  },
  {
    key: 'lookup',
    title: 'Tra cứu',
    children: [
      {
        href: `/lookup/${LOOKUP_NAVIGATION.SHIPPING_INFORMATION}`,
        title: 'Thông tin vận chuyển',
        key: LOOKUP_NAVIGATION.SHIPPING_INFORMATION,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.PORT_INFORMATION}`,
        title: 'Thông tin Cảng',
        key: LOOKUP_NAVIGATION.PORT_INFORMATION,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.RULES}`,
        title: 'Luật',
        key: LOOKUP_NAVIGATION.RULES,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.USEFUL_LINKS}`,
        title: 'Các liên kết hữu ích',
        key: LOOKUP_NAVIGATION.USEFUL_LINKS,
      },
    ],
  },

  {
    key: 'forum',
    title: 'Diễn đàn',
    href: '/forum',
  },
  {
    key: 'notification',
    title: 'Thông cáo',
    children: [
      {
        href: `/lookup/${LOOKUP_NAVIGATION.SHIPPING_INFORMATION}`,
        title: 'Thông tin vận chuyển',
        key: LOOKUP_NAVIGATION.SHIPPING_INFORMATION,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.PORT_INFORMATION}`,
        title: 'Thông tin Cảng',
        key: LOOKUP_NAVIGATION.PORT_INFORMATION,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.RULES}`,
        title: 'Luật',
        key: LOOKUP_NAVIGATION.RULES,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.USEFUL_LINKS}`,
        title: 'Các liên kết hữu ích',
        key: LOOKUP_NAVIGATION.USEFUL_LINKS,
      },
    ],
  },
  {
    key: 'contact',
    title: 'Liên hệ',
    href: '/news',
  },
  {
    key: 'email',
    title: 'Email',
    href: '/news',
  },
  {
    key: 'setting',
    title: 'Cài đặt',
    href: '/contact',
  },
]

const MainLayout: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: 'white', borderRight: '1px solid #EBEBEB' }}>
        <div className="logo">
          <Image style={{ paddingLeft: 30 }} src="/svgs/Logo.svg" />
        </div>
        <Divider />
        <Menu mode="inline">
          {navigation.map((item) => {
            if (!item.children) {
              return (
                <Menu.Item
                  key={item.key}
                  icon={<Icon component={GroupUserIcon} />}
                  onClick={() => navigate(item.href)}
                >
                  {item.title}
                </Menu.Item>
              )
            }

            return (
              <SubMenu
                key={item.key}
                icon={<UserOutlined />}
                title={item.title}
              >
                {item.children?.map((child) => {
                  return (
                    <Menu.Item
                      key={child.key}
                      onClick={() => navigate(child.href)}
                    >
                      {child.title}
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ background: '#FAFAFA' }}>
        <Header
          className="site-layout-background"
          style={{
            padding: '0 30px',
            background: 'white',
            boxShadow: 'inset 0px -1px 0px #EBEBEB',
          }}
        >
          <Row justify="end">
            <Space>
              <SearchOutlined />
              <Badge dot>
                <NotificationOutlined />
              </Badge>

              <Avatar
                style={{ backgroundColor: '#87d068' }}
                icon={<UserOutlined />}
              />
            </Space>
          </Row>
        </Header>
        <Content style={{ margin: '15px 30px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout
