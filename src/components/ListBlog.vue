<template>
  <div id="show-blogs">
      <h1>List Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search-blog">
      <div :key="index" v-for="(blog,index) in filterBlog" class="single-blog">
          <h2 >{{blog.title | to-uppercase}}</h2>
      </div>
  </div>
</template>

<script>
import SearchMixin from '../mixins/SearchMixin'
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('https://vue-firebase-a7e9c.firebaseio.com/posts.json').then(
            function(data){
                console.log(data)
            }
        )
    },
    computed:{
       
    },
    mixins:[SearchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee
}
</style>