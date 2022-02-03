import axios from 'axios'
import keys from 'src/constants/keys'
import cookie from 'js-cookie'

const envs = {
  dev: {
    baseURL: 'https://be.ausvietsupplycollaboration.org',
  },
  stage: {
    baseURL: 'http://web-vnau-be.danghung.xyz',
  },
  qa: {
    baseURL: 'https://web-vnau-be.danghung.xyz',
  },
  prod: {
    baseURL: 'https://be.ausvietsupplycollaboration.org',
  },
}
const { REACT_APP_ENV = 'dev' } = process.env
const { baseURL } = envs[REACT_APP_ENV]

// Set config defaults when creating the instance
const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
client.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = cookie.get(keys.TOKEN)
  const lang = cookie.get(keys.LANGUAGE)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  if (lang) {
    config.headers.lang = lang === 'en' ? 'en' : 'vn'
  }
  return config
})

// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const data = get(error, "response.data");
    // if (data) {
    //   message.error(data.message);
    // } else {
    //   error = get(error, "response.data");
    // }

    return Promise.reject(error)
  },
)

export const http = client
