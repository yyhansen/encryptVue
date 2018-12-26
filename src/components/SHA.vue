<template>
  <div id="sha">
    <div class="header">
      <textarea id="plainText" type="text" v-model="plainText" placeholder="待哈希/散列的文本内容" />
    </div>
    <div class="button">
      <input type="button" id="SHA1" @click="sha1" value="SHA1">
      <input type="button" id="SHA256" @click="sha256" value="SHA256">
      <input type="button" id="SHA512" @click="sha512" value="SHA512">
    </div>
    <div class="content">
      <textarea id="hashText" v-model="hashText" placeholder="经哈希/散列后的结果"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SHA',
  data () {
    return {
      plainText: null,
      hashText: null
    }
  },
  methods: {
    sha1: function () {
      if (!this.plainText) {
        return
      }
      this.$http.post('http://localhost:8080/encrypt/sha/sha1', {
        plainText: this.plainText
      }).then(result => {
        this.hashText = result.data.hashText
      }, error => {
        console.log(error)
      })
    },
    sha256: function () {
      if (!this.plainText) {
        return
      }
      this.$http.post('http://localhost:8080/encrypt/sha/sha256', {
        plainText: this.plainText
      }).then(result => {
        this.hashText = result.data.hashText
      }, error => {
        console.log(error)
      })
    },
    sha512: function () {
      if (!this.plainText) {
        return
      }
      this.$http.post('http://localhost:8080/encrypt/sha/sha512', {
        plainText: this.plainText
      }).then(result => {
        this.hashText = result.data.hashText
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  #sha{
    text-align: center;
  }
  #plainText{
    margin-top: 12px;
    width:800px;
    height:60px;
  }
  input[type=button]{
    margin-top: 20px;
    width: 150px;
    height:50px;
    background-color: #68BEFF;
  }
  #hashText{
    margin-top: 20px;
    width: 800px;
    height:200px;
  }
</style>
