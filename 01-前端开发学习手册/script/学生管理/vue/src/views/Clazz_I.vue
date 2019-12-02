<template>
  <div id="Clazz_I">
    <h4>班级名称</h4>
    <el-input placeholder="请输入内容" v-model="input" clearable class="inp"></el-input>
    <el-button type="primary" plain class="btn">添加班级</el-button>
    <!-- <link rel="stylesheet" href="../bootstrap.min.css">
    <form method="post" action="/clazz">
      <div class="form-group">
        <label for="name">班级名称</label>
        <input type="text" name="name" class="form-control" id="name">
      </div>
      <button type="submit" class="btn btn-default">添加班级</button>
    </form>-->
  </div>
</template>

<style>
#Clazz_I h4 {
  margin-left: 3%;
}
#Clazz_I .inp {
  margin-left: 3%;
  margin-top: 2%;
  width: 93%;
}
#Clazz_I .btn{
  margin-left: 3%;
  margin-top: 2%;
}
</style>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>


