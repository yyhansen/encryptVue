<template>
  <div id="app">
    <div id="header">
      <h1>在线加密解密系统</h1>
      <div class="nav">
        <router-link class="router" to="/aes">Go to AES</router-link>
        <router-link class="router" to="/des">Go to DES</router-link>
        <router-link class="router" to="/sha">Go to SHA</router-link>
      </div>
    </div>
    <router-view class="content"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#header{
  margin-top: 0;
  background-color: #333;
  color:#fff;
  height: 120px;
}

h1{
  font-weight: normal;
  margin-top: 10px;
}
.nav{
  margin-top: 45px;
}
.router{
  text-decoration: none;
  margin-left:30px;
  color:#fff;

}
.router:hover{
  color:#aaa;
}

</style>
