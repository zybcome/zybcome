  <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="u_name" label="用户名" width="120"></el-table-column>
    <el-table-column prop="u_id" label="用户ID" width="120"></el-table-column>
    <el-table-column prop="u_phone" label="电话" width="180"></el-table-column>
    <el-table-column prop="u_time" label="日期" width="250"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
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
          that.$store.state.api + "/quer_user",
          {
            u_id: JSON.parse(localStorage.getItem("msg")).u_id
          },
          { headers: { authorization: localStorage.getItem("token") } }
        )
        .then(function(res) {
          if (
            res.data !== 2 &&
            res.data !== 3 &&
            res.data !== 4 &&
            res.data !== 5
          ) {
            that.tableData = res.data;
          } else {
            that.$store.state.u_status = res.data;
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