<!--
 * @Author: your name
 * @Date: 2022-01-15 15:26:59
 * @LastEditTime: 2022-01-16 16:28:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2022For study\task\src\components\HelloWorld.vue
-->
<template>
  <div>
    <h2>用户注册信息填写</h2>
    <form action="">
      用户名：<input type="text" v-model="user.username" /><br /><br />
      昵称：<input type="text" v-model="user.nickname" /><br /><br />
      密码：<input type="text" v-model="user.password" /><br /><br />
      确认密码：<input type="text" v-model="user.password2" /><br /><br />
      手机号：<input type="text" v-model="user.mobile" /><br /><br />
      <el-button type="success" plain @click="submit">注册</el-button>
    </form>
    <h3 v-show="response.code">返回代码:{{ response.code }}</h3>
    <h3 v-show="response.msg">获取状态:{{ response.msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "UserRegister",
  props: {
    msg: String,
  },
  data() {
    return {
      user: {},
      response: {},
    };
  },
  methods: {
    submit() {
      console.log(this.user);
      this.$http
        .post(
          "http://20.89.151.93:8000/users/register/",
          {
            username: this.user.username,
            nickname: this.user.nickname,
            password: this.user.password,
            password2: this.user.password2,
            mobile: this.user.mobile,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          this.response = res.data;
          console.log(this.response);
          localStorage.setItem("access_token", this.response.data.access);
          localStorage.setItem("refresh_token", this.response.data.refresh);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
