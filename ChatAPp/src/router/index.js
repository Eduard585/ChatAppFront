import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Registration from '@/components/Registration'

import Home from '@/components/Home'
import RoomList from '@/views/Rooms'
import CreateRoom from '@/components/CreateRoom'
import store from '@/store'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/registration',
      name:'Registration',
      component:Registration
      
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      meta:{requiresAuth:true}
    },
    {
      path:'/rooms',
      name:'RoomList',
      component:RoomList,
      meta:{requiresAuth:true}      
    },
    {
      path:'/rooms/create-room',
      name:'CreateRoom',
      component:CreateRoom
    }
  ]
})

// If route require Auth, redirect to /login
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthentificated = store.getters.isAuthentificated;
  if (requiresAuth && !isAuthentificated) {
    next('/login');
    return;
  } else {
    if (requiresAuth && !isAuthentificated) {
      next();
      return;
    }
  }
  next();
});

export default router