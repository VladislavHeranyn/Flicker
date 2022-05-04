<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo link">Flicker API</div>
      <div class="link hide">Docs</div>
      <div class="link hide">About</div>
      <div class="link hide">GitHub</div>
      <button class="menu">Menu</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
button {
  display: none;
  font-family: "Montserrat", serif;
  font-weight: 500;
  cursor: pointer;
  background-color: #fec503;
  padding: 10px 30px;
  outline: none;
  border: none;
  border-radius: 8px;
}

nav {
  background-color: #212529;
}

.container {
  padding: 10px 30px;
  display: flex;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

.link {
  text-transform: uppercase;
  color: white;
  font-size: 1rem;
  margin-right: 30px;
  cursor: pointer;
}

.link:hover {
  color: #fec503;
}

.logo {
  font-size: 1.75rem;
  font-family: "Kaushan Script", cursive;
  text-transform: none;
  color: #fec503;
  margin-right: auto;
}

@media (max-width: 760px) {
  button {
    display: block;
  }

  .hide {
    display: none;
  }
}
</style>