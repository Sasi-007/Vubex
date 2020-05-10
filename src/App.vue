<template>
  <div id="app">
    <app-header></app-header>
   <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import ListBlog from './components/ListBlog'
export default {
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'add-blog':AddBlog,
    'show-blog':ShowBlog,
    'list-blog':ListBlog
  },
  name: 'App',
    data () {
    return {
    }
  }
}
</script>

<style>
body{
  font-family: Arial, Helvetica, sans-serif;
  margin:0
}
#app {
margin: 0
}
</style>
