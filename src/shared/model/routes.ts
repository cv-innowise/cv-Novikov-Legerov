const authRoutes = {
  root: '/auth',
  login: '/auth/login',
  signup: '/auth/signup'
} 

const usersRoutes = {
  users: '/users'
}

const routes = {
  root: '/',
  forgotPassword: '/forgot-password',
  authRoutes: authRoutes,
  usersRoutes: usersRoutes
}

export default routes;