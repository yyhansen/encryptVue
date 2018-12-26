<template>
  <div id="aes">
    <div class="left plain-text">
      <div>
        <label>明文:加密内容放到这里</label>
      </div>
      <textarea id="plain_text" v-model="plainText" ></textarea><br/>
    </div>
    <div class="left center">
      <input type="text" id="password" v-model="password" placeholder="在此输入密钥">
      <input type="button" id="encrypt" @click="encrypt" value="加密" />
      <input type="button" id="decrypt" @click="decrypt" value="解密" />
    </div>
    <div class="left cipher-text">
      <label>密文:解密内容放到这里</label><br/>
      <textarea id="cipher_text" v-model="cipherText"></textarea><br/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'AES',
  data () {
    return {
      password: null,
      plainText: null,
      cipherText: null
    }
  },
  methods: {
    encrypt: function () {
      if (!this.plainText || !this.password) {
        return
      }
      this.$http.post('http://localhost:8080/encrypt/aes/encrypt', {
        plainText: this.plainText,
        password: this.password
      }).then(result => {
       this.cipherText = result.data.cipherText
      }, error => {
        console.log(error)
      })
    },
    decrypt: function () {
      if (!this.cipherText || !this.password) {
        return
      }
      this.$http.post('http://localhost:8080/encrypt/aes/decrypt', {
        cipherText: this.cipherText,
        password: this.password
      }).then(result => {
        this.plainText = result.data.plainText
      }, error => {
        console.log(error)
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#aes{
  width: 1200px;
  text-align: center;
  margin-top: 30px;
}
.left{
  margin-left: 10px;
  float: left;
}
.center{
  margin-top: 100px;
}
.plain-text{
  margin-left: 200px;
  width: 400px;
  height: 350px;
}
.cipher-text{
  width: 400px;
  height: 400px;
}
#plain_text,#cipher_text{
  width: 400px;
  height: 320px;
}
input{
  display: block;
  margin-top: 10px;
  width:150px;
  height: 50px;
}
input[type=button]{
  background-color: #68BEFF;
}

</style>
