import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
  ,
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  }
  ,
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signin.vue')
  }
  ,
  {
    path: '/app',
    name: 'App',
    component: () => import(/* webpackChunkName: "about" */ '../views/App.vue')
  },
  {
    path: '/app/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/app/playlist/:id',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListOfPlaylist.vue')
  }
  ,
  {
    path: '/app/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/serach.vue')
  }
  ,
  {
    path: '/app/playlists',
    name: 'PlaylistPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Playlists.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
