import { Avatar, Badge, Divider, Image, Layout, Menu, Row, Space } from 'antd'
import { useMemo, useState } from 'react'
import Icon, {
  NotificationOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { TABS as PARTNERS_TABS } from 'src/constants/partners'
import { navigation as LOOKUP_NAVIGATION } from 'src/constants/look-up'
import GroupUserIcon from 'src/assets/svgs/GroupUserIcon'
import FindPartnerIcon from 'src/assets/svgs/FindPartnerIcon'
import LookupIcon from 'src/assets/svgs/LookupIcon'
import ForumIcon from 'src/assets/svgs/ForumIcon'
import NotificationLayoutIcon from 'src/assets/svgs/NotificationLayoutIcon'
import SettingIcon from 'src/assets/svgs/SettingIcon'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const navigation = [
  {
    key: 'users',
    title: 'Quản lý Tài khoản',
    icon: GroupUserIcon,
    children: [
      {
        key: 'users/manager',
        title: 'Quản lý Người dùng',
        href: '/users/manager',
      },
      {
        key: 'users/notification',
        title: 'Nhận tin tức và sự kiện',
        href: '/users/notification',
      },
    ],
  },

  {
    key: 'partners',
    title: 'Tìm đối tác',
    icon: FindPartnerIcon,
    children: [
      {
        href: `/partners/${PARTNERS_TABS.LIST_PARTNER}`,
        title: 'Danh sách đối tác',
        key: `/partners/${PARTNERS_TABS.LIST_PARTNER}`,
      },
      {
        href: `/partners/${PARTNERS_TABS.LIST_REQUEST}`,
        title: 'Danh sách yêu cầu',
        key: `/partners/${PARTNERS_TABS.LIST_REQUEST}`,
      },
    ],
  },
  {
    key: 'lookup',
    title: 'Tra cứu',
    icon: LookupIcon,
    children: [
      {
        href: `/lookup/${LOOKUP_NAVIGATION.SHIPPING_INFORMATION}`,
        title: 'Thông tin vận chuyển',
        key: `/lookup/${LOOKUP_NAVIGATION.SHIPPING_INFORMATION}`,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.PORT_INFORMATION}`,
        title: 'Thông tin Cảng',
        key: `/lookup/${LOOKUP_NAVIGATION.PORT_INFORMATION}`,
      },
      // {
      //   href: `/lookup/${LOOKUP_NAVIGATION.RULES}`,
      //   title: 'Luật',
      //   key: LOOKUP_NAVIGATION.RULES,
      // },
      // {
      //   href: `/lookup/${LOOKUP_NAVIGATION.USEFUL_LINKS}`,
      //   title: 'Các liên kết hữu ích',
      //   key: LOOKUP_NAVIGATION.USEFUL_LINKS,
      // },
    ],
  },

  {
    key: '/forum',
    title: 'Diễn đàn',
    icon: ForumIcon,
    href: '/forum',
  },
  {
    key: '/notification',
    title: 'Thông cáo',
    icon: NotificationLayoutIcon,
    children: [
      {
        href: `/notification/posted`,
        title: 'Danh sách đã đăng',
        key: `/notification/posted`,
      },
      {
        href: `/notification/draft`,
        title: 'Danh sách lưu nháp',
        key: `/notification/draft`,
      },
    ],
  },

  {
    key: 'setting',
    title: 'Cài đặt',
    href: '/setting',
    icon: SettingIcon,
    children: [
      {
        href: `setting/account`,
        title: 'Tài khoản',
        key: `/setting/account`,
      },
      {
        href: `/setting/contact`,
        title: 'Liên hệ',
        key: `/setting/contact`,
      },
      {
        href: `/setting/email`,
        title: 'Email',
        key: `/setting/email`,
      },
      {
        href: `/setting/policy`,
        title: 'Chính sách điều khoản',
        key: `/setting/policy`,
      },
      {
        href: `/setting/footer`,
        title: 'Footer',
        key: `/setting/footer`,
      },
      {
        href: `/setting/intro`,
        title: 'Giới thiệu',
        key: `/setting/intro`,
      },
    ],
  },
]

const MainLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  console.log(pathname)

  // const keyName = useMemo(() => {
  //   const
  // }, [pathname])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        style={{ background: 'white', borderRight: '1px solid #EBEBEB' }}
        width={260}
      >
        <div className="logo">
          <Image style={{ paddingLeft: 30 }} src="/svgs/Logo.svg" />
        </div>
        <Divider />
        <Menu mode="inline" defaultOpenKeys={[pathname]}>
          {navigation.map((item) => {
            if (!item.children) {
              return (
                <Menu.Item
                  key={item.key}
                  icon={<Icon component={item.icon} />}
                  onClick={() => navigate(item.href)}
                >
                  {item.title}
                </Menu.Item>
              )
            }

            return (
              <SubMenu
                key={item.key}
                icon={<Icon component={item.icon} />}
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
