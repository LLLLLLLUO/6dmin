import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('../views/welcome/login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/welcome/home.vue'),
    redirect: '/home/welcome',
    children: [
      {
        path: 'welcome',
        component: () => import('../views/welcome/WelCome.vue')
      },
      {
        path: 'vips',
        component: () => import('../views/vips/vips.vue')
      },
      {
        path: 'user',
        component: () => import('../views/user/user.vue')
      },
      {
        path: 'goods',
        component: () => import('../views/goods/goods.vue')
      },
      {
        path: 'admingoods',
        component: () => import('../views/admingoods/admingoods.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach((to, form, next) => {
  let token = sessionStorage.token;
  if (token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router;
