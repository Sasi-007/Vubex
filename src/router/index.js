import Vue from 'vue'
import Router from 'vue-router'
import ShowBlog from '../components/ShowBlog'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/SingleBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog,
    },
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
