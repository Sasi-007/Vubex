<template>
  <header>
      <ul>
          <li>
              <router-link to='/' exact>Blogs</router-link>
          </li>
          <li>
               <router-link to='/add' exact>Add New Blog</router-link>
          </li>
      </ul>
  </header>
</template>

<script>
export default {
    data(){
        return{
            title:'Ninja'
        }
    }
}
</script>

<style scoped>
    header{
        background: lightgreen;
        padding: 10px
    }
    header ul{
        list-style: none;
    }
    header li{
        display: inline-block;
        margin: 0 1em;
        
    }
    a{
        text-decoration: none;
        color: brown
    }
    .router-link-active{
        background: #ccc;
        color: #444;
        padding: 7px 20px;
    }
</style>