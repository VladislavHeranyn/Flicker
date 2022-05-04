<template>
  <footer>
    <div class="container">
      <div
          class="tag"
          v-for="(tag, inx) in tags"
          @click="getTag"
          :key="inx"
      >#{{ tag[0] }} x{{ tag[1] }}</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Tags',
  methods:{
    getTag(e){
      const value = e.target.textContent
          .split(' ')[0]
          .replace('#', '')
      this.$store.dispatch('sendRequest', value)
    }
  },
  computed: {
    tags: function (){
      return this.$store.state.main.tags
    }
  }
}
</script>

<style scoped>
footer{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1024;
  background-color: #212529;
  padding: 10px 30px;
}
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
}
.tag{
  margin: 0 14px;
}
.tag:hover{
  color: #6e6eff;
  cursor: pointer;
}
</style>