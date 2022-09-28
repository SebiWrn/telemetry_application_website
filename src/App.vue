<template>
  <div class="navbar">
    <router-link :to="{ name: 'home'}"><span>Home</span></router-link>
    <router-link :to="{ name: 'roadmap'}"><span>Roadmap</span></router-link>
    <router-link :to="{ name: 'impressum'}"><span>Impressum</span></router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: $dark_gray;
  height: 50px;
}

.navbar a {
  display: flex;
  height: 100%;
  float: left;
  background-color: $medium_gray;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  outline-color: black;
  padding: 5px;
  color: $text_color;
  text-decoration: none;
  align-items: center;

  &:not(:first-child) {
    &:not(:last-child) {
      margin-left: -2px;
    }

    &:last-child {
      float: right;
    }
  }


  &:hover {
    opacity: .7;
  }
}
</style>
