import { createRouter, createWebHistory } from 'vue-router'
import Videotheque from '../views/Videotheque.vue'
import FilmSingle from '../views/FilmSingle.vue'

const routes = [
  {
    path: '/',
    name: 'videotheque',
    component: Videotheque
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/film/:titre',
    name: 'filmSingle',
    component: FilmSingle,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
