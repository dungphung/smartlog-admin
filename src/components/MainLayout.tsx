import {
  Avatar,
  Badge,
  Button,
  Divider,
  Image,
  Layout,
  Menu,
  Popover,
  Row,
  Space,
  Typography,
} from 'antd'
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
import BellIcon from 'src/assets/svgs/BellIcon'
import styles from './MainLayout.module.less'
import moment from 'moment'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const navigation = [
  {
    key: 'users',
    title: 'Quản lý Tài khoản',
    icon: GroupUserIcon,
    children: [
      {
        key: '/users/manager',
        title: 'Quản lý Người dùng',
        href: '/users/manager',
      },
      {
        key: '/users/notification',
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
        title: 'Cơ hội hợp tác',
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
      {
        href: `/lookup/${LOOKUP_NAVIGATION.LOGISTIC}`,
        title: '3PL, dịch vụ',
        key: `/lookup/${LOOKUP_NAVIGATION.LOGISTIC}`,
      },

      {
        href: `/lookup/${LOOKUP_NAVIGATION.RULES}`,
        title: 'Luật',
        key: `/lookup/${LOOKUP_NAVIGATION.RULES}`,
      },
      {
        href: `/lookup/${LOOKUP_NAVIGATION.USEFUL_LINKS}`,
        title: 'Các liên kết hữu ích',
        key: `/lookup/${LOOKUP_NAVIGATION.USEFUL_LINKS}`,
      },
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
        href: `/setting/account`,
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

const NotificationButton = () => {
  return (
    <Popover
      placement="bottom"
      style={{ padding: 0 }}
      content={
        <div style={{ maxWidth: 450, maxHeight: 580 }}>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <div
                className="user-notification"
                key={item}
                style={{ padding: '8px 12px' }}
              >
                <Typography.Paragraph
                  className="sub-title-1 mb0 text-neutral-9"
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  Sự kiện Triển lãm Quốc tế về{' '}
                  <strong>Công nghiệp Dược phẩm ở Hà Nội</strong> sắp diễn ra
                  vào 06/01/2022 10:42...
                </Typography.Paragraph>
                <p className="caption-1 text-neutral-7">{moment().fromNow()}</p>
              </div>
            )
          })}

          {true && (
            <Button
              style={{
                width: '100%',
                height: 'auto',
                background: '#F2F2F2',
                borderColor: '#F2F2F2',
              }}
              className="button-see-all-notification "
              onClick={() => {}}
            >
              <span className="sub-title-2">Xem tất cả thông báo</span>
            </Button>
          )}
        </div>
      }
      trigger="hover"
    >
      <Badge dot>
        <BellIcon />
      </Badge>
    </Popover>
  )
}

const MainLayout: React.FC = ({ children }) => {
  const { pathname } = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [keys, setKeys] = useState([pathname])
  const navigate = useNavigate()
  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  const selectedKeys = useMemo(() => {
    return [pathname]
  }, [pathname])

  return (
    <div className={styles.container}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className={styles.slideCustom} width={260}>
          <div className="logo">
            <Image
              style={{ marginTop: 13 }}
              preview={false}
              src="/svgs/Logo.svg"
            />
          </div>

          <div className={styles.infoAdmin}>
            <p className={styles.name}>Quyen Thai</p>
            <p className={styles.role}>admin</p>
          </div>
          <Divider />
          <Menu
            mode="inline"
            defaultOpenKeys={[pathname]}
            selectedKeys={selectedKeys}
            openKeys={keys}
            onOpenChange={(value) => setKeys(value)}
          >
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
            <Row justify="end" align="middle">
              <div>
                <SearchOutlined style={{ fontSize: 20, marginTop: 5 }} />
              </div>
              <div className={styles.ml15} style={{ marginTop: 5 }}>
                <NotificationButton />
              </div>

              <div className={styles.ml15}>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
              </div>
            </Row>
          </Header>
          <Content style={{ margin: '15px 30px' }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default MainLayout
