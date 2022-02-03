import { http } from './client'
import {
  REGISTER,
  LOGIN,
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
  API_GET_LIST_RULES,
  API_GET_USEFUL_LINK,
  API_FORGET_PASSWORD,
  API_GET_DETAIL_POST,
  API_CREATE_COMMENT,
  API_GET_SEA_PORT,
  API_CONTACT_US,
} from './endpoints'

export const API = {
  login: (variables) => http.post(LOGIN, variables),
  forgetPassword: (variables) => http.post(API_FORGET_PASSWORD, variables),
  register: (variables: {
    user: {
      email: string
      firstName: string
      lastName: string
      password: string
    }
    company: {
      taxNumber: string
      name: string
      foundedYear: number
      numberOfEmployees: number
      description: string
      website: string
      businessCode: string
      email: string
      phone: string
    }
  }) => http.post(REGISTER, variables),
  categoryNewList: () => http.get(CATEGORY_NEWS_LIST),
  getPostListDepute: () => http.get(API_POST_LIST_DEPUTE),
  getPostListNew: () => http.get(API_POST_LIST_NEW),
  createPostNew: (variables) => http.post(API_POST_CREATE, variables),
  partnerList: () => http.get(API_PARTNER_LIST),
  partnerCreate: http.post.bind(API_PARTNER_CREATE),
  getPortList: (variables) => http.post(API_PORT_LIST, variables),
  getPostList: (variables) => http.post(API_GET_POST_LIST, variables),
  getPostFeature: (variables) => http.post(API_GET_POST_FEATURE, variables),
  getPartnerListCompany: (variables) =>
    http.post(API_PARTNER_LIST_COMPANY, variables),
  getPostCategory: () => http.get(API_GET_POST_CATEGORY),
  getPartnerRequestList: (variables) =>
    http.post(API_PARTNER_REQUEST_LIST, variables),
  getListNewsByCategory: (variables) =>
    http.post(API_LIST_NEWS_BY_CATEGORY, variables),
  getListPortLocation: (variables) =>
    http.get(API_LIST_PORT_LOCATION, {
      params: variables,
    }),
  getListNewsSource: () => http.get(API_GET_LIST_SOURCE),
  getMasterDataListBusinessType: () =>
    http.get(API_MASTER_DATA_LIST_BUSINESS_TYPE),
  createPartnerRequest: (variables) =>
    http.post(API_PARTNER_CREATE_REQUEST, variables),

  getListRules: (variables) =>
    http.get(API_GET_LIST_RULES, {
      params: variables,
    }),
  getListUseFulLinks: (variables) =>
    http.get(API_GET_USEFUL_LINK, {
      params: variables,
    }),
  getDetailPost: (variables) => http.post(API_GET_DETAIL_POST, variables),
  postComment: (variables) => http.post(API_CREATE_COMMENT, variables),
  getListSeaPort: (variables) => http.post(API_GET_SEA_PORT, variables),
  contactUs: (body: {
    fullName: string
    companyName: string
    website: string
    email: string
    phone: string
    industrySector: string
    desireToConnect: string
    suggestions: string
  }) => http.post(API_CONTACT_US, body),
}
