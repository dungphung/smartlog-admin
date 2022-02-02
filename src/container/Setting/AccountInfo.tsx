import { Col, Menu, Row } from 'antd'
import BellIcon from 'src/assets/svgs/BellIcon2'
import SettingIco from 'src/assets/svgs/SettingIcon'
import UserIcon from 'src/assets/svgs/UserIcon'
import ChangePasswordIcon from 'src/assets/svgs/ChangePasswordIcon'
import Icon from '@ant-design/icons'
import { StringParam, useQueryParams, withDefault } from 'use-query-params'
import AccountInfoPanel from './component/AccountInfoPanel'
import ChangePasswordPanel from './component/ChangePasswordPanel'
import NotificationPanel from './component/NotificationPanel'
import SettingPanel from './component/SettingPanel'

const TABS = {
  ACCOUNT_INFO: 'account-info',
  CHANGE_PASSWORD: 'change-password',
  NOTIFICATION: 'notification',
  SETTING: 'setting',
}

const AccountInfo = () => {
  const [{ tab }, setParams] = useQueryParams({
    tab: withDefault(StringParam, TABS.ACCOUNT_INFO),
  })

  const TAB_MENU = [
    {
      title: 'Thông tin tài khoản',
      icon: UserIcon,
      key: TABS.ACCOUNT_INFO,
    },
    {
      title: 'Thay đổi mật khẩu',
      icon: ChangePasswordIcon,
      key: TABS.CHANGE_PASSWORD,
    },
    {
      title: 'Thông báo',
      icon: BellIcon,
      key: TABS.NOTIFICATION,
    },
    {
      title: 'Cài đặt',
      icon: SettingIco,
      key: TABS.SETTING,
    },
  ]

  return (
    <div>
      <Row gutter={24}>
        <Col xs={5} className="mt16">
          <Menu
            onClick={(e) => {
              setParams({
                tab: e.key,
              })
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {TAB_MENU.map((item) => {
              return (
                <Menu.Item key={item.key} icon={<Icon component={item.icon} />}>
                  {item.title}
                </Menu.Item>
              )
            })}
          </Menu>
        </Col>

        <Col xs={16}>
          {tab === TABS.ACCOUNT_INFO && <AccountInfoPanel />}
          {tab === TABS.CHANGE_PASSWORD && <ChangePasswordPanel />}
          {tab === TABS.NOTIFICATION && <NotificationPanel />}
          {tab === TABS.SETTING && <SettingPanel />}
        </Col>
      </Row>
    </div>
  )
}

export default AccountInfo
