<template>
  <div id="add-blog">
      <h2>Add a New Blog post</h2>
      <form v-if="!submitted">
          <label for="">Blog Title</label>
          <input type="text" v-model.lazy="blog.title" required />
        <label for="">Blog Content</label>
         <textarea v-model.lazy="blog.content"></textarea>
         <div id="checkbox">
             <label>Yoshi</label>
             <input type="checkbox" value="yoshi" v-model="blog.categories">
               <label>Lokesh</label>
                  <input type="checkbox" value="lokesh" v-model="blog.categories">
               <label>Udhay</label>
                 <input type="checkbox" value="udhay" v-model="blog.categories">
                <label>Kumar</label>
                 <input type="checkbox" value="kumar" v-model="blog.categories">
         </div>
         <select v-model="blog.author">
             <option :key="index" v-for="(author,index) in authors">{{author}}</option>
         </select>
         <button v-on:click.prevent="post">Add Post</button>
         <p v-if="submitted"></p>
      </form>
      <div id="preview">
          <h3>Preview Blog</h3>
          <p>Blog Tilte: {{blog.title}}</p>
          <p>Blog Content:</p>
          <p>{{blog.content}}</p>
          <p>Blog category:</p>
          <ul>
              <li :key="index" v-for="(category,index) in blog.categories">{{index+1}} - {{category}}</li>
          </ul>
          <p>Author: {{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            blog:{
                title:"",
                content:"",
                categories:[],
                author:""
            },
            authors:['The Net Ninja','The Angular Avenger','The Vue Ventator'],
            submitted:false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://vue-firebase-a7e9c.firebaseio.com/posts.json', this.blog
            //  {
            //     // title:this.blog.title,
            //     // body:this.blog.content,
            // }
            ).then(function(data){
                console.log(data);
                this.submitted=true
            }
            )
        }
    }

}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea,select{
    display: block;
    width:100%;
    padding: 8px;
    border: 1px solid #ccc
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 2em 0;
}

h3{
    margin-top: 10px;
}

#checkboxes input{
 display: inline-block;
 margin-right: 1em;
}

#checkbox label{
    display: inline-block;
}

</style>