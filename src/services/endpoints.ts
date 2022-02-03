const LOGIN = 'api/public/auth/login'
const REGISTER = 'api/public/auth/register'
const API_FORGET_PASSWORD = 'api/public/auth/forgot-password'

const CATEGORY_NEWS_LIST = 'api/public/news-category/list'

//NEWs
const API_POST_LIST_DEPUTE = 'api/public/news/list-depute'
const API_POST_LIST_NEW = 'api/public/news/list-new'
const API_POST_CREATE = 'api/business/admin/create-post'
const API_LIST_NEWS_BY_CATEGORY = 'api/public/news/list-by-category'
const API_GET_LIST_SOURCE = 'api/public/master-data/list-news-source'

//Partner
const API_PARTNER_LIST = 'api/public/partner/list'
const API_PARTNER_CREATE = 'api/public/partner/create'
const API_PARTNER_LIST_COMPANY = 'api/public/partner/list-company'
const API_PARTNER_REQUEST_LIST = 'api/public/request/list'
const API_PARTNER_CREATE_REQUEST = 'api/business/admin/create-request'

//PORT - cang
const API_PORT_LIST = 'api/public/port/list'
const API_LIST_PORT_LOCATION = 'api/public/port/list-port-location'

//POST - Bài viết
const API_GET_POST_LIST = 'api/public/post/list'
const API_GET_POST_FEATURE = 'api/public/post/feature'
const API_GET_POST_CATEGORY = 'api/public/post-category/list'

// Master data control
const API_MASTER_DATA_LIST_BUSINESS_TYPE =
  'api/public/master-data/list-business-type'

//
const API_REQUEST_COUNT_VIEW = 'api/public/request/count-view'

// get rules
const API_GET_LIST_RULES = 'api/public/master-data/search-by-statute'

//get usefull links
const API_GET_USEFUL_LINK = 'api/public/master-data/search-by-useful-links'

const API_GET_DETAIL_POST = 'api/public/post/detail'

const API_CREATE_COMMENT = 'api/business/admin/comment-by-post'

const API_GET_SEA_PORT = 'api/public/port/list-info'

const API_CONTACT_US = 'api/public/master-data/contact-us'

export {
  LOGIN,
  REGISTER,
  API_FORGET_PASSWORD,
  CATEGORY_NEWS_LIST,
  API_POST_LIST_DEPUTE,
  API_POST_LIST_NEW,
  API_POST_CREATE,
  API_PARTNER_LIST,
  API_PARTNER_CREATE,
  API_PORT_LIST,
  API_GET_POST_LIST,
  API_GET_POST_FEATURE,
  API_PARTNER_LIST_COMPANY,
  API_GET_POST_CATEGORY,
  API_PARTNER_REQUEST_LIST,
  API_LIST_NEWS_BY_CATEGORY,
  API_LIST_PORT_LOCATION,
  API_GET_LIST_SOURCE,
  API_MASTER_DATA_LIST_BUSINESS_TYPE,
  API_PARTNER_CREATE_REQUEST,
  API_REQUEST_COUNT_VIEW,
  API_GET_LIST_RULES,
  API_GET_USEFUL_LINK,
  API_GET_DETAIL_POST,
  API_CREATE_COMMENT,
  API_GET_SEA_PORT,
  API_CONTACT_US,
}
