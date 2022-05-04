<template>
  <div class="container">
    <div v-for="(post, inx) in posts" :key="inx" class="card">
      <img :src="post.media.m" alt="Image" />
      <div class="data">
        <div class="date">{{ timeAgo.format(Date.parse(post.published)) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");
export default {
  name: "Card",
  data() {
    return {
      timeAgo
    };
  },
  computed: {
    // ...mapGetters['getTags'] -> Replaced with $store.prop
    posts: function() {
      return this.$store.state.main.posts;
    }
  }
};
</script>
<style scoped>
.container {
  max-width: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.card {
  width: 250px;
  font-size: 10px;
  margin: 30px 20px;
}

.data {
  display: flex;
  padding: 8px;
}

img {
  border-radius: 8px;
  height: 250px;
  width: 250px;
  object-fit: cover;
  object-position: center;
}
</style>