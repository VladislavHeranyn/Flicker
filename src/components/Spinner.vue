<template>
  <div class="spinner">
    <div class="container">
      <div class="lds-dual-ring"></div>
      <h1>Sending Request...</h1>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  methods: {
    cancel() {
      this.$store.dispatch("cancelRequest");
    }
  }
};
</script>
<style scoped>
.spinner {
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  color: white;
  text-align: center;
}

button {
  font-family: "Montserrat", serif;
  font-weight: 500;
  cursor: pointer;
  background-color: #fec503;
  padding: 10px 30px;
  outline: none;
  border: none;
  margin-top: 10px;
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #cef;
  border-color: #cef transparent #cef transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>