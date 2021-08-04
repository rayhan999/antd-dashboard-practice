// https://umijs.org/config/
import React from 'react';
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';
import { HomeFilled } from '@ant-design/icons';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  routes,
  // umi routes: https://umijs.org/docs/routing
  // routes: [
  //   {
  //     path: '/user',
  //     layout: false,
  //     routes: [
  //       {
  //         path: '/user/login',
  //         layout: false,
  //         name: 'login',
  //         component: './User/Login',
  //       },
  //       {
  //         path: '/user',
  //         redirect: '/user/login',
  //       },
  //       {
  //         name: 'register-result',
  //         icon: 'smile',
  //         path: '/user/register-result',
  //         component: './user/register-result',
  //       },
  //       {
  //         name: 'register',
  //         icon: 'smile',
  //         path: '/user/register',
  //         component: './user/register',
  //       },
  //       {
  //         component: '404',
  //       },
  //     ],
  //   },
    
  //   {
  //     path: '/dash',
  //     name: 'Dashboard',
  //     icon: <HomeFilled />,
  //     routes: [
  //       {
  //         name: 'analysis',
  //         icon: 'smile',
  //         path: '/dash/analysis',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'monitor',
  //         icon: 'smile',
  //         path: '/old_dashboard/monitor',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'workplace',
  //         icon: 'smile',
  //         path: '/old_dashboard/workplace',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/dashboard',
  //     name: 'dashboard',
  //     icon: 'smile',
  //     component: './practiceDashboard',
  //   },
  //   {
  //     path: '/form',
  //     icon: 'form',
  //     name: 'form',
  //     routes: [
  //       {
  //         name: 'basic-form',
  //         icon: 'smile',
  //         path: '/form/basic-form',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'step-form',
  //         icon: 'smile',
  //         path: '/form/step-form',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'advanced-form',
  //         icon: 'smile',
  //         path: '/form/advanced-form',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/list',
  //     icon: 'table',
  //     name: 'list',
  //     routes: [
  //       {
  //         path: '/list/search',
  //         name: 'search-list',
  //         component: './welcome',
  //         routes: [
  //           {
  //             path: '/list/search',
  //             redirect: '/list/search/articles',
  //           },
  //           {
  //             name: 'articles',
  //             icon: 'smile',
  //             path: '/list/search/articles',
  //             component: './welcome',
  //           },
  //           {
  //             name: 'projects',
  //             icon: 'smile',
  //             path: '/list/search/projects',
  //             component: './welcome',
  //           },
  //           {
  //             name: 'applications',
  //             icon: 'smile',
  //             path: '/list/search/applications',
  //             component: './welcome',
  //           },
  //         ],
  //       },
  //       {
  //         name: 'table-list',
  //         icon: 'smile',
  //         path: '/list/table-list',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'basic-list',
  //         icon: 'smile',
  //         path: '/list/basic-list',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'card-list',
  //         icon: 'smile',
  //         path: '/list/card-list',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/profile',
  //     name: 'profile',
  //     icon: 'profile',
  //     routes: [
  //       {
  //         name: 'basic',
  //         icon: 'smile',
  //         path: '/profile/basic',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'advanced',
  //         icon: 'smile',
  //         path: '/profile/advanced',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'result',
  //     icon: 'CheckCircleOutlined',
  //     path: '/result',
  //     routes: [
  //       {
  //         name: 'success',
  //         icon: 'smile',
  //         path: '/result/success',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'fail',
  //         icon: 'smile',
  //         path: '/result/fail',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'exception',
  //     icon: 'warning',
  //     path: '/exception',
  //     routes: [
  //       {
  //         name: '403',
  //         icon: 'smile',
  //         path: '/exception/403',
  //         component: './welcome',
  //       },
  //       {
  //         name: '404',
  //         icon: 'smile',
  //         path: '/exception/404',
  //         component: './welcome',
  //       },
  //       {
  //         name: '500',
  //         icon: 'smile',
  //         path: '/exception/500',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'account',
  //     icon: 'user',
  //     path: '/account',
  //     routes: [
  //       {
  //         name: 'center',
  //         icon: 'smile',
  //         path: '/account/center',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'settings',
  //         icon: 'smile',
  //         path: '/account/settings',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'editor',
  //     icon: 'highlight',
  //     path: '/editor',
  //     routes: [
  //       {
  //         name: 'flow',
  //         icon: 'smile',
  //         path: '/editor/flow',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'mind',
  //         icon: 'smile',
  //         path: '/editor/mind',
  //         component: './welcome',
  //       },
  //       {
  //         name: 'koni',
  //         icon: 'smile',
  //         path: '/editor/koni',
  //         component: './welcome',
  //       },
  //     ],
  //   },
  //   {
  //     path: '/',
  //     redirect: '/dashboard',
  //   },
  //   {
  //     component: '404',
  //   },
  // ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
