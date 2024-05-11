import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/deals',
    name: 'Deals',
    component: () => import('@/views/DealsPage.vue')
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('@/views/CustomersPage'),
  },
  {
    path: '/deal-edit/:id?',
    name: 'DealEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/DealEdit.vue'),
  },
  {
    path: '/customer-edit/:id?',
    name: 'CustomerEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CustomerEdit.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/DealsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
