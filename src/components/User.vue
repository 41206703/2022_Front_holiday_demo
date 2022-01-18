<!--
 * @Author: your name
 * @Date: 2022-01-15 15:26:59
 * @LastEditTime: 2022-01-16 16:28:34
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2022For study\task\src\components\HelloWorld.vue
-->
<template>
  <div>
    <!-- <h2>用户信息</h2>
    <h3>获取状态:{{users.id}}</h3>
    <h3>返回代码:{{users.name}}</h3>
    <h3>返回代码:{{users.age}}</h3>
    <h3>返回代码:{{users.bir}}</h3> -->
    <form action="">
      用户名：<input type="text" v-model="user.username" /><br />
      密码：<input type="text" v-model="user.password" /><br />
      <el-button type="primary" plain @click="submit">登陆</el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "User",
  // props: {
  //   msg: String,
  // },
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
          "http://20.89.151.93:8000/users/login/",
          {
            username: this.user.username,
            password: this.user.password,
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
  created() {
    console.log(localStorage.getItem("access_token"));
    console.log(localStorage.getItem("refresh_token"));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
