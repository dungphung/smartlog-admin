import './App.less'
import { useMemo } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import NotFoundPage from 'src/pages/NotFoundPage'

import { QueryParamProvider } from 'use-query-params'
import HomePage from './pages/Home'
import IntroPage from './pages/IntroPage'
import PartnersPage from './pages/Partner'
import DashboardPage from './pages/Dashboard'
import AnalyticsPage from './pages/Analytics'
import UsersPage from './pages/Users'
import NewsPage from './pages/News'
import LookupPage from './pages/LookUp'
import ForumsPage from './pages/Forums'
import ForgetPasswordPage from './pages/ForgetPassword'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

const RouteAdapter = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const adaptedHistory = useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state })
      },
      push(location) {
        navigate(location, { replace: false, state: location.state })
      },
    }),
    [navigate],
  )
  return children({ history: adaptedHistory, location })
}

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={RouteAdapter}>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="users/*" element={<UsersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/lookup/*" element={<LookupPage />} />
          <Route path="/forum" element={<ForumsPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />

          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  )
}

export default App
