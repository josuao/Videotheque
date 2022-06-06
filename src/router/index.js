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
