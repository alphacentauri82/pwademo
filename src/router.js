import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/Posts.vue'
import Photos from './views/Photos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    }
  ]
})
