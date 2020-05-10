<template>
<div>
 <ul> 
   <li :key=index v-for="(career, index) in careers"> 
     {{index}}-{{career}}
   </li>
 </ul>
 <ul>
   <ol :key="index" v-for="(number,index) in evenNumbers"> 
     <h1>{{number}}</h1>
   </ol>
 </ul>
</div>
</template> 

<script>
export default {
  name: 'Career',
  data () { 
    return {
      careers: ['Web Developer','Designer','App Developer'],
      numbers: [1,2,3,4,5]
    }
  },
  computed: {
    evenNumbers: function(){
      return this.numbers.filter(function(number) {
        return number % 2 ==0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
