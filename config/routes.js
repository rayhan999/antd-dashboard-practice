export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user/login',
        layout: false,
        name: 'login',
        component: './User/Login',
      },
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        name: 'register-result',
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: 'register',
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
      },
    ],
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    routes: [
      {
        name: 'Analysis',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './welcome',
      },
      {
        name: 'Monitor',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './practiceDashboard',
      },
      {
        name: 'Workplace',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './welcome',
      },
    ],
  },
  {
    path: '/inboxs',
    name: 'Inboxs',
    icon: 'inbox',
    component: './welcome',
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'notification',
    component: './welcome',
  },
  {
    path: '/banks',
    name: 'Banks',
    icon: 'bank',
    component: './welcome',
  },
  {
    path: '/locations',
    name: 'Locations',
    icon: 'map',
    component: './welcome',
  },
  {
    path: '/orders',
    name: 'Orders',
    icon: 'tag',
    component: './welcome',
  },
  {
    path: '/settings',
    icon: 'setting',
    name: 'Settings',
    routes: [
      {
        name: 'Addons',
        icon: 'smile',
        path: '/settings/addons',
        component: './welcome',
      },
      {
        name: 'user Management',
        icon: 'smile',
        path: '/settings/user-management',
        component: './welcome',
      }
    ],
  },
  {
    path: '/account',
    name: 'Account',
    icon: 'account',
    component: './welcome',
  },
  {
    path: '/user',
    name: 'User',
    icon: 'user',
    component: './welcome',
  },
  {
    path: '/issues',
    name: 'Issues',
    icon: 'issue',
    component: './welcome',
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    component: '404',
  },
];