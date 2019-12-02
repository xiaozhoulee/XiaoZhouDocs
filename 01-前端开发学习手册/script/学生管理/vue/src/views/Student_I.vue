<template>
  <div id="Student_I">
    <h4>学生名称</h4>
    <el-input placeholder="请输入内容" v-model="input" clearable class="inp"></el-input>
    <h4>选择班级</h4>
    <el-select v-model="value" clearable placeholder="请选择" class="sele">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br>
    <el-button type="primary" plain class="btn">添加学生</el-button>
  </div>
</template>

<style>
#Student_I h4 {
  margin-left: 3%;
  margin-top: 1%;
}
#Student_I .inp {
  margin-left: 3%;
  margin-top: 2%;
  width: 93%;
}
#Student_I .sele {
  margin-left: 3%;
  margin-top: 2%;
  width: 93%;
}
#Student_I .btn {
  margin-left: 3%;
  margin-top: 2%;
}
</style>

<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "计算机一班"
        },
        {
          value: "选项2",
          label: "计算机二班"
        },
        {
          value: "选项3",
          label: "计算机四班"
        },
        {
          value: "选项4",
          label: "计算机五班"
        },
        {
          value: "选项5",
          label: "计算机六班"
        }
      ],
      value: ""
    };
  }
};
</script>
