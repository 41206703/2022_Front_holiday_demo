<!--
 * @Author: your name
 * @Date: 2022-01-15 15:26:59
 * @LastEditTime: 2022-01-18 15:12:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \前端\2022For study\task\src\views\About.vue
-->
<template>
  <el-container>
    <el-header>
      <el-select
        v-model="value"
        filterable
        placeholder="选择Tag类型"
        style="width: 100%; color: #f00"
        clearable
        @change="changeselect"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-header>
    <el-main>
      <el-table
        :data="Dataappear"
        style="width: 100%"
        :row-style="{ height: '1rem' }"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="tag_id" label="Tag ID" width="140">
        </el-table-column>
        <el-table-column prop="tag_name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="tag_type" label="类型" width="180">
        </el-table-column>
        <el-table-column prop="subscribed_count" label="订阅数" width="180">
        </el-table-column>
        <el-table-column prop="archive_count" label="投稿数" width="140">
        </el-table-column>
        <el-table-column prop="featured_count" label="精选视频" width="180">
        </el-table-column>
        <el-table-column
          prop="short_content"
          label="简述"
          width="180"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="content"
          label="详述"
          width="180"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="length"
      >
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import { tableData } from "../../public/mock.js";

export default {
  data() {
    return {
      Dataappear: [],
      Datachange: [],
      length: "",
      Data: [],
      pagesize: 15,
      currentPage: 1,
      options: [
        {
          value: "new_channel",
          label: "new_channel",
        },
        {
          value: "old_channel",
          label: "old_channel",
        },
      ],
      value: "",
    };
  },

  methods: {
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      if (this.value != "") {
        // this.Data = this.Data.filter(
        //   (item) => this.value == item.tag_type
        // );
        this.Dataappear = this.Datachange.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      } else {
        this.Dataappear = this.Data.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      }
    },

    changeselect: function (select) {
      if (select != "") {
        this.Datachange = this.Data.filter((item) => select == item.tag_type);
        this.Dataappear = this.Datachange.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      } else {
        this.Datachange = this.Data;
        this.Dataappear = this.Datachange.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
    };
  },
  },
  created() {
    this.Data = tableData;
    this.length = this.Data.length;
    this.Dataappear = this.Data.slice(
      (this.currentPage - 1) * this.pagesize,
      this.currentPage * this.pagesize
    );
    // d
    // this.$http
    //   .get(
    //     "https://api.bilibili.com/x/web-interface/view/detail/tag?aid=1111111",
    //     {
    //       headers: {
    //         "User-Agent": "PostmanRuntime/7.29.0",
    //       },
    //     }
    //   )
    //   this.$jsonp("https://api.bilibili.com/x/web-interface/view/detail/tag?aid=1111111")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  },
};
</script>
