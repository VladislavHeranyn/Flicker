<template>
  <div class="container">
    <div class="form">
      <input
        placeholder="Search for images"
        type="text"
        @input="inputHandler"
        @value="value"
        @keypress.enter="send"
      />
      <button @click="send">Search</button>
    </div>
    <Card :posts="posts" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapActions } from "vuex";

export default {
  name: "MainContent",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    ...mapActions["sendRequest"],
    inputHandler(e) {
      this.value = e.target.value;
    },
    send() {
      this.$store.dispatch("sendRequest", this.value);
      this.value = "";
    }
  },
  props: ["posts"],
  components: {
    Card
  }
};
</script>
<style scoped>
.container {
  margin: 64px auto;
  max-width: 1100px;
  text-align: center;
}

input {
  padding: 10px;
  font-family: "Montserrat", serif;
  outline: none;
  border: none;
  border-bottom: 1px solid #8d8d8d;
}

button {
  font-family: "Montserrat", serif;
  font-weight: 500;
  cursor: pointer;
  background-color: #fec503;
  margin-left: 20px;
  padding: 10px 30px;
  outline: none;
  border: none;
}
</style>