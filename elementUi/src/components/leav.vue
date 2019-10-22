<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="hm_id" label="留言ID" width="120"></el-table-column>
    <el-table-column prop="company" label="公司名称" width="120"></el-table-column>
    <el-table-column prop="phone" label="手机号码" width="180"></el-table-column>
    <el-table-column prop="leav" label="留言内容" width="250"></el-table-column>
    <el-table-column prop="leav_time" label="留言时间" width="180"></el-table-column>
    <el-table-column fixed="right" align="right" width="200">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row,scope)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableData: []
    };
  },
  mounted() {
    var that = this;
    if (JSON.parse(localStorage.getItem("msg"))) {
      this.axios
        .post(
          that.$store.state.api + "/hm_leav",
          {},
          { headers: { authorization: localStorage.getItem("token") } }
        )
        .then(function(res) {
          console.log(res);
          if (
            res.data !== 2 &&
            res.data !== 3 &&
            res.data !== 4 &&
            res.data !== 5
          ) {
            that.tableData = res.data;
          } else {
          }
        });
    } else {
    }
  },
  methods: {
    handleEdit(index, row, scope) {
      console.log(index, row, scope);
    },
    handleDelete(index, row) {
      var that = this;
      console.log(localStorage.getItem("token"));
      console.log(row.hm_id);
      that.axios
        .post(
          that.$store.state.api + "/del_hm",
          {
            hm_id: row.hm_id
          },
          { headers: { authorization: localStorage.getItem("token") } }
        )
        .then(function(res) {
          alert(res.data);
        });
      // console.log(index, row);
      // row.user_name = "";
      // row.user_psw = "";
      // row.phone = "";
      // row.date = "";
      // row.name = "";
      // row.address = "";
    }
  }
};
</script>
 
<style scoped lang = "less">
</style>