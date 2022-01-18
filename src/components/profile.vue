<!--
 * @Author: your name
 * @Date: 2022-01-15 15:26:59
 * @LastEditTime: 2022-01-15 22:52:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \2022For study\task\src\components\HelloWorld.vue
-->
<template>
  <div>
    <h3 v-show="response.code">返回代码:{{ response.code }}</h3>
    <h3 v-show="response.msg">获取状态:{{ response.msg }}</h3>
    <ul>
      <li v-show="response.data.id">用户id:{{ response.data.id }}</li>
      <li v-show="response.data.username">用户名：{{ response.data.username }}</li>
      <li v-show="response.data.avatar">头像：{{ response.data.avatar }}</li>
      <li v-show="response.data.mobile">手机：{{ response.data.mobile }}</li>
      <li v-show="response.data.nickname">昵称：{{ response.data.nickname }}</li>
      <li v-show="response.data.description">描述：{{ response.data.description }}
      </li>
    </ul>
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
  created() {
    console.log(localStorage.getItem("access_token"));
    console.log(localStorage.getItem("refresh_token"));
    if (localStorage.getItem("access_token")) {
      this.$http
        .get("http://20.89.151.93:8000/users/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          this.response = res.data;
        })
        .catch((err) => {
          console.log(err.response);
          console.log(localStorage.getItem("refresh_token"));
          this.$http
            .post("http://20.89.151.93:8000/users/refresh/", {
              refresh: localStorage.getItem("refresh_token"),
            })
            .then((res) => {
              localStorage.setItem("access_token", res.data.data.access);
              this.$http
                .get("http://20.89.151.93:8000/users/", {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                      "access_token"
                    )}`,
                  },
                })
                .then((res) => {
                  this.response = res.data;
                });
            })
            .catch((err) => {
              console.log(err.response);
            });
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
