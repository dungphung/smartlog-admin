import { Avatar, Divider, Image, Layout, Menu, Row, Space } from 'antd'
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
    key: 'common',
    title: 'TỔNG QUAN',
    children: [
      {
        key: 'dashboard',
        title: 'Bảng điều khiển',
        href: '/dashboard',
      },
      {
        key: 'analysis',
        title: 'Phân tích',
        href: '/analysis',
      },
    ],
  },
  {
    key: 'manager',
    title: 'QUẢN LÝ',
    children: [
      {
        key: 'users',
        title: 'Người dùng',
        children: [
          {
            key: 'users-list',
            title: 'Danh sách',
            href: '/users/list',
          },
          {
            key: 'users-add',
            title: 'Thêm mới',
            href: '/users/add',
          },
          {
            key: 'users-view',
            title: 'Xem',
            href: '/users/view',
          },
          {
            key: 'users-edit',
            title: 'Chỉnh sửa',
            href: '/users/edit',
          },
        ],
      },
      {
        key: 'home',
        title: 'Trang chủ',
        href: '/home',
      },
      {
        key: 'intro',
        title: 'Giới thiệu',
        href: '/intro',
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
        key: 'news',
        title: 'Tin tức',
        href: '/news',
      },
      {
        key: 'contact',
        title: 'Liên hệ',
        href: '/contact',
      },
    ],
  },
  {
    key: 'setting',
    title: 'CÀI ĐẶT',
    children: [
      {
        key: 'permission',
        title: 'Phân quyền',
        href: '/permission',
      },
      {
        key: 'email',
        title: 'Email',
        href: '/email',
      },
    ],
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
        {navigation.map((item) => {
          return (
            <div key={item.key}>
              <p className="text-body-2 ml16">{item.title}</p>
              <Menu mode="inline">
                {item.children.map((child) => {
                  if (child.children) {
                    return (
                      <SubMenu
                        key={child.key}
                        icon={<UserOutlined />}
                        title={child.title}
                      >
                        {child.children.map((subChild) => {
                          return (
                            <Menu.Item
                              key={subChild.key}
                              onClick={() => navigate(subChild.href)}
                            >
                              {subChild.title}
                            </Menu.Item>
                          )
                        })}
                      </SubMenu>
                    )
                  }

                  return (
                    <Menu.Item
                      key={child.key}
                      icon={<Icon component={GroupUserIcon} />}
                      onClick={() => navigate(child.href)}
                    >
                      {child.title}
                    </Menu.Item>
                  )
                })}
              </Menu>
              <Divider />
            </div>
          )
        })}
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
              <NotificationOutlined />
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
