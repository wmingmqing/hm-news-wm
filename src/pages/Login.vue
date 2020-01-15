<template>
  <div class="login">
    <div class="close">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="username">
      <hm-input type='text' placeholder="请输入用户名" v-model="username" :rules='/^1\d{3,10}$/' err-msg='输入用户名格式错误'></hm-input>
    </div>
    <div class="password">
      <hm-input type='password' placeholder="请输入密码" v-model="password" :rules='/^\d{1,10}$/' err-msg='输入密码错误'></hm-input>
    </div>
    <div class="btn">
      <hm-button @click="login">登录</hm-button>
    </div>
  </div>
</template>

<script>
import HmInput from '../component/HMinput'
import HmButton from '../component/HMbutton'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  components: {
    HmInput,
    HmButton
  },
  methods: {
    async  login () {
      console.log('111')
      if (!this.username || !this.password) return

      const res = await axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          username: this.username,
          password: this.password
        }
      })
      console.log(res)
      if (res.data.statusCode === 401) {
        alert('用户名或密码错误')
      } else {
        alert('登陆成功')
      }
    }
  }
}
</script>

<style lang="scss" scoped >
.login {
  padding: 20px;
  .close {
    i {
      font-size: 27px;
    }
  }
  .logo {
    text-align: center;
    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
  .btn {
    margin-top: 20px;
  }
}
</style>
