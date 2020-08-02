import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/Auth.vue') },
      { path: 'analytics', name: 'analytics', component: () => import('pages/Index.vue') },
      { path: 'analytics/users', name: 'users', component: () => import('pages/Users.vue') },
      { path: 'analytics/user/:phone', name: 'user-details', component: () => import('pages/Users.vue') },
      { path: 'analytics/bank-transaction', name: 'bank-transaction', component: () => import('pages/BankTransactions.vue') },
      { path: 'analytics/wallet-transaction', name: 'wallet-transaction', component: () => import('pages/WalletTransactions.vue') },
      { path: 'analytics/wallet-total', name: 'wallet-total', component: () => import('pages/WalletTotal.vue') },
      { path: 'analytics/savings', name: 'savings', component: () => import('pages/Savings.vue') },
      { path: 'analytics/plans', name: 'plans', component: () => import('pages/Plans.vue') },
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
