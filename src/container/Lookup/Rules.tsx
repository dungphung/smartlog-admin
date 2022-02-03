import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Row, Space, Table } from 'antd'
import { useCallback, useState } from 'react'
import useRules from 'src/hooks/Lookup/useRules'
import {
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from 'use-query-params'
import styles from './Rules.module.less'

const Rules = () => {
  const [{ pageIndex, pageSize, order, keyword }, setParams] = useQueryParams({
    pageSize: withDefault(NumberParam, 10),
    pageIndex: withDefault(NumberParam, 1),
    order: withDefault(StringParam, ''),
    keyword: withDefault(StringParam, ''),
  })

  const { data, loading, refetch } = useRules({
    keyword,
    locationType: 'VIETNAM',
  })

  const columns = [
    {
      title: '',
      key: 'image',
      dataIndex: 'image',
      render: (src) => {
        return <img src={src} style={{ width: 70 }} />
      },
    },
    {
      title: 'Tên website',
      dataIndex: 'name',
    },
    {
      title: 'Nguồn',
      dataIndex: 'locationType',
    },
    {
      title: 'Địa chỉ website',
      dataIndex: 'website',
      width: 250,
      render: (text) => <span className={styles.websiteText}>{text}</span>,
    },
    {
      title: 'Mô tả ngắn',
      dataIndex: 'description',
      width: 500,
    },
    {
      title: 'Action',
      render: () => {
        return (
          <Space size="middle">
            <EditOutlined />
            <DeleteOutlined style={{ color: '#D4351C' }} />
          </Space>
        )
      },
    },
  ]

  const onSelectChange = useCallback(() => {}, [])

  return (
    <div className={styles.container}>
      <Row justify="space-between">
        <p className="heading-6">Tra cứu luật</p>

        <Space>
          <Button icon={<PlusOutlined />} className="redButton button-1">
            Thêm
          </Button>
          <Button className="button-1" type="text">
            Xóa
          </Button>
        </Space>
      </Row>
      <div className="customContent mt32">
        <p className="heading-7 text-neutral-9">
          Danh sách website tra cứu Luật
        </p>
        <Table
          loading={loading}
          scroll={{ x: 1600 }}
          className="components-table-demo-nested mt32"
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize,
            current: pageIndex,
            total: 85,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
        />
      </div>
    </div>
  )
}

export default Rules
