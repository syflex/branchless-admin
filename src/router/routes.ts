import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Auth.vue') },
      { path: 'analytics', name: 'analytics', component: () => import('pages/Index.vue') },
      { path: 'cms', name: 'cms', component: () => import('pages/CMS.vue') },

  ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
