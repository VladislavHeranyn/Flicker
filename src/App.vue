<template>
  <div>
    <Navbar />
    <Spinner v-if="loading" />
    <MainContent v-else />
    <Tags />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import MainContent from "@/components/MainContent";
import Tags from "@/components/Tags";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("sendRequest", "car");
  },
  computed: {
    loading: function() {
      return this.$store.state.main.loading;
    }
  },
  components: {
    Navbar,
    Spinner,
    MainContent,
    Tags
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", serif;
  letter-spacing: 1px;
  box-sizing: border-box;
}
</style>